import Layout from '@/common/components/supermarket/Layout';
import { DataOrderTable } from '@/components/supermarket/Orders/components/Table';
import { columns } from '@/components/supermarket/Orders/components/Table/DataTableColumns';
import { orders } from '@/data/orders';
import { ordersColumns } from '@/types/Order';

const statusPriority: string[] = [
  'Pendente',
  'Aceito',
  'Em separação',
  'Rota de entrega',
  'Concluído',
  'Cancelado',
];

const sortOrders = (orders: ordersColumns[]): ordersColumns[] => {
  return orders.sort((a, b) => {
    return statusPriority.indexOf(a.status) - statusPriority.indexOf(b.status);
  });
};

const OrdersPage = () => {
  const sortedOrders = sortOrders(orders);

  return (
    <Layout title="Painel de pedidos">
      <DataOrderTable columns={columns} data={sortedOrders} />
    </Layout>
  );
};

export default OrdersPage;
