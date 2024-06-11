import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const dataTrigger = [
  {
    label: 'Todos',
    value: 'all',
  },
  {
    label: 'Pendentes',
    value: 'pending',
  },
  {
    label: 'Aceitos',
    value: 'accepted',
  },
  {
    label: 'Em separação',
    value: 'inSeparation',
  },
  {
    label: 'Rota de entrega',
    value: 'deliveryRoute',
  },
  {
    label: 'Concluído',
    value: 'concluded',
  },
  {
    label: 'Cancelado',
    value: 'canceled',
  },
];

const OrderTabnation = () => {
  return (
    <Tabs defaultValue="all">
      <TabsList className="bg-transparent gap-[18px] border-b-2 h-[59px] w-full justify-start mb-6">
        {dataTrigger.map((trigger) => (
          <TabsTrigger
            value={trigger.value}
            key={trigger.value}
            className="text-customMkt-gray6 text-2xl px-[18px] pt-[10px] pb-5 max-h-[59px] rounded-none border-b-2 font-normal data-[state=active]:border-b-2 data-[state=active]:border-customMkt-black"
          >
            {trigger.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="all">Todos</TabsContent>
      <TabsContent value="pending">Pendentes</TabsContent>
      <TabsContent value="accepted">Aceitos</TabsContent>
      <TabsContent value="inSeparation">Em separação</TabsContent>
      <TabsContent value="deliveryRoute">Rota de entrega</TabsContent>
      <TabsContent value="concluded">Concluído</TabsContent>
      <TabsContent value="canceled">Cancelado</TabsContent>
    </Tabs>
  );
};

export default OrderTabnation;
