import {
  FaClipboardList,
  FaHandHoldingUsd,
  FaShoppingCart,
} from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import Card from '../components/Card';

const dataCard = [
  {
    title: 'Total de vendas hoje',
    Icon: <MdOutlineAttachMoney className="h-6 w-6 fill-customMkt-gray3" />,
    value: 10560.89,
    isCurrency: true,
  },
  {
    title: 'Pedidos realizados',
    Icon: <FaClipboardList className="h-6 w-6 fill-customMkt-gray3" />,
    value: 422,
    isCurrency: false,
  },
  {
    title: 'Produtos em pausa',
    Icon: <FaShoppingCart className="h-6 w-6 fill-customMkt-gray3" />,
    value: 15,
    isCurrency: false,
  },
  {
    title: 'Pedidos realizados',
    Icon: <FaHandHoldingUsd className="h-6 w-6 fill-customMkt-gray3" />,
    value: 190052.23,
    isCurrency: true,
  },
];

const DashboardCards = () => {
  return (
    <div className="flex gap-[30px]">
      {dataCard.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          icon={card.Icon}
          value={card.value}
          isCurrency={card.isCurrency}
        />
      ))}
    </div>
  );
};

export default DashboardCards;
