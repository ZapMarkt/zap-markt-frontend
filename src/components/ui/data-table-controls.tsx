import { Table } from "@tanstack/react-table";
import { Button } from "./button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

type DataTableControlsProps<TData> = {
  table: Table<TData>;
};

export function DataTableControls<TData>({ table }: DataTableControlsProps<TData>) {
  const pageSizeOptions = [10, 20, 30, 40, 50];

  return (
    <div className="flex justify-end items-center gap-6 p-4 rounded-b-md bg-white border border-l-stone-200 border-b-stone-200 border-r-stone-200 border-t-0">
      <span className="font-bold text-stone-900 text-sm">Linhas por página:</span>
      <Select
        onValueChange={(value) => {
          table.setPageSize(+value);
          table.resetPageIndex();
        }}
      >
        <SelectTrigger className="w-16">
          <SelectValue placeholder={table.getState().pagination?.pageSize} />
        </SelectTrigger>
        <SelectContent>
          {pageSizeOptions.map((pageSizeOption) => (
            <SelectItem
              key={pageSizeOption}
              value={pageSizeOption.toString()}
            >
              {pageSizeOption}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="secondary"
        onClick={table.previousPage}
        disabled={!table.getCanPreviousPage()}
      >
        Anterior
      </Button>
      <span className="font-bold text-stone-900 text-sm">
        Página {table.getState().pagination?.pageIndex + 1} de {table.getPageCount()}
      </span>
      <Button
        variant="secondary"
        onClick={table.nextPage}
        disabled={table.getCanNextPage()}
      >
        Próxima
      </Button>
    </div>
  );
}
