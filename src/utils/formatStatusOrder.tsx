const statusBackground: Record<string, string> = {
  Pendente: '#EEBE10',
  Aceito: '#F28608',
  'Em separação': '#2F7958',
  'Rota de entrega': '#276EFF',
  Concluído: '#F9871F',
  Cancelado: '#BF1818',
};

export function formatStatusOrder(status: string) {
  return {
    backgroundColor: statusBackground[status],
  };
}
