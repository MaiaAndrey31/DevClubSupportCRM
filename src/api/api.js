// Centraliza as chamadas à API
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export async function getPedidos() {
  const res = await fetch(`${BASE_URL}/pedidos`);
  if (!res.ok) throw new Error('Erro ao buscar pedidos');
  return res.json();
}

// Outras funções de API podem ser adicionadas aqui
