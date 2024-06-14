import FeijaoPretoKikaldo from '@/assets/feijao-preto-kicaldo.jpeg';
import ActionButons from './components/ActionButtons';

const DrawerProductItem = () => {
  return (
    <div className="flex py-[10px] items-center border-b-[0.5px] border-b-customMkt-gray2 last:border-b-0">
      <div className="h-[90px] bg-white rounded-[5px] object-cover">
        <img
          className="h-full"
          src={FeijaoPretoKikaldo}
          alt="Feijao Preto Kikaldo"
        />
      </div>
      <div className="flex flex-col gap-2 ml-[10px]">
        <p className="text-xl leading-customNormal font-medium">
          Feijão Preto Kicaldo
        </p>
        <p className="text-customMkt-primary text-lg leading-customNormal">
          R${' '}
          <span className="text-customMkt-primary text-lg leading-customNormal">
            13,70
          </span>
        </p>
      </div>
      <p className="ml-auto font-medium text-xl leading-customNormal">2 un</p>
      <ActionButons />
    </div>
  );
};

export default DrawerProductItem;
