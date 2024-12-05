import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Table } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

const DataTablePagination = <TData,>({
  table,
}: DataTablePaginationProps<TData>) => {
  const [totalItemsDisplayed, setTotalItemsDisplayed] = useState(
    table.getRowModel().rows.length,
  );

  useEffect(() => {
    const { pageIndex, pageSize } = table.getState().pagination;
    const totalDisplayed = (pageIndex + 1) * pageSize;
    setTotalItemsDisplayed(totalDisplayed);
  }, [
    table.getState().pagination.pageIndex,
    table.getState().pagination.pageSize,
  ]);

  return (
    <div className="flex items-center justify-between px-2 border-t">
      <div className="flex-1 text-sm text-muted-foreground">
        Mostrando{' '}
        {Math.min(totalItemsDisplayed, table.getFilteredRowModel().rows.length)}{' '}
        {''}
        de {table.getFilteredRowModel().rows.length} resultados.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8 p-5">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Linhas por página</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          {table.getPageCount() === 0
            ? `Página ${
                table.getState().pagination.pageIndex
              } de ${table.getPageCount()}`
            : `Página ${
                table.getState().pagination.pageIndex + 1
              } de ${table.getPageCount()}`}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              `hidden h-8 w-8 p-0 opacity-50 lg:flex items-center justify-center rounded-lg border-customMkt-gray4 border`,
              table.getCanPreviousPage() &&
                'hover:bg-customMkt-gray5 opacity-100',
            )}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <MdKeyboardDoubleArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              `h-8 w-8 p-0 opacity-50 flex items-center justify-center rounded-lg border-customMkt-gray4 border`,
              table.getCanPreviousPage() &&
                'hover:bg-customMkt-gray5 opacity-100',
            )}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <MdKeyboardArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              `h-8 w-8 p-0 opacity-50 flex items-center justify-center rounded-lg border-customMkt-gray4 border`,
              table.getCanNextPage() && 'hover:bg-customMkt-gray5 opacity-100',
            )}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <MdKeyboardArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            className={cn(
              `hidden h-8 w-8 p-0 opacity-50 lg:flex items-center justify-center rounded-lg border-customMkt-gray4 border`,
              table.getCanNextPage() && 'hover:bg-customMkt-gray5 opacity-100',
            )}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <MdKeyboardDoubleArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTablePagination;
