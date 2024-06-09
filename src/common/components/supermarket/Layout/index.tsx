import SideNav from '@/components/supermarket/Sidenav';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <SideNav />
      {children}
    </div>
  );
};

export default Layout;
