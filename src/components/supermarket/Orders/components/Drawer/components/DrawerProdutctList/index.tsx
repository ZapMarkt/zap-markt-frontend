import DrawerProductItem from './components/DrawerProductItem';

const DrawerProdutctList = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <DrawerProductItem />
      <DrawerProductItem />
      <DrawerProductItem />
      <DrawerProductItem />
    </div>
  );
};

export default DrawerProdutctList;
