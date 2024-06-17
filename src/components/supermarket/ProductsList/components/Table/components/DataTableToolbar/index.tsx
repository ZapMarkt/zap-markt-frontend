import { Table } from '@tanstack/react-table';

import { SelectFilter } from '@/components/ui/seelct-filter';
import { products } from '@/data/productList';
import { labels } from '@/types/data';
import DataTableButtons from './components/DataButtons';
import DataTableSearch from './components/DataTableSearch';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}
export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between mb-[30px]">
      <div className="flex flex-1 items-center space-x-2 justify-between">
        <DataTableSearch
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(value) => table.getColumn('name')?.setFilterValue(value)}
        />
        {table.getColumn('category') && (
          <SelectFilter
            column={table.getColumn('category')}
            options={labels}
            data={products}
            filterBy="category"
          />
        )}
        {table.getColumn('category') && (
          <SelectFilter
            column={table.getColumn('category')}
            options={labels}
            data={products}
            filterBy="unity"
          />
        )}
        <DataTableButtons />
      </div>
    </div>
  );
}
