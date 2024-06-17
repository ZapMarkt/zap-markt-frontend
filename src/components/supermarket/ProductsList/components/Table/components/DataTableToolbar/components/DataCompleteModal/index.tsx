import { FaCheckCircle } from 'react-icons/fa';

const CompletedImportProductsModal = () => {
  return (
    <div className="flex justify-center items-center w-[548px] h-[182px] flex-col text-center mb-6">
      <FaCheckCircle className="fill-customMkt-primary w-[140px] h-[140px] mb-5" />
      <p className="text-lg font-medium leading-customNormal mb-3">
        100% Concluída
      </p>
      <div
        id="slider"
        className="w-full h-2 bg-customMkt-whiteF0 rounded-[11px]"
      >
        <div className="w-full h-2 bg-customMkt-primary rounded-[11px]" />
      </div>
    </div>
  );
};

export default CompletedImportProductsModal;
