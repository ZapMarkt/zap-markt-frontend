import { Table } from '@tanstack/react-table';

import DataTableButtons from './components/DataButtons';
import DataTableSearch from './components/DataTableSearch';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}
export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <>
      <div className="flex mb-[30px]">
        <DataTableSearch
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(value) => table.getColumn('name')?.setFilterValue(value)}
        />
        <DataTableButtons />
      </div>
    </>
  );
}
