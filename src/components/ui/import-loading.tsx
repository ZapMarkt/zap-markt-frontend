import { IoIosArrowDown } from 'react-icons/io';

const ImportLoading = () => {
  return (
    <div className="mb-5 relative h-[120px] w-[120px] pb-3">
      <IoIosArrowDown className="w-24 h-24 fill-customMkt-primary top-[-5px] absolute animate-[loadingImport_0.6s_ease-in-out_infinite]" />
      <IoIosArrowDown className="w-24 h-24 fill-customMkt-primary top-[25px] absolute animate-[loadingImport_0.6s_ease-in-out_infinite]" />
      <IoIosArrowDown className="w-24 h-24 fill-customMkt-primary top-[55px] absolute animate-[loadingImport_0.6s_ease-in-out_infinite]" />
    </div>
  );
};

export default ImportLoading;
