import Layout from '@/common/components/supermarket/Layout';
import { DataOrderTable } from '@/components/supermarket/Orders/components/Table';
import { columns } from '@/components/supermarket/Orders/components/Table/DataTableColumns';
import { orders } from '@/data/orders';

const OrdersPage = () => {
  return (
    <Layout title="Painel de pedidos">
      <DataOrderTable columns={columns} data={orders} />
    </Layout>
  );
};

export default OrdersPage;
