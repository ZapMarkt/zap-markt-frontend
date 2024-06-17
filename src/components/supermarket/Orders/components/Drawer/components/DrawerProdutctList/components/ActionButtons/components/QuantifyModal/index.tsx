import { Button } from '@/components/ui/button';
import InputIcon from '@/components/ui/input-icon';
import { Modal } from '@/components/ui/modal';
import { formatQuantifyNumber } from '@/utils/formatQuantifyNumber';
import { useState } from 'react';
import { TbCurrencyReal } from 'react-icons/tb';

interface EditQuantifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const EditQuantifyModal: React.FC<EditQuantifyModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  // TODO: retirar depois
  const [inputValue, setInputValue] = useState<string>('1.200');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <Modal
      title="Edição de quantidade"
      decription="Edite a quantidade de um produto sem precisa exclui-lo."
      isOpen={isOpen}
      onClose={onClose}
      className="w-[37.25rem] max-w[37.25rem]"
    >
      <div className="flex gap-6 mb-6">
        <InputIcon
          disabled={true}
          label="Preço total"
          value="8,70"
          icon={<TbCurrencyReal />}
        />
        <InputIcon
          label="Quantidade"
          text="Kg"
          onChange={handleChange}
          value={formatQuantifyNumber(inputValue)}
          type="number"
        />
      </div>
      <div className="gap-5 flex items-center justify-end w-full">
        <Button
          variant="customSecondary"
          size="customLg"
          disabled={loading}
          onClick={onClose}
        >
          Voltar
        </Button>
        <Button
          variant="customPrimary"
          size="customLg"
          disabled={loading}
          onClick={onConfirm}
        >
          Salvar
        </Button>
      </div>
    </Modal>
  );
};

export default EditQuantifyModal;
