import { TableHead } from '@/components/ui/table';

const tableheaders = [
  {
    lable: 'Pedido',
  },
  {
    lable: 'Nome do cliente',
  },
  {
    lable: 'Endereço',
  },
  {
    lable: 'Valor',
  },
  {
    lable: 'Qtd.',
  },
  {
    lable: 'Forma de Pagamento',
  },
  {
    lable: 'Status',
  },
  {
    lable: 'Ação',
  },
];

const DataTableHeader = () => {
  return (
    <>
      {tableheaders.map((tableHead) => (
        <TableHead className="font-semibold text-lg text-customMkt-black leading-[1.2] px-[14px] pt-[14px] pb-3 text-left last:text-center border-b-customMkt-gray2 border-b">
          {tableHead.lable}
        </TableHead>
      ))}
    </>
  );
};

export default DataTableHeader;
