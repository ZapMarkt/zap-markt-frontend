import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TbSquareNumber1, TbTrash } from 'react-icons/tb';

const ActionButons = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex flex-col gap-[5px] items-center justify-center px-[9px] py-1 ml-[18px]">
            <div className="w-[6px] h-[6px] bg-customMkt-gray3 rounded-full" />
            <div className="w-[6px] h-[6px] bg-customMkt-gray3 rounded-full" />
            <div className="w-[6px] h-[6px] bg-customMkt-gray3 rounded-full" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-[10px] shadow-customPopup rounded-[5px] bg-white">
          <DropdownMenuItem className="flex gap-[10px] py-[10px] text-lg font-normal cursor-pointer">
            <TbSquareNumber1 className="h-[22px] w-[22px]" />
            Alterar quantidade
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-[10px] py-[10px] text-lg font-normal cursor-pointer">
            <TbTrash className="h-[22px] w-[22px]" />
            Cancelar produto
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ActionButons;
