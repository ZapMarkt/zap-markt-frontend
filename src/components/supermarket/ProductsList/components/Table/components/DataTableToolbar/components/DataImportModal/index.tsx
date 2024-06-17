import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';
import { cn } from '@/lib/utils';
import { useCallback, useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import CompletedImportProductsModal from '../DataCompleteModal';
import LoadingImportProductsModal from '../DataLoadingModal';

interface ImportProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const ImportProductsModal: React.FC<ImportProductsModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [layout, setLayout] = useState<'upload' | 'loading' | 'success'>(
    'upload',
  );

  const onArchive = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
        if (fileExtension === 'xml' || fileExtension === 'csv') {
          setFile(selectedFile);
          setFileName(selectedFile.name);
          setError(false);
        } else {
          setFile(null);
          setFileName('');
          setError(true);
        }
      }
    },
    [],
  );

  const handleClose = () => {
    setFile(null);
    setFileName('');
    setError(false);
    onClose();
  };

  const handleImport = () => {
    setFile(null);
    setFileName('');
    setError(false);
    setLayout('loading');
    setIsCompleted(false);
  };

  const handleConfirm = () => {
    setLayout('upload');
    onConfirm();
  };

  // apagar na integração, apenas para verficiação de passos d aimportação
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompleteImport = () => {
    setLayout('success');
    setIsCompleted(true);
  };

  const getTitleAndDescription = () => {
    switch (layout) {
      case 'upload':
        return {
          title: 'Importação de produtos',
          description:
            'Suba seus produtos com nossos sistema de importação, utilizando XML ou CSV.',
        };
      case 'loading':
        return {
          title: 'Importando os dados e criando produtos',
          description:
            'Não saia dessa tela até que a importação seja concluída.',
        };
      case 'success':
        return {
          title: 'Importação concluída com sucesso',
          description: 'Encontre os importados na página de produtos.',
        };
      default:
        return {
          title: '',
          description: '',
        };
    }
  };

  const { title, description } = getTitleAndDescription();

  return (
    <Modal
      title={title}
      decription={description}
      isOpen={isOpen}
      onClose={handleClose}
      className="w-[596px] max-w-[596px]"
    >
      {layout === 'upload' && (
        <div className="w-[548px] h-[140px] mb-6 rounded-[5px] border border-dashed border-customMkt-gray7 relative hover:border-customMkt-primary group transition-all">
          <div className="absolute flex justify-center items-center h-full w-full gap-3">
            <div className="p-[10px] rounded-[8px] border border-customMkt-gray1 bg-white text-center group-hover:border-customMkt-primary transition">
              <IoMdCloudUpload className="w-[18px] h-[18px] fill-customMkt-gray6 group-hover:fill-customMkt-primary" />
            </div>
            <div className="flex items-center justify-center flex-col">
              {fileName ? (
                <p className="text-customMkt-primary text-sm font-semibold leading-[20px]">
                  {fileName}
                </p>
              ) : (
                <>
                  <p className="text-customMkt-primary text-sm font-semibold">
                    {error
                      ? `${fileName}`
                      : 'Arraste ou clique para subir o arquivo'}
                  </p>
                  <p
                    className={cn(
                      'text-xs font-normal leading-normal text-customMkt-gray6',
                      error && 'text-red-700 text-sm font-semibold',
                    )}
                  >
                    {error
                      ? 'Formato de arquivo inválido.'
                      : 'Arquivos aceitos XML, ou CSV'}
                  </p>
                </>
              )}
            </div>
          </div>
          <Input
            onChange={onArchive}
            className="w-full h-full opacity-0 cursor-pointer"
            type="file"
          />
        </div>
      )}

      {layout === 'loading' && (
        <LoadingImportProductsModal onClick={handleCompleteImport} />
      )}

      {layout === 'success' && <CompletedImportProductsModal />}

      <div className="gap-5 flex items-center justify-end w-full">
        {layout === 'upload' && (
          <>
            <Button
              variant="customSecondary"
              size="customLg"
              disabled={loading}
              onClick={handleClose}
            >
              Voltar
            </Button>
            <Button
              variant="customPrimary"
              size="customLg"
              disabled={error || !file || loading}
              onClick={handleImport}
            >
              Importar
            </Button>
          </>
        )}
        {(layout === 'loading' || layout === 'success') && (
          <Button
            variant="customPrimary"
            size="customLg"
            //TODO disabled={error || !file || loading} ativar na integração
            disabled={!isCompleted}
            onClick={handleConfirm}
          >
            Continuar
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ImportProductsModal;
