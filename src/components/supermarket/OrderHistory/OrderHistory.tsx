import SearchInput from '@/components/ui/SearchInput';
import { DatePickerWithRange } from '@/components/ui/data-picker-ranger';

const OrderHistoryTable = () => {
  return (
    <div className="flex justify-between">
      <SearchInput placeholder="Pesquisar por pedidos" />
      <div>
        <DatePickerWithRange />
      </div>
    </div>
  );
};

export default OrderHistoryTable;
