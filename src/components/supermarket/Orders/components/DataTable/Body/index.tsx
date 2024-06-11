import Visa from '@/assets/visa.svg';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { orders } from '@/data/orders';
import { formatCurrency } from '@/utils/formatCurrency';

interface DataTableBodyProps {
  status?: string;
}

const DataTableBody: React.FC<DataTableBodyProps> = ({ status }) => {
  const filteredOrders = status
    ? orders.filter((order) => order.status === status)
    : orders;

  return (
    <>
      {filteredOrders.map((order) => (
        <TableBody>
          <TableRow className="border-b border-customMkt-gray2 text-lg font-normal hover:bg-customMkt-gray1 transition-all">
            <TableCell>{order.order}</TableCell>
            <TableCell>{order.name}</TableCell>
            <TableCell>{order.adress}</TableCell>
            <TableCell>{formatCurrency(order.valor)}</TableCell>
            <TableCell>{order.quantidade}</TableCell>
            <TableCell className="flex gap-[6px]">
              <img src={Visa} alt="Visa Card" /> Debito - Visa
            </TableCell>
            <TableCell>{order.status}</TableCell>
          </TableRow>
        </TableBody>
      ))}
    </>
    // <TableBody>
    //   <TableRow className="border-b border-customMkt-gray2 text-lg font-normal hover:bg-customMkt-gray1 transition-all">
    //     <TableCell>#856-963</TableCell>
    //     <TableCell>João Pedro Ferreira</TableCell>
    //     <TableCell>Av. Fernandes Lima, 2257 - Pin...</TableCell>
    //     <TableCell>R$ 150,86</TableCell>
    //     <TableCell>26</TableCell>
    //     <TableCell className="flex gap-[6px]">
    //       <img src={Visa} alt="Visa Card" /> Debito - Visa
    //     </TableCell>
    //     <TableCell>Pendente</TableCell>
    //   </TableRow>
    // </TableBody>
  );
};

export default DataTableBody;
