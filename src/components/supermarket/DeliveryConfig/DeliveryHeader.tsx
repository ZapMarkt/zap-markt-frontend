import DeliveryForm from './DeliveryForm';

const DeliveryHeader = () => {
  return (
    <div
      className="px-3 py-[18px] bg-white max-w-[613px] max-h-[767px] 
    rounded-[10px]"
    >
      <div className="mb-5">
        <h1 className="text-2xl font-semibold leading-customNormal mb-1">
          Áreas de entregas e valores
        </h1>
        <p className="text-customMkt-blueLight text-lg font-normal">
          Defina seu raio de entrega de acordo com a quilometragem.
        </p>
      </div>
      <div>
        <div className="px-[10px] py-[14px] bg-customMkt-gray4 flex rounded-t-[5px] gap-[12px]">
          <h2 className="text-xl font-semibold leading-customNormal text-left w-[170px]">
            Distancia
          </h2>
          <h2 className="text-xl font-semibold leading-customNormal text-left w-[170px]">
            Valor
          </h2>
          <h2 className="text-xl font-semibold leading-customNormal text-left w-[200px]">
            Tempo
          </h2>
        </div>
        <DeliveryForm />
      </div>
    </div>
  );
};

export default DeliveryHeader;
