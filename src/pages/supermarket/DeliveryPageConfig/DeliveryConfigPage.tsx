import Layout from '@/common/components/supermarket/Layout';
import DeliveryConfig from '@/components/supermarket/DeliveryConfig/DeliveryConfig';

const DeliveryConfigPage = () => {
  return (
    <Layout title="Entrega" className="p-0">
      <div className="bg-[url('./src/assets/textute-map.png')] h-[calc(100vh-104px)] w-full">
        <DeliveryConfig />
      </div>
    </Layout>
  );
};

export default DeliveryConfigPage;
