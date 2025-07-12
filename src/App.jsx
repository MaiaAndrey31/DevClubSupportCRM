import { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Header from './components/Header';
import SidebarFilters from './components/SidebarFilters';
import OrdersTable from './components/OrdersTable';
import Pagination from './components/Pagination';
import OrderModal from './components/OrderModal';
import { getPedidos } from './api/api';
import { ThemeProvider } from 'styled-components';
import { Content, Layout, MainContent } from './styles.App';



function App() {
  const [status, setStatus] = useState('connecting');
  const [pedidos, setPedidos] = useState([]);
  const [filtros, setFiltros] = useState({ status: '', busca: '' });
  const [pagina, setPagina] = useState(1);
  const [itensPorPagina] = useState(10);
  const [modalPedido, setModalPedido] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchPedidos() {
      try {
        setStatus('connecting');
        const data = await getPedidos();
        setPedidos(data);
        setStatus('connected');
      } catch {
        setStatus('error');
      }
    }
    fetchPedidos();
  }, []);

  const pedidosFiltrados = pedidos.filter(p => {
    const statusOk = !filtros.status || p.status === filtros.status;
    const buscaOk = !filtros.busca || [p.nome, p.email, p.telefone].some(v => v?.toLowerCase().includes(filtros.busca.toLowerCase()));
    return statusOk && buscaOk;
  });

  const totalPaginas = Math.ceil(pedidosFiltrados.length / itensPorPagina);
  const pedidosPagina = pedidosFiltrados.slice((pagina - 1) * itensPorPagina, pagina * itensPorPagina);

  function handleStatusChange(status) {
    setFiltros(f => ({ ...f, status }));
    setPagina(1);
  }
  function handleSearchChange(busca) {
    setFiltros(f => ({ ...f, busca }));
    setPagina(1);
  }
  function handleApplyFilters() {
    setPagina(1);
  }
  function handleResetFilters() {
    setFiltros({ status: '', busca: '' });
    setPagina(1);
  }
  function handleViewPedido(pedido) {
    setModalPedido(pedido);
    setShowModal(true);
  }
  function handleEditPedido(pedido) {
    setModalPedido(pedido);
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
    setModalPedido(null);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header status={status} page='Troféus Dev Club' />
        <Content>
          <SidebarFilters
            status={filtros.status}
            search={filtros.busca}
            onStatusChange={handleStatusChange}
            onSearchChange={handleSearchChange}
            onApply={handleApplyFilters}
            onReset={handleResetFilters}
          />
          <MainContent>
            <OrdersTable pedidos={pedidosPagina} onView={handleViewPedido} onEdit={handleEditPedido} />
            <Pagination
              page={pagina}
              totalPages={totalPaginas}
              onPrev={() => setPagina(p => Math.max(1, p - 1))}
              onNext={() => setPagina(p => Math.min(totalPaginas, p + 1))}
            />
          </MainContent>
        </Content>
        <OrderModal
          show={showModal}
          pedido={modalPedido}
          onClose={handleCloseModal}
          onNotify={() => alert('Notificação enviada!')}
          onStatusChange={status => setModalPedido(p => ({ ...p, status }))}
          onRastreioChange={codigoRastreio => setModalPedido(p => ({ ...p, codigoRastreio }))}
          onStatusUpdate={() => alert('Status atualizado!')}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
