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

  const handleSelect = (value: string) => {
    if (setFilterValue && typeof setFilterValue === 'function') {
      setFilterValue(value === 'Todos' ? undefined : value);
    }
  };

  return (
    <div className="flex flex-wrap items-center space-x-2">
      {options.map((option) => {
        const isSelected = column?.getFilterValue?.() === option.value;
        return (
          <Button
            key={option.value}
            variant={isSelected ? 'default' : 'outline'}
            size="sm"
            className={cn(
              'flex items-center space-x-2',
              isSelected && 'border-primary',
            )}
            onClick={() => handleSelect(option.value)}
          >
            <span>{option.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
