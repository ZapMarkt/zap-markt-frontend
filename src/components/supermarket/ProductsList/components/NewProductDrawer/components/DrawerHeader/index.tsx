import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import CloseDrawerModal from '../CloseDrawerModal';

interface NewProductDrawerHeaderProps {
  onClose: () => void;
}

const NewProductDrawerHeader: React.FC<NewProductDrawerHeaderProps> = ({
  onClose,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CloseDrawerModal
        isOpen={open}
        onConfirm={onClose}
        onClose={() => setOpen(false)}
      />
      <div className="flex items-start justify-betweengap-[10px] px-[30px] pt-10 pb-[17px] border-b border-b-customMkt-whiteF0">
        <Button
          onClick={() => setOpen(true)}
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
