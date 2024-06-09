import Header from '@/components/supermarket/Header';
import SideNav from '@/components/supermarket/Sidenav';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="flex">
      <SideNav />
      <Header title={title} />
      <div className="mt-[103px] p-[30px]">{children}</div>
    </div>
  );
};

export default Layout;
