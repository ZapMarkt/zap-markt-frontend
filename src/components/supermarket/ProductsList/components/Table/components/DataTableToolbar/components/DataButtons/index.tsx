import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import ImportProductsModal from '../DataImportModal';
import DataTableFilter from '../DataTableFilter';

const DataTableButtons = () => {
  const [openImportProducts, setOpenImportProducts] = useState(false);
  const [loading, setLoading] = useState(false);

  const onImport = async () => {
    // TODO add import to db products
    try {
      setLoading(true);
    } catch (error) {
      console.log(error);
      alert('Problema na importação!');
    } finally {
      setLoading(false);
      setOpenImportProducts(false);
    }
  };

  return (
    <>
      <ImportProductsModal
        isOpen={openImportProducts}
        onClose={() => setOpenImportProducts(false)}
        onConfirm={onImport}
        loading={loading}
      />
      <div className="flex gap-[18px]">
        <Button
          size="customMd"
          variant="customOutiline"
          className="gap-[10px] transition max-w-[225px]"
          onClick={() => setOpenImportProducts(true)}
        >
          <MdOutlineDriveFolderUpload className="group-hover:fill-customMkt-primary/80 w-6 h-6" />
          Importar produtos
        </Button>

        <DataTableFilter />
        <Button size="customLg" variant="customPrimary" className="w-[264px]">
          Novo produto
        </Button>
      </div>
    </>
  );
};

export default DataTableButtons;
