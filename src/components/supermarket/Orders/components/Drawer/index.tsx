import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useState } from 'react';
import CancelOrderModal from './components/CancelOrderModal';
import DrawerAdressDetails from './components/DrawerAdressDetails';
import DrawerClientDetails from './components/DrawerClientsDetails';
import DrawerHeader from './components/DrawerHeader';
import DrawerOrderDetails from './components/DrawerOrderDetails';
import DrawerPaymentDetails from './components/DrawerPaymentDetails';
import DrawerPaymentMethod from './components/DrawerPaymentMethod';
import DrawerProdutctList from './components/DrawerProdutctList';

interface OrderDrawerProps {
  openDrawer: boolean;
  closeDrawer: () => void;
}

const OrderDrawer: React.FC<OrderDrawerProps> = ({
  openDrawer,
  closeDrawer,
}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      alert('Pedido cancelado');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <CancelOrderModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <Sheet open={openDrawer}>
        <SheetContent className="sm:max-w-[900px] w-full p-0 gap-0 h-screen flex flex-col justify-between">
          <DrawerHeader onClose={closeDrawer} />
          <ScrollArea>
            <div className="flex flex-col gap-6 px-[30px] pt-[30px] pb-5">
              <DrawerOrderDetails />
              <DrawerClientDetails />
              <DrawerAdressDetails />
              <DrawerProdutctList />
              <DrawerPaymentDetails />
              <DrawerPaymentMethod />
            </div>
          </ScrollArea>
          <div className="flex gap-6 justify-end px-[30px] pb-[35px] pt-5">
            <Button
              size="customLg"
              variant="customError"
              onClick={() => setOpen(true)}
            >
              Cancelar pedido
            </Button>
            <Button size="customLg" variant="customPrimary">
              Aceitar
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default OrderDrawer;
