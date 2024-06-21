import { ScrollArea } from '@/components/ui/scroll-area';
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
      <SheetContent className="sm:max-w-[900px] p-0 gap-0 w-full h-full flex flex-col">
        <NewProductDrawerHeader onClose={closeDrawer} />
        <ScrollArea>
          <div className="flex flex-col gap-6 px-[30px] pt-[30px] pb-5">
            <ProductForm measures={measures} onClose={closeDrawer} />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NewProductDrawer;
