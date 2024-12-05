import Layout from '@/common/components/supermarket/Layout';
import OrderHistoryTable from '@/components/supermarket/OrderHistory/OrderHistory';

const OrderHistoryPage = () => {
  return (
    <Layout title="Histórico de pedidos">
      <OrderHistoryTable />
    </Layout>
  );
};

export default OrderHistoryPage;
