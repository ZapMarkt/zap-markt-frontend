import { Sheet, SheetContent } from '@/components/ui/sheet';
import DrawerAdressDetails from './components/DrawerAdressDetails';
import DrawerClientDetails from './components/DrawerClientsDetails';
import DrawerHeader from './components/DrawerHeader';
import DrawerOrderDetails from './components/DrawerOrderDetails';
import DrawerPaymentDetails from './components/DrawerPaymentDetails';
import DrawerPaymentMethod from './components/DrawerPaymentMethod';

interface OrderDrawerProps {
  openDrawer: boolean;
  closeDrawer: () => void;
}

const OrderDrawer: React.FC<OrderDrawerProps> = ({
  openDrawer,
  closeDrawer,
}) => {
  return (
    <Sheet open={openDrawer}>
      <SheetContent className="sm:max-w-[900px] w-full p-0">
        <DrawerHeader onClose={closeDrawer} />
        <div className="flex flex-col gap-6 px-[30px] pt-[30px] pb-5">
          <DrawerOrderDetails />
          <DrawerClientDetails />
          <DrawerAdressDetails />
          <DrawerPaymentDetails />
          <DrawerPaymentMethod />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OrderDrawer;
