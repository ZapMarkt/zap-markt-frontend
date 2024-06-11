import Visa from '@/assets/visa.svg';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import DataTableHeader from './Header';

export const DataTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <DataTableHeader />
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border-b border-customMkt-gray2 text-lg font-normal hover:bg-customMkt-gray1 transition-all">
          <TableCell>#856-963</TableCell>
          <TableCell>João Pedro Ferreira</TableCell>
          <TableCell>Av. Fernandes Lima, 2257 - Pin...</TableCell>
          <TableCell>R$ 150,86</TableCell>
          <TableCell>26</TableCell>
          <TableCell className="flex gap-[6px]">
            <img src={Visa} alt="" /> Debito - Visa
          </TableCell>
          <TableCell>Pendente</TableCell>
        </TableRow>
        <TableRow className="border-b border-customMkt-gray2 text-lg font-normal hover:bg-customMkt-gray1 transition-all">
          <TableCell>#856-963</TableCell>
          <TableCell>João Pedro Ferreira</TableCell>
          <TableCell>Av. Fernandes Lima, 2257 - Pin...</TableCell>
          <TableCell>R$ 150,86</TableCell>
          <TableCell>26</TableCell>
          <TableCell className="flex gap-[6px]">
            <img src={Visa} alt="" /> Debito - Visa
          </TableCell>
          <TableCell>Pendente</TableCell>
        </TableRow>{' '}
        <TableRow className="border-b border-customMkt-gray2 text-lg font-normal hover:bg-customMkt-gray1 transition-all">
          <TableCell>#856-963</TableCell>
          <TableCell>João Pedro Ferreira</TableCell>
          <TableCell>Av. Fernandes Lima, 2257 - Pin...</TableCell>
          <TableCell>R$ 150,86</TableCell>
          <TableCell>26</TableCell>
          <TableCell className="flex gap-[6px]">
            <img src={Visa} alt="" /> Debito - Visa
          </TableCell>
          <TableCell>Pendente</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DataTable;
