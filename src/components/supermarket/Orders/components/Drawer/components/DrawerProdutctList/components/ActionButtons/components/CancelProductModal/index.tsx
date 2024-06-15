import FeijaoPretoKikaldo from '@/assets/feijao-preto-kicaldo.jpeg';
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
      title="Cancelar produto"
      decription="Você tem certeza que deseja cancelar esse produto? Está ação será irreversível."
      isOpen={isOpen}
      onClose={onClose}
      className="w-[596px] max-w[596px]"
    >
      {' '}
      <div className="border border-customMkt-primaryLight rounded-[5px] px-[15px] py-[10px] flex items-center mb-6">
        <div className="h-[60px] bg-white rounded-[5px] object-cover">
          <img
            className="h-full"
            src={FeijaoPretoKikaldo}
            alt="Feijao Preto Kikaldo"
          />
        </div>
        <div className="flex flex-col gap-1 ml-[6px]">
          <p className="text-xl leading-customNormal font-medium">
            Feijão Preto Kicaldo
          </p>
          <p className="text-customMkt-primary text-lg leading-customNormal">
            R${' '}
            <span className="text-customMkt-primary text-lg leading-customNormal">
              13,70
            </span>
          </p>
        </div>{' '}
        <p className="ml-auto font-medium text-xl leading-customNormal">2 un</p>
      </div>
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
