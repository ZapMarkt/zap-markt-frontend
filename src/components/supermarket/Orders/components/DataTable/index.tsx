import { Table, TableHeader, TableRow } from '@/components/ui/table';
import DataTableBody from './Body';
import DataTableHeader from './Header';
interface DataTableProps {
  status?: string;
}

export const DataTableeeeee: React.FC<DataTableProps> = ({ status }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <DataTableHeader />
        </TableRow>
      </TableHeader>
      <DataTableBody status={status} />
    </Table>
  );
};

export default DataTableeeeee;
