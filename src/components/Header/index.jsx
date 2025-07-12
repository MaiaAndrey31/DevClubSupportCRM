

import PropTypes from 'prop-types';
import { HeaderContainer, HeaderLink, LogoTitle, Navigation, StatusIndicator } from './styles';
import Logo from '../../assets/logo.jpg';
import { useResolvedPath } from 'react-router-dom'


export default function Header({ status, page }) {
  const { pathname } = useResolvedPath()
  return (
    <HeaderContainer>
      <LogoTitle>
        <img src={Logo} alt="logo" /> {page}
      </LogoTitle>
      <Navigation>
        <div>
        <HeaderLink to={'/'} $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <HeaderLink to={'/painel'} $isActive={pathname === '/painel'}>
              Troféus
            </HeaderLink>
            <HeaderLink to={'/faq'} $isActive={pathname === '/faq'}>
              FAQ
            </HeaderLink>
            <HeaderLink to={'/faq'} $isActive={pathname === '/faq'}>
              FAQ
            </HeaderLink>
            <HeaderLink to={'/utils'} $isActive={pathname === '/utils'}>
              FAQ
            </HeaderLink>
            <HeaderLink to={'/utils'} $isActive={pathname === '/utils'}>
            Links Úteis
            </HeaderLink>
        </div>
      </Navigation>
      <StatusIndicator className={status}>
        <span className="status-dot" />
        <span>{status === 'connected' ? 'Conectado' : status === 'error' ? 'Erro' : 'Conectando...'}</span>
      </StatusIndicator>
    </HeaderContainer>
  );
}

Header.propTypes = {
  status: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
