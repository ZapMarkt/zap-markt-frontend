import { Product } from '@/types/Products';
import { ColumnDef } from '@tanstack/react-table';
import { ShoppingBasket } from 'lucide-react';
import ActionButons from '../ActionButtons';

export const columnsProducts: ColumnDef<Product>[] = [
  {
    accessorKey: 'img',
    header: () => <div className="w-[40px] h-[22px]"></div>,
    cell: ({ row }) => {
      const imageUrl = String(row.getValue('img'));
      const productName = String(row.getValue('name'));

      if (imageUrl.length === 0) {
        return (
          <div className="flex justify-center items-center bg-customMkt-whiteF0 h-10 w-10 p-2 rounded-[2px]">
            <ShoppingBasket color="#A5A5A5" className="w-6 h-6" />
          </div>
        );
      }

      return (
        <div className="w-10 h-10 flex items-center justify-center">
          <img src={imageUrl} alt={productName} className="h-full" />
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: () => (
      <div className="font-semibold text-lg w-[328px] h-[22px]">Produto</div>
    ),
    cell: ({ row }) => {
      const name = String(row.getValue('name'));

      return (
        <div className="font-normal text-lg w-[250px] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: 'category',
    header: () => (
      <div className="font-semibold text-lg w-[280px] h-[22px]">Categoria</div>
    ),
    cell: ({ row }) => {
      const category = String(row.getValue('category'));

      return (
        <div className="font-normal text-lg leading-[1.2] w-[280px] whitespace-nowrap overflow-hidden text-ellipsis">
          {category}
        </div>
      );
    },
  },
  {
    accessorKey: 'codeBar',
    header: () => (
      <div className="font-semibold text-lg w-[220px] h-[22px]">
        Código de barras
      </div>
    ),
    cell: ({ row }) => {
      const codeBar = parseFloat(row.getValue('codeBar'));

      return (
        <div className="font-normal text-lg leading-[1.2] w-[220px] whitespace-nowrap overflow-hidden text-ellipsis">
          {codeBar}
        </div>
      );
    },
  },
  {
    accessorKey: 'unity',
    header: () => (
      <div className="font-semibold text-lg w-[130px] h-[22px]">Medida</div>
    ),
    cell: ({ row }) => {
      const unity = String(row.getValue('unity'));

      return (
        <div className="font-normal text-lg leading-[1.2] w-[130px text-customMkt-green">
          {unity}
        </div>
      );
    },
  },
  {
    accessorKey: 'value',
    header: () => (
      <div className="font-semibold text-lg sm:w-[187px] h-[22px]">Preço</div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('value'));
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount);

      return (
        <div className={`font-medium text-lg leading-[1.2]`}>{formatted}</div>
      );
    },
  },
  {
    accessorKey: 'promotionValue',
    header: () => (
      <div className="font-semibold text-lg w-[135px] h-[22px]">
        Promocional
      </div>
    ),
    cell: ({ row }) => {
      const onPromotion = Boolean(row.original.onPromotion);
      const amount = parseFloat(row.getValue('value'));

      if (onPromotion) {
        const formatted = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(amount);

        return (
          <div className="font-medium text-lg leading-[1.2] text-customMkt-primary w-[135px]">
            {formatted}
          </div>
        );
      }
    },
  },
  {
    id: 'actions',
    header: () => (
      <div className="font-semibold text-lg w-[100px] h-[22px]">Ação</div>
    ),
    cell: () => <ActionButons />,
  },
];
