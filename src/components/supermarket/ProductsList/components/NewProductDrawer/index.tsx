import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { categories } from '@/data/category-data';
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
    <>
      <Sheet open={openDrawer}>
        <SheetContent className="sm:max-w-[900px] h-screen p-0 gap-0 w-full flex flex-col">
          <NewProductDrawerHeader onClose={closeDrawer} />
          <ScrollArea>
            <div className="flex flex-col gap-6 px-[30px] pt-[30px]">
              <ProductForm
                measures={measures}
                onClose={closeDrawer}
                categories={categories}
              />
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NewProductDrawer;
