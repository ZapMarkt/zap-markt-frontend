import SearchInput from '@/components/ui/SearchInput';
import { Button } from '@/components/ui/button';
import { DatePickerWithRange } from '@/components/ui/data-picker-ranger';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/supermarket-table/table';
import React from 'react';
import { FaFilter } from 'react-icons/fa';

const dataHistory = [
  {
    orderNumber: '#856-963',
    clienteName: 'João Pedro Ferreira',
    adress: 'Av. Fernandes Lima, 2257 - Pinheiros',
    amount: 'R$ 150,86',
    itemsQuantify: 26,
    paymentMethod: 'Debito - Visa',
    timeOrder: '29/05/2024 - 14:56',
  },
];

const OrderHistoryTable: React.FC = () => {
  const rowsHistory: JSX.Element[] = [];
  for (let index = 0; index < 20; index++) {
    dataHistory.forEach((history) => {
      rowsHistory.push(
        <TableRow key={`${index}-${history.clienteName}`}>
          <TableCell className="text-lg text-customMkt-black font-normal leading-customNormal">
            {history.orderNumber}
          </TableCell>
          <TableCell className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[250px] text-lg text-customMkt-black font-normal leading-customNormal">
            {history.clienteName}
          </TableCell>
          <TableCell className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[330px] text-lg text-customMkt-black font-normal leading-customNormal">
            {history.adress}
          </TableCell>
          <TableCell className="text-lg text-customMkt-black font-normal leading-customNormal">
            {history.amount}
          </TableCell>
          <TableCell className="text-lg text-customMkt-black font-normal leading-customNormal">
            {history.itemsQuantify}
          </TableCell>
          <TableCell className="text-lg text-customMkt-black font-normal leading-customNormal">
            {history.paymentMethod}
          </TableCell>
          <TableCell className="text-lg text-customMkt-black font-normal leading-customNormal">
            {history.timeOrder}
          </TableCell>
        </TableRow>,
      );
    });
  }

  return (
    <>
      <div className="flex justify-between mb-[30px]">
        <SearchInput placeholder="Pesquisar por pedidos" />
        <div className="flex gap-4">
          <DatePickerWithRange />
          <Button
            size="customMd"
            variant="customOutiline"
            className="gap-[10px] transition max-w-[109px] w-full"
          >
            <FaFilter className="fill-customMkt-gray6 group-hover:fill-customMkt-primary/80 w-6 h-6" />
            Filtrar
          </Button>
        </div>
      </div>
      <div className="rounded-[10px]">
        <ScrollArea className="rounded-[10px] flex-grow h-[70vh]">
          <Table className="relative bg-customMkt-gray2 rounded-[10px] w-full">
            <TableHeader>
              <TableRow className="text-lg text-customMkt-black">
                <TableHead className="w-[120px] text-customMkt-black rounded-[10px] px-[14px] pt-[14px] pb-3 sticky top-0 bg-customMkt-gray2">
                  Pedido
                </TableHead>
                <TableHead className="w-[250px] text-customMkt-black px-[14px] pt-[14px] pb-3 sticky top-0 bg-customMkt-gray2">
                  Nome do cliente
                </TableHead>
                <TableHead className="w-[330px] text-customMkt-black px-[14px] pt-[14px] pb-3 sticky top-0 bg-customMkt-gray2">
                  Endereço
                </TableHead>
                <TableHead className="w-[150px] text-customMkt-black px-[14px] pt-[14px] pb-3 sticky top-0 bg-customMkt-gray2">
                  Valor
                </TableHead>
                <TableHead className="w-[76px] text-customMkt-black px-[14px] pt-[14px] pb-3 sticky top-0 bg-customMkt-gray2">
                  Qtd.
                </TableHead>
                <TableHead className="w-[220px] text-customMkt-black px-[14px] pt-[14px] pb-3 sticky top-0 bg-customMkt-gray2">
                  Forma de Pagamento
                </TableHead>
                <TableHead className="w-[180px] text-customMkt-black rounded-[10px] px-[14px] pt-[14px] pb-3 sticky top-0 bg-customMkt-gray2">
                  Data e hora
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>{rowsHistory}</TableBody>
          </Table>
        </ScrollArea>
      </div>
    </>
  );
};

export default OrderHistoryTable;
