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
    header: 'Endereço',
  },
  {
    accessorKey: 'value',
    header: 'Valor',
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
