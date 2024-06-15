import { Button } from '@/components/ui/button';
interface statusButtonProps {
  icon: JSX.Element;
  status: string;
}

const StatusButton: React.FC<statusButtonProps> = ({ icon, status }) => {
  return (
    <Button
      color="primary"
      className={`p-[7px] min-w-8 h-8 rounded-full bg-statusMktValue-${status}`}
    >
      {icon}
    </Button>
  );
};

export default StatusButton;
