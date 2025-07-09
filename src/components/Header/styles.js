import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
`;

export const LogoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #f5f7fb;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  img {
    width: 70px;
    height: 70px;
  }
`;

export const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .status-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffc107;
    box-shadow: 0 0 10px rgba(40, 167, 69, 0.5);
    transition: background 0.3s;
  }
  &.connected .status-dot { background: #28a745; }
  &.error .status-dot { background: #dc3545; }
`;