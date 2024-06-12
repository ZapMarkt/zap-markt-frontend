import { Table } from '@tanstack/react-table';

import { labels } from '@/types/data';
import { DataTableFacetedFilter } from '../DataTableFacetedFilter';
import DataTableSearch from '../DataTableSearch';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}
export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2 flex-col">
        <DataTableSearch
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(value) => table.getColumn('name')?.setFilterValue(value)}
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            options={labels}
          />
        )}
      </div>
    </div>
  );
}
