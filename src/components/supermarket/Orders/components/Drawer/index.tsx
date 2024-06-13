import { Sheet, SheetContent } from '@/components/ui/sheet';
import DrawerHeader from './DrawerHeader';

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
      </SheetContent>
    </Sheet>
  );
};

export default OrderDrawer;
