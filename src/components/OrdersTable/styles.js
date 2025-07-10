import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 1.2rem 1.5rem;
    text-align: left;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    color: var(--text-color);
    font-weight: 400;
  }
  th {
    background-color: rgba(0, 12, 36, 0.6);
    font-weight: 600;
  }
`;