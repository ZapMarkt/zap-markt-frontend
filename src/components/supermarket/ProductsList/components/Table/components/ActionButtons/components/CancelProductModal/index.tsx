import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';

interface CancelProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const CancelProductModal: React.FC<CancelProductModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  return (
    <Modal
      title="Apagar produto"
      decription="Você tem certeza que deseja apagar esse produto? Está ação será irreversível."
      isOpen={isOpen}
      onClose={onClose}
      className="w-[596px] max-w[596px]"
    >
      <div className="gap-5 flex items-center justify-end w-full">
        <Button
          variant="customError"
          size="customLg"
          disabled={loading}
          onClick={onConfirm}
        >
          Cancelar
        </Button>
        <Button
          variant="customPrimary"
          size="customLg"
          disabled={loading}
          onClick={onClose}
        >
          Voltar
        </Button>
      </div>
    </Modal>
  );
};

export default CancelProductModal;
