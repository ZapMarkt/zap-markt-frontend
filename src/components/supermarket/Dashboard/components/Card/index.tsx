import { formatCurrency } from '@/utils/formatCurrency';

interface CardProps {
  icon: JSX.Element;
  title: string;
  value: number;
  isCurrency?: boolean;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  value,
  isCurrency = false,
}) => {
  return (
    <div className="px-[25px] py-[20px] rounded-lg border border-customMkt-gray4 bg-white w-full">
      <div className="flex gap-3 w-full items-center mb-3">
        {icon}
        <p className="text-lg text-customMkt-gray3 font-medium">{title}</p>
      </div>
      <span className="text-[38px] text-customMkt-primary font-bold leading-tight">
        {isCurrency ? formatCurrency(value) : value}
      </span>
    </div>
  );
};

export default Card;
