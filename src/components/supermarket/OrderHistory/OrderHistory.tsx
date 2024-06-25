import SearchInput from '@/components/ui/SearchInput';
import { Button } from '@/components/ui/button';
import { DatePickerWithRange } from '@/components/ui/data-picker-ranger';
import { FaFilter } from 'react-icons/fa';

const OrderHistoryTable = () => {
  return (
    <div className="flex justify-between mb-[30px]">
      <SearchInput placeholder="Pesquisar por pedidos" />
      <div className="flex gap-4">
        <DatePickerWithRange />
        <Button
          size="customMd"
          variant="customOutiline"
          className="gap-[10px] transition max-w-[109px] w-full"
        >
          <FaFilter className="fill-customMkt-gray6 group-hover:fill-customMkt-primary/80 w-6 h-6" />
          Filtrar
        </Button>
      </div>
    </div>
  );
};

export default OrderHistoryTable;
