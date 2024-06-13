const DrawerClientDetails = () => {
  // TODO need add dinamic data from users
  return (
    <div className="px-[14px] py-3 flex flex-col gap-1 rounded-[5px] h-[81px] bg-customMkt-whiteF2">
      <h1 className="font-semibold text-2xl leading-[29px]">
        João Pedro Ferreira
      </h1>
      <div className="flex gap-2 justify-start items-center">
        <p className="font-normal text-xl leading-[24px]">(82) 99825-1560</p>
        <div className="rounded-full h-[7px] w-[7px] bg-customMkt-blueLight" />
        <p className="font-normal text-xl leading-[24px]">
          CPF: 999.999.999-99
        </p>
      </div>
    </div>
  );
};

export default DrawerClientDetails;
