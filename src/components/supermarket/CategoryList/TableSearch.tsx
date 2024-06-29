import SearchInput from '@/components/ui/SearchInput';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import CreateCategoryModal from './CreateCategoryModal';

const TableSearch = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCategoryModal isOpen={open} onClose={() => setOpen(false)} />
      <div className="fixed flex justify-between left-0 right-0 w-[calc(100%-110px)] ml-[110px] px-[30px] max-w-full">
        <SearchInput
          placeholder="Buscar por categorias"
          className="w-[414px]"
        />
        <Button
          size="customLg"
          variant="customPrimary"
          className="w-[264px]"
          onClick={() => setOpen(true)}
        >
          Nova categoria
        </Button>
      </div>
    </>
  );
};

export default TableSearch;
