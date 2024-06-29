import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';

interface CloseDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CloseDrawerModal: React.FC<CloseDrawerModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      title="Cancelar alterações?"
      decription="Caso possua algum dado inserido, ele será perdido. E deverá ser inserido novamente."
      isOpen={isOpen}
      onClose={onClose}
      className="w-[596px] max-w[596px]"
    >
      <div className="gap-5 flex items-center justify-end w-full">
        <Button variant="customError" size="customLg" onClick={onConfirm}>
          Cancelar
        </Button>
        <Button variant="customPrimary" size="customLg" onClick={onClose}>
          Voltar
        </Button>
      </div>
    </Modal>
  );
};

export default CloseDrawerModal;
