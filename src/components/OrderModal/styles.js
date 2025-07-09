import styled from 'styled-components';

export const ModalOverlay = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 12, 36, 0.8);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  width: 100%;
  max-width: 700px;
  padding: 2rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
`;

export const CloseButton = styled.button`
  font-size: 1.75rem;
  color: #888;
  background: none;
  border: none;
  cursor: pointer;
`;
