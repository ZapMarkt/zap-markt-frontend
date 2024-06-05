import { Box } from '@mui/material';
import { ReactNode } from 'react';
import SideNav from '../components/drawer/SideNav';

interface LayoutProps {
  children: ReactNode;
}

const LayoutSupermarket: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <SideNav />
      {children}
    </Box>
  );
};

export default LayoutSupermarket;
