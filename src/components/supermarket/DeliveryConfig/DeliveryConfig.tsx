import { cn } from '@/lib/utils';
import DeliveryHeader from './DeliveryHeader';

interface DeliveryConfigProps {
  className?: string;
}

const DeliveryConfig: React.FC<DeliveryConfigProps> = ({ className }) => {
  return (
    <div className={cn('p-[30px]', className)}>
      <DeliveryHeader />
    </div>
  );
};

export default DeliveryConfig;
