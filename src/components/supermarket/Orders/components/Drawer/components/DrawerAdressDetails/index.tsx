const DrawerAdressDetails = () => {
  // TODO need add dinamic data from users
  return (
    <div className="px-[14px] py-3 flex flex-col gap-1 rounded-[5px] h-[81px] bg-customMkt-whiteF2">
      <h1 className="font-semibold text-2xl leading-[29px]">
        Endereço de entrega
      </h1>
      <div className="flex gap-2 justify-start items-center flex-col">
        <p className="font-normal text-xl leading-[24px]">
          Av. Fernandes Lima, 2257 - Pinheiro , Maceió - AL
        </p>
        <p className="font-normal text-xl leading-[24px]">
          Ao lado do mercado do joão
        </p>
      </div>
    </div>
  );
};

export default DrawerAdressDetails;
