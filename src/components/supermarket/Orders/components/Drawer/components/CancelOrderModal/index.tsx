import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';

interface CancelOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const CancelOrderModal: React.FC<CancelOrderModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  return (
    <Modal
      title="Cancelar pedido #856-963"
      decription="Você tem certeza que deseja cancelar esse pedido? Está ação será irreversível."
      isOpen={isOpen}
      onClose={onClose}
      className="w-[596px] max-w[596px]"
    >
      <div className="gap-5 flex items-center justify-end w-full">
        <Button
          variant="customSecondary"
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

export default CancelOrderModal;
