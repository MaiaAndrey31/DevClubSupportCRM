import styled from 'styled-components';
import StatusBadge from './StatusBadge';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
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

import PropTypes from 'prop-types';

export default function OrdersTable({ pedidos, onView, onEdit }) {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Tipo de Troféu</th>
            <th>Status</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.length === 0 ? (
            <tr>
              <td colSpan={7} className="loading">Carregando pedidos...</td>
            </tr>
          ) : (
            pedidos.map(pedido => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.nome}</td>
                <td>{pedido.telefone}</td>
                <td>{pedido.tipoTrofeu || 'Não informado'}</td>
                <td><StatusBadge status={pedido.status} /></td>
                <td>{pedido.data}</td>
                <td>
                  <button className="btn btn-icon" title="Visualizar" onClick={() => onView(pedido)}>
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-icon" title="Editar" onClick={() => onEdit(pedido)}>
                    <i className="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </TableContainer>
  );
}

OrdersTable.propTypes = {
  pedidos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
