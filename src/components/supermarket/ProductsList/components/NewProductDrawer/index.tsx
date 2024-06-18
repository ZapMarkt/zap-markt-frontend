import { Sheet, SheetContent } from '@/components/ui/sheet';
import { measures } from '@/data/measure-data';
import ProductForm from './components/DrawerForm';
import NewProductDrawerHeader from './components/DrawerHeader';

interface NewProductDrawerProps {
  openDrawer: boolean;
  closeDrawer: () => void;
}

const NewProductDrawer: React.FC<NewProductDrawerProps> = ({
  openDrawer,
  closeDrawer,
}) => {
  return (
    <Sheet open={openDrawer}>
      <SheetContent className="sm:max-w-[900px] p-0 gap-0 w-full flex flex-col">
        <NewProductDrawerHeader onClose={closeDrawer} />
        <div className="p-[30px] pb-[35px] w-full h-full">
          <ProductForm measures={measures} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NewProductDrawer;
