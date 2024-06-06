import { Box, Typography } from '@mui/material';
import { Order } from '../../../../../../types/Order';
import DrawerAdressDetails from './DrawerAdressDetails';
import DrawerClientDetails from './DrawerClientDetails';
import DrawerOrderDetails from './DrawerOrderDetails';
import DrawerPayment from './DrawerPayment';
import DrawerPaymentMethod from './DrawerPaymentMethod';
import DrawerProductList from './DrawerProductList';

interface DrawerContentProps {
  selectedOrder: Order | null;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ selectedOrder }) => {
  return (
    <Box
      padding={'30px'}
      display={'flex'}
      flexDirection={'column'}
      gap={'24px'}
      sx={{ overflowY: 'scroll' }}
    >
      {selectedOrder ? (
        <>
          <DrawerOrderDetails selectedOrder={selectedOrder} />
          <DrawerClientDetails />
          <DrawerAdressDetails />
          <DrawerProductList selectedOrder={selectedOrder} />
          <DrawerPayment />
          <DrawerPaymentMethod />
        </>
      ) : (
        <Typography variant="h6">Nenhum pedido selecionado</Typography>
      )}
    </Box>
  );
};

export default DrawerContent;
