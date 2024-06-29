import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/supermarket-toasters/use-toast';
import { useState } from 'react';
import { TbSquareNumber1, TbTrash } from 'react-icons/tb';
import CancelProductModal from './components/CancelProductModal';
import EditQuantifyModal from './components/QuantifyModal';

const ActionButons = () => {
  const [loading, setLoading] = useState(false);
  const [openCancelProduct, setOpenCancelProduct] = useState(false);
  const [openEditQuantify, setOpenEditQuantify] = useState(false);
  const { toast } = useToast();

  const onDelete = async () => {
    // TODO: add delete item drom product list

    try {
      toast({
        variant: 'sucess',
        description: 'Produto cancelado com sucesso!',
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

  const onEditQuantify = async () => {
    // TODO: add delete item drom product list
    try {
      setLoading(true);
      toast({
        variant: 'sucess',
        description: 'Quantidade editada com sucesso!',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'Algo deu errado.',
      });
      console.log(error);
    } finally {
      setLoading(false);
      setOpenEditQuantify(false);
    }
  };

  return (
    <>
      <CancelProductModal
        isOpen={openCancelProduct}
        onClose={() => setOpenCancelProduct(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <EditQuantifyModal
        isOpen={openEditQuantify}
        onClose={() => setOpenEditQuantify(false)}
        onConfirm={onEditQuantify}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex flex-col gap-[5px] items-center justify-center px-[9px] py-1 ml-[18px]">
            <div className="w-[6px] h-[6px] bg-customMkt-gray3 rounded-full" />
            <div className="w-[6px] h-[6px] bg-customMkt-gray3 rounded-full" />
            <div className="w-[6px] h-[6px] bg-customMkt-gray3 rounded-full" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-[10px] shadow-customPopup rounded-[5px] bg-white">
          <DropdownMenuItem
            className="flex gap-[10px] py-[10px] text-lg font-normal cursor-pointer"
            onClick={() => setOpenEditQuantify(true)}
          >
            <TbSquareNumber1 className="h-[22px] w-[22px]" />
            Alterar quantidade
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex gap-[10px] py-[10px] text-lg font-normal cursor-pointer"
            onClick={() => setOpenCancelProduct(true)}
          >
            <TbTrash className="h-[22px] w-[22px]" />
            Cancelar produto
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ActionButons;
