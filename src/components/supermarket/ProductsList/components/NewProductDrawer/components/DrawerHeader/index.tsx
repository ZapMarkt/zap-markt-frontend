import { Button } from '@/components/ui/button';
import { FaArrowLeft } from 'react-icons/fa6';

interface NewProductDrawerHeaderProps {
  onClose: () => void;
}

const NewProductDrawerHeader: React.FC<NewProductDrawerHeaderProps> = ({
  onClose,
}) => {
  return (
    <>
      <div className="flex items-start justify-betweengap-[10px] px-[30px] pt-10 pb-[17px] border-b border-b-customMkt-whiteF0">
        <Button
          onClick={onClose}
          className="flex justify-center items-center my-auto"
        >
          <FaArrowLeft className="fill-customMkt-primary w-5 h-5" />
        </Button>
        <h1 className="text-[38px] font-semibold leading-[46px] my-auto ml-[10px]">
          Novo produto
        </h1>
      </div>
    </>
  );
};

export default NewProductDrawerHeader;
