import '@fontsource/inter/500.css';
import { Box } from '@mui/material';
import Header from '../../../components/header/Header';
import OrderPanel from '../../../components/orders/OrderPanel';
import OrderTable from '../../../components/orders/order-table/OrderTable';
import ProductsTabs from '../../../components/orders/orders-tabs/OrdersTabs';
import LayoutSupermarket from '../../../shared/LayoutSupermarket';

const OutForDeliveryOrders = () => {
  return (
    <LayoutSupermarket>
      <Header title="Painel de pedidos" />
      <Box
        sx={{
          padding: '136px 30px 33px 124px',
          maxHeight: '90vh',
          height: '85vh',
        }}
      >
        <OrderPanel />
        <ProductsTabs />
        <OrderTable status="Rota de entrega" />
      </Box>
    </LayoutSupermarket>
  );
};

export default OutForDeliveryOrders;
