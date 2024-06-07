import { Drawer } from '@mui/material';
import React, { ReactNode } from 'react';
import { Order } from '../../../../../types/Order';
import DrawerActionButtons from './components/DrawerActionButtons';
import DrawerHeader from './components/DrawerHeader';

interface OrderDrawerProps {
  openDrawer: boolean;
  closeDrawer: () => void;
  children: ReactNode;
  selectedOrder: Order | null;
}

const OrderDrawer: React.FC<OrderDrawerProps> = ({
  openDrawer,
  closeDrawer,
  children,
  selectedOrder,
}) => {
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      PaperProps={{
        sx: {
          width: '900px',
          background: '#FFFFFF',
          paddingBottom: '0px',
        },
      }}
    >
      <DrawerHeader onClick={closeDrawer} selectedOrder={selectedOrder} />
      {children}
      <DrawerActionButtons />
    </Drawer>
  );
};

export default OrderDrawer;
