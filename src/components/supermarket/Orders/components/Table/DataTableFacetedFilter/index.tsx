import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Column } from '@tanstack/react-table';
import { useState } from 'react';

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  options: {
    label: string;
    value: string;
  }[];
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  options,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const { setFilterValue } = column || {};
  const [allTable, setAllTable] = useState(true);

  const handleSelect = (value?: string) => {
    if (setFilterValue && typeof setFilterValue === 'function') {
      setFilterValue(value === 'Todos' ? undefined : value);
      setAllTable(value === 'Todos' ? true : false);
    }
  };

  return (
    <div className="flex flex-wrap items-center w-full mb-6 border-b max-h-[59px] xl:gap-[18px]">
      {options.map((option) => {
        const isSelected = column?.getFilterValue?.() === option.value;

        return (
          <Button
            key={option.value}
            className={cn(
              'flex items-center  pb-5 pt-[10px] border-b-2 border-transparent box-border max-h-[59px] font-medium text-customMkt-gray6 text-base md:text-lg lg:text-xl 2xl:text-2xl px-[14px] 2xl:px-[18px]',
              allTable
                ? 'first:border-customMkt-black first:text-customMkt-black'
                : 'first:border-transparent',
              isSelected && 'border-customMkt-black text-black',
            )}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
