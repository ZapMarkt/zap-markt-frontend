import { cn } from '@/lib/utils';

interface SidenavItemProps {
  icon: JSX.Element;
  className?: string | undefined;
}

const SidenavItem: React.FC<SidenavItemProps> = ({ icon, className }) => {
  return (
    <div
      className={cn(
        `bg-transparent py-5 px-[39px] border-l-4 border-transparent  flex justify-center items-center cursor-pointer hover:bg-customMkt-secondary hover:text-customMkt-primary transition-all hover:border-customMkt-primary`,
        className,
      )}
    >
      <div>{icon}</div>
    </div>
  );
};

export default SidenavItem;
