import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import CategoryModal from './EditCategoryModal';

const ActionsTable = () => {
  const [open, setOpen] = useState(false);
  const [viewProduct, setViewProduct] = useState(true);

  const onViewProduct = () => {
    //TODO: Add request to hide or view product on app
    setViewProduct((previousValue) => !previousValue);
  };

  return (
    <>
      <CategoryModal isOpen={open} onClose={() => setOpen(false)} />
      <div className="flex gap-6 w-[100px]">
        <Button className="bg-transparent last:hidden" onClick={onViewProduct}>
          {viewProduct ? (
            <IoMdEye className="w-[36px] h-[36px] fill-customMkt-gray6" />
          ) : (
            <IoMdEyeOff className="w-[36px] h-[36px] fill-customMkt-gray6" />
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex flex-col gap-[5px] items-center justify-center px-[9px] py-1">
              <div className="w-[6px] h-[6px] bg-customMkt-gray3 rounded-full" />
              <div className="w-[6px] h-[6px] bg-customMkt-gray3 rounded-full" />
              <div className="w-[6px] h-[6px] bg-customMkt-gray3 rounded-full" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-[10px] shadow-customPopup rounded-[5px] bg-white">
            <DropdownMenuItem
              className="flex gap-[10px] py-[10px] text-lg font-normal cursor-pointer text-customMkt-gray6 transition"
              onClick={() => setOpen(true)}
            >
              <BsPencilSquare className="h-[22px] w-[22px]" />
              Editar categoria
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ActionsTable;
