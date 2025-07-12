

import PropTypes from 'prop-types';
import { HeaderContainer, LogoTitle, StatusIndicator } from './styles';
import Logo from '../../assets/logo.jpg';

export default function Header({ status, page }) {
  return (
    <HeaderContainer>
      <LogoTitle>
        <img src={Logo} alt="logo" /> {page}
      </LogoTitle>
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
