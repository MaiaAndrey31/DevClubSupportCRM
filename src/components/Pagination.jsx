import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  background: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

import PropTypes from 'prop-types';

export default function Pagination({ page, totalPages, onPrev, onNext }) {
  return (
    <PaginationWrapper>
      <Button onClick={onPrev} disabled={page <= 1}>&lt;</Button>
      <span>Página {page} de {totalPages}</span>
      <Button onClick={onNext} disabled={page >= totalPages}>&gt;</Button>
    </PaginationWrapper>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};
