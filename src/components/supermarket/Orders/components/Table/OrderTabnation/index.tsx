import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { labels } from '@/types/data';

const OrderTabnation = () => {
  return (
    <TabsList className="bg-transparent gap-[18px] border-b-2 h-[57px] w-full justify-start mb-6">
      {labels.map((trigger) => (
        <TabsTrigger
          value={trigger.value}
          key={trigger.value}
          className="text-customMkt-gray6 text-2xl px-[18px] pt-[10px] pb-5 max-h-[59px] rounded-none border-b-2 font-medium data-[state=active]:border-b-2 data-[state=active]:border-customMkt-black"
        >
          {trigger.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default OrderTabnation;
