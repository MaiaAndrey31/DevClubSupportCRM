import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: var(--white);

  @media (max-width: 800px) {
    padding: 0.7rem 1rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem;
  }
`;

export const LogoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #f5f7fb;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  img {
    width: 90px;
    height: 80px;
    @media (max-width: 600px) {
      width: 60px;
      height: 50px;
    }
    @media (max-width: 400px) {
      width: 44px;
      height: 38px;
    }
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
  @media (max-width: 500px) {
    gap: 0.3rem;
    .status-dot {
      width: 10px;
      height: 10px;
    }
  }
`;