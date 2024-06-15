import { Drawer } from '@mui/material';
import React, { ReactNode } from 'react';
import { Order } from '../../../../../types/Order';
import DrawerActionButtons from './components/DrawerActionButtons';

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
      {children}
      <DrawerActionButtons />
    </Drawer>
  );
};

export default OrderDrawer;
