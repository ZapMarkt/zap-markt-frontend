import { ordersColumns } from '@/types/Order';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<ordersColumns>[] = [
  {
    accessorKey: 'id',
    header: 'Pedido',
  },
  {
    accessorKey: 'name',
    header: 'Nome do cliente',
  },
  {
    accessorKey: 'adress',
    header: () => <div className="font-semibold text-lg">Endereço</div>,
  },
  {
    accessorKey: 'value',
    header: () => <div className="font-semibold text-lg">Valor</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('value'));
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount);

      return <div className="font-normal">{formatted}</div>;
    },
  },
  {
    accessorKey: 'quantify',
    header: 'Qtd.',
  },
  {
    accessorKey: 'payMethod',
    header: 'Forma de Pagamento',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'action',
    header: 'Ação',
  },
];
