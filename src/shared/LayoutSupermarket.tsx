import { Box, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import SideNav from '../components/drawer/SideNav';
import { theme } from '../libs/mui/themeSupermarket';

interface LayoutProps {
  children: ReactNode;
}

const LayoutSupermarket: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <SideNav />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default LayoutSupermarket;
