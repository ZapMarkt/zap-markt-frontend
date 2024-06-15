import { Button } from '@/components/ui/button';
import { BsPrinterFill } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa6';

interface DrawerHeaderProps {
  onClose: () => void;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ onClose }) => {
  const handlePrint = () => {
    // TODO: Add print product list
    alert('Imprimindo lista de pedidos...');
  };

  return (
    <>
      <div className="flex items-start justify-betweengap-[10px] px-[30px] pt-10 pb-[14px] border-b border-b-customMkt-whiteF0">
        <Button
          onClick={onClose}
          className="flex justify-center items-center my-auto"
        >
          <FaArrowLeft className="fill-customMkt-primary w-5 h-5" />
        </Button>
        <h1 className="text-[38px] font-semibold leading-[46px] my-auto ml-[10px]">
          #856-963
        </h1>
        <Button
          variant="outline"
          className="px-[14px] py-[9px] flex gap-4 rounded-[5px] border justify-center items-center border-customMkt-grenLight hover:opacity-60 transition max-h-[49px] ml-auto "
          onClick={handlePrint}
        >
          <BsPrinterFill className="h-[20px] w-[20px] fill-customMkt-primary" />
          <h2 className="text-2xl font-medium text-customMkt-primary leading-[29px]">
            Imprimir
          </h2>
        </Button>
      </div>
    </>
  );
};

export default DrawerHeader;
