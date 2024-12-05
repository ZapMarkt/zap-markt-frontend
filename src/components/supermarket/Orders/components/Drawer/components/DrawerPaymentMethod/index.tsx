const DrawerPaymentMethod = () => {
  // TODO: need add dinamic data from users
  return (
    <div className=" flex flex-col ">
      <h1 className="font-semibold text-2xl leading-[29px] mb-[10px]">
        Forma de pagamento
      </h1>
      <div className="bg-white px-[14px] py-3 rounded-[5px] border border-customMkt-gray2">
        <div className="flex justify-start gap-[6px] ">
          <div className="h-6 w-6 bg-black" />
          <span className="font-medium text-xl leading-[24px]">
            Debito - Visa
          </span>
        </div>
        <p className="font-light text-xl leading-[24px] text-customMkt-blueLight">
          Pagamento na entrega
        </p>
      </div>
    </div>
  );
};

export default DrawerPaymentMethod;
