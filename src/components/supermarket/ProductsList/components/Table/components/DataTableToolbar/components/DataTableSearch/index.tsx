import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { IoSearch } from 'react-icons/io5';

interface DataTableSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const DataTableSearch: React.FC<DataTableSearchProps> = ({
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="max-w-[414px] w-full group">
      <div className="flex items-center gap-4 max-h-[58px] bg-customMkt-gray5 px-3 py-[17px] rounded border border-customMkt-gray7 focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-customMkt-primary transition-all">
        <Input
          placeholder="Buscar por produtos"
          className="p-0 text-lg font-normal leading-5 bg-customMkt-gray5 placeholder:text-customMkt-gray6 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-inherit border-0"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          {...props}
        />
        <IoSearch
          className={cn(
            `h-6 w-6 transition group-focus-within:fill-customMkt-primary`,
          )}
        />
      </div>
    </div>
  );
};

export default DataTableSearch;
