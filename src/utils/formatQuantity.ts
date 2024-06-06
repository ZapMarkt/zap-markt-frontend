import { Product } from '../types/Order';

export const formatQuantity = (product: Product): string => {
  const { quantidade, unidade } = product;

  const formattedQuantity = quantidade.toLocaleString('pt-BR');

  switch (unidade) {
    case 'un':
      return `${formattedQuantity} un`;
    case 'kg':
      return `${formattedQuantity} kg`;
    case 'g':
      return `${formattedQuantity} gr`;
    // Adicione outros casos conforme necessário
    default:
      return `${formattedQuantity} ${unidade}`;
  }
};
