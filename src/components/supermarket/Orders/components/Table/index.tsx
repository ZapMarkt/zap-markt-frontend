import { orders } from '@/data/orders';
import DataTable from '../Table/DataTable';
import { columns } from '../Table/DataTableColumns';

interface TableOrdersProps {
  status?: string;
  filterValue: string;
}

const TableOrders: React.FC<TableOrdersProps> = ({ status, filterValue }) => {
  return (
    <div className="flex flex-col">
      <DataTable
        columns={columns}
        data={orders}
        searchKey="name"
        filterValue={filterValue}
        statusKey="status"
        statusFilter={status}
      />
    </div>
  );
};

export default TableOrders;
