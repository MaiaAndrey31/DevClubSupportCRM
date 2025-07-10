import styled from 'styled-components';

export const Sidebar = styled.aside`
  width: 280px;
  background-color: #49167C;
  border-right: 1px solid var(--border-color);
  padding: 1.5rem;
  overflow-y: auto;
`;

export const FilterSection = styled.div`
  .filter-group {
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  h3 {
    margin-bottom: 1rem;
    color: var(--text-color);
    font-size: 1.1rem;
  }
`;
