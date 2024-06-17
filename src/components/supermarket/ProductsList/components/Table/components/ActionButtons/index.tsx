import { Button } from '@/components/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/supermarket-toasters/use-toast';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { TbTrash } from 'react-icons/tb';
import CancelProductModal from './components/CancelProductModal';

const ActionButons = () => {
  const [loading, setLoading] = useState(false);
  const [openCancelProduct, setOpenCancelProduct] = useState(false);
  const [viewProduct, setViewProduct] = useState(true);
  const { toast } = useToast();

  const onDelete = async () => {
    // TODO: add delete item from supermarket db

    try {
      toast({
        variant: 'sucess',
        description: 'Produto apagado com sucesso!',
      });
      setLoading(true);
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'Algo deu errado.',
      });
      console.log(error);
    } finally {
      setLoading(false);
      setOpenCancelProduct(false);
    }
  };

  const onViewProduct = () => {
    //TODO: Add request to hide or view product on app
    setViewProduct((previousValue) => !previousValue);
  };

  return (
    <>
      <CancelProductModal
        isOpen={openCancelProduct}
        onClose={() => setOpenCancelProduct(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex gap-6">
        <Button className="bg-transparent" onClick={onViewProduct}>
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
              className="flex gap-[10px] py-[10px] text-lg font-normal cursor-pointer"
              onClick={() => setOpenCancelProduct(true)}
            >
              <TbTrash className="h-[22px] w-[22px]" />
              Apagar produto
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ActionButons;
