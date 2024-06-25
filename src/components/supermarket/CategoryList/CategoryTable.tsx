import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/supermarket-table/table';
import { useState } from 'react';
import TableSearch from './TableSearch';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function CategoryTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [openDrawer, setOpenDrawer] = useState(false);

  function toggleDrawer() {
    setOpenDrawer(true);
  }
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
    },
  });

  return (
    <div className="relative">
      <TableSearch />
      <div
        className="flex flex-col justify-between pt-[82px]"
        style={{ height: '65vh' }}
      >
        <ScrollArea>
          <Table className="relative h-full w-full">
            <TableHeader className="rounded-t-[.625rem] bg-white z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="hover:bg-inherit bg-white hover:opacity-100 transition hover:rounded-t-[.625rem] border-b-customMkt-gray"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="bg-white px-[14px] pb-3 pt-[14px] sticky top-0"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              <tr className="border-b data-[state=selected]:bg-muted hover:bg-customMkt-gray4 transition cursor-pointer h-[61px]">
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 px-[14px] py-[12px] ">
                  <div className="font-normal text-lg leading-[1.2] tracking-normal w-[1031px]">
                    Promoção
                  </div>
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 px-[14px] py-[12px]">
                  <div className="font-normal text-lg w-[130px] leading-[1.2]">
                    1
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 px-[14px] py-[12px]">
                  <div className="font-normal text-lg leading-[1.2] w-[225px] text-customMkt-green">
                    5
                  </div>
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 px-[14px] py-[12px]">
                  <div className="font-normal text-lg leading-[1.2] w-[100px] text-customMkt-green"></div>
                </td>
              </tr>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="hover:bg-customMkt-gray4 transition cursor-pointer"
                    onClick={(e) => {
                      const target = e.target as HTMLElement;
                      if (!target.classList.contains('no-click')) {
                        toggleDrawer();
                      }
                    }}
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <TableCell
                        key={cell.id}
                        onClick={(e) => {
                          const target = e.target as HTMLElement;
                          if (!target.classList.contains('no-click')) {
                            toggleDrawer();
                          }
                        }}
                        className={`px-[14px] py-[12px] ${
                          index === row.getVisibleCells().length - 1
                            ? 'no-click'
                            : ''
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Sem resultados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
}
