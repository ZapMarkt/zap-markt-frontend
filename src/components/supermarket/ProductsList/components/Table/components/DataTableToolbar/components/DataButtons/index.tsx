import NewProductDrawer from '@/components/supermarket/ProductsList/components/NewProductDrawer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import ImportProductsModal from '../DataImportModal';

const DataTableButtons = () => {
  const [openImportProducts, setOpenImportProducts] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  function toggleDrawer() {
    setOpenDrawer(true);
  }

  const onImport = async () => {
    // TODO: add import to db products
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

        <Button
          size="customMd"
          variant="customOutiline"
          className="gap-[10px] transition max-w-[109px]"
        >
          <FaFilter className="fill-customMkt-gray6 group-hover:fill-customMkt-primary/80 w-6 h-6" />
          Filtrar
        </Button>
        <Button
          size="customLg"
          variant="customPrimary"
          className="w-[264px]"
          onClick={toggleDrawer}
        >
          Novo produto
        </Button>
      </div>

      <NewProductDrawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(false)}
      />
    </>
  );
};

export default DataTableButtons;
