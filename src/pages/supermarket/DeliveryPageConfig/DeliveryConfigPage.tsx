import Layout from '@/common/components/supermarket/Layout';
import DeliveryMap from '@/components/supermarket/DeliveryConfig/DeliveryMap';

const DeliveryConfigPage = () => {
  return (
    <Layout title="Entrega" className="p-0">
      <div className="w-full h-[calc(100vh-104px)]">
        <DeliveryMap />
      </div>
    </Layout>
  );
};

export default DeliveryConfigPage;
