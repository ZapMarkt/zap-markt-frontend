import Header from '@/components/supermarket/Layout/Header';
import SideNav from '@/components/supermarket/Layout/Sidenav';
import { Toaster } from '@/components/ui/supermarket-toasters/toaster';
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
      <div className="mt-[104px] p-[30px] w-[calc(100%-110px)] ml-[110px]">
        {children}
        <Toaster />
      </div>
    </div>
  );
};

export default Layout;
