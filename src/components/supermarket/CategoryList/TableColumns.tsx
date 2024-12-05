import { cn } from '@/lib/utils';
import { Category } from '@/types/category';
import { ColumnDef } from '@tanstack/react-table';
import ActionsTable from './ActionsTable';

export const columnsCategory: ColumnDef<Category>[] = [
  {
    accessorKey: 'name',
    meta: {},
    header: () => (
      <div className="font-semibold text-lg w-[1031px] h-[42px]">
        Nome da categoria
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="font-normal text-lg leading-[1.2] w-[1031px]">
          {row.getValue('name')}
        </div>
      );
    },
  },
  {
    accessorKey: 'ordination',
    header: () => (
      <div className="font-semibold text-lg w-[130px] h-[42px]">Ordenação</div>
    ),
    cell: ({ row }) => {
      const ordination = String(row.getValue('ordination'));

      return (
        <div className="font-normal text-lg w-[130px] leading-[1.2]">
          {ordination}
        </div>
      );
    },
  },
  {
    accessorKey: 'productQuantify',
    header: () => (
      <div className="font-semibold text-lg w-[225px] h-[42px]">
        Qntd. produtos
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div
          className={cn(
            'font-normal text-lg leading-[1.2] w-[225px] text-customMkt-green',
          )}
        >
          {row.getValue('productQuantify')}
        </div>
      );
    },
  },
  {
    id: 'actions',
    header: () => (
      <div className="font-semibold text-lg w-[100px] h-[42px]">Ações</div>
    ),
    cell: () => <ActionsTable />,
  },
];
