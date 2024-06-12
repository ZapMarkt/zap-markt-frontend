import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Column } from '@tanstack/react-table';

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

  const handleSelect = (value?: string) => {
    if (setFilterValue && typeof setFilterValue === 'function') {
      setFilterValue(value === 'Todos' ? undefined : value);
    }
  };

  return (
    <div className="flex flex-wrap items-center w-full mb-6 gap-[18px] border-b max-h-[59px]">
      {options.map((option) => {
        const isSelected = column?.getFilterValue?.() === option.value;

        return (
          <Button
            key={option.value}
            className={cn(
              'flex items-center px-[18px] pb-5 pt-[10px] border-b-2 border-transparent box-border max-h-[59px]',
              option.value === 'Todos'
                ? 'first:border-customMkt-black'
                : 'first:border-transparent',
              isSelected && 'border-customMkt-black',
            )}
            onClick={() => handleSelect(option.value)}
          >
            <span
              className={cn(
                'text-customMkt-gray6 text-2xl font-medium',
                option.value === 'Todos' && 'first:text-customMkt-black',
                isSelected && 'text-customMkt-black',
              )}
            >
              {option.label}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
