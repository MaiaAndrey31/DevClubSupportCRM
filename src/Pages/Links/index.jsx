import { useState, useEffect } from 'react';
import { CopyIcon, Plus, PencilSimple, Trash } from '@phosphor-icons/react';
import * as PhosphorIcons from '@phosphor-icons/react';
import { Layout, Container, Title, LinksGrid, LinkCard, LinkIcon, LinkContent, LinkTitle, LinkDescription, CopiedMessage, ActionButton, ActionButtons, AddButton } from './styles';
import Header from '../../components/Header';
import LinkForm from '../../components/LinkForm';
import { getLinks, deleteLink } from '../../api/api';

const Links = () => {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [copiedUrl, setCopiedUrl] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Load links on component mount
  useEffect(() => {
    loadLinks();
  }, []);

  const loadLinks = async () => {
    try {
      setIsLoading(true);
      const data = await getLinks();
      setLinks(data);
    } catch (err) {
      setError('Erro ao carregar os links. Tente novamente mais tarde.');
      console.error('Erro ao carregar links:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopiedUrl(''), 2000);
    } catch (err) {
      console.error('Falha ao copiar o link:', err);
      setError('Não foi possível copiar o link para a área de transferência.');
    }
  };

  const handleEdit = (link) => {
    setCurrentLink(link);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este link?')) return;
    
    try {
      setIsDeleting(id);
      await deleteLink(id);
      setLinks(links.filter(link => link.id !== id));
    } catch (err) {
      console.error('Erro ao excluir link:', err);
      setError('Não foi possível excluir o link. Tente novamente.');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleFormSuccess = () => {
    loadLinks();
    setIsFormOpen(false);
    setCurrentLink(null);
  };
  // Function to render icon dynamically based on icon name
  const renderIcon = (iconName, size = 32) => {
    const IconComponent = PhosphorIcons[`${iconName}Icon`] || PhosphorIcons.Link;
    return <IconComponent size={size} weight="bold" />;
  };

  return (
    <Layout>
      <Header status={status} page="Links Úteis" />
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <Title>Links Úteis</Title>
          <AddButton onClick={() => {
            setCurrentLink(null);
            setIsFormOpen(true);
          }}>
            <Plus size={20} weight="bold" /> Adicionar Link
          </AddButton>
        </div>

        {error && <div style={{ color: '#ff6b6b', marginBottom: '1rem' }}>{error}</div>}

        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>Carregando links...</div>
        ) : links.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#a0aec0' }}>
            Nenhum link cadastrado. Clique em &quot;Adicionar Link&quot; para começar.
          </div>
        ) : (
          <LinksGrid>
            {links.map((link) => (
              <LinkCard 
                key={link.id}
                onClick={() => copyToClipboard(link.url)}
                title={`Clique para copiar: ${link.url}`}
              >
                <LinkIcon>{renderIcon(link.icon || 'Link')}</LinkIcon>
                <LinkContent>
                  <LinkTitle>{link.title}</LinkTitle>
                  <LinkDescription>{link.description || link.url}</LinkDescription>
                  {copiedUrl === link.url && (
                    <CopiedMessage>
                      <PhosphorIcons.Check size={14} weight="bold" /> Copiado!
                    </CopiedMessage>
                  )}
                </LinkContent>
                <ActionButtons>
                  <ActionButton 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(link);
                    }}
                    title="Editar"
                  >
                    <PencilSimple size={18} />
                  </ActionButton>
                  <ActionButton 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(link.id);
                    }}
                    title="Excluir"
                    disabled={isDeleting === link.id}
                    $danger
                  >
                    <Trash size={18} />
                  </ActionButton>
                  <ActionButton 
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(link.url);
                    }}
                    title="Copiar link"
                  >
                    <CopyIcon size={18} />
                  </ActionButton>
                </ActionButtons>
              </LinkCard>
            ))}
          </LinksGrid>
        )}
      </Container>

      {isFormOpen && (
        <LinkForm 
          link={currentLink}
          onClose={() => {
            setIsFormOpen(false);
            setCurrentLink(null);
          }}
          onSuccess={handleFormSuccess}
        />
      )}
    </Layout>
  );
};

export default Links;