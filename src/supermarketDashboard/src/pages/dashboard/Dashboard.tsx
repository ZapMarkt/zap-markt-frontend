import { Box, Typography } from '@mui/material';
import Header from '../../components/header/Header';
import LayoutSupermarket from '../../shared/LayoutSupermarket';

const DashboardPage = () => {
  return (
    <LayoutSupermarket>
      <Header title="Dashboard" />
      <Box sx={{ padding: '136px 30px 33px 124px' }}>
        <Typography variant="h1">Home</Typography>
      </Box>
    </LayoutSupermarket>
  );
};

export default DashboardPage;
