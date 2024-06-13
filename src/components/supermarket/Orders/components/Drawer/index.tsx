import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

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
      <SheetContent className="sm:max-w-[900px] w-full">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default OrderDrawer;
