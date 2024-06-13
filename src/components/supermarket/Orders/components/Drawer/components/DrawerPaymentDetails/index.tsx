const DrawerPaymentDetails = () => {
  // TODO need add dinamic data from users
  return (
    <div className="px-[14px] py-3 flex flex-col rounded-[5px] bg-customMkt-whiteF2">
      <h1 className="font-semibold text-2xl leading-[29px] mb-[10px]">
        Pagamento
      </h1>
      <div className="flex justify-between mb-[6px]">
        <p className="font-normal text-xl leading-[24px]">Subtotal</p>
        <span className="font-normal text-xl leading-[24px]">R$ 138,86</span>
      </div>
      <div className="flex justify-between mb-[12px]">
        <p className="font-normal text-xl leading-[24px]">Frete</p>
        <span className="font-normal text-xl leading-[24px]">R$ 12,00</span>
      </div>
      <div className="flex justify-between ">
        <p className="font-semibold text-xl leading-[24px]">Total</p>
        <span className="font-semibold text-xl leading-[24px]">R$ 150,86</span>
      </div>
    </div>
  );
};

export default DrawerPaymentDetails;
