const DrawerOrderDetails = () => {
  // TODO: add bg-color status formatter
  return (
    <div className="flex justify-start items-center gap-[10px]">
      <div className="px-3 py-[10px] w-[194px] rounded-[5px] bg-statusMkt-pendent flex justify-center items-center max-h-11 text-xl leading-[24px] font-medium text-white">
        Pendente
      </div>
      <div className="w-[6px] h-[6px] bg-customMkt-black rounded-full" />
      <div className="px-3 py-[10px] rounded-[5px] bg-transparent border-customMkt-grenLight border flex justify-center items-center max-h-11 text-xl leading-[24px] font-medium text-customMkt-black">
        Feito ás 12:53
      </div>
      <div className="w-[6px] h-[6px] bg-customMkt-black rounded-full" />
      <div className="px-3 py-[10px] rounded-[5px] bg-transparent border-customMkt-grenLight border flex justify-center items-center max-h-11 text-xl leading-[24px] font-medium text-customMkt-black">
        Entregar até as 14:00
      </div>
    </div>
  );
};

export default DrawerOrderDetails;
