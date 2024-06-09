import Layout from '@/common/components/supermarket/Layout';
import { Box, Typography } from '@mui/material';

const DashboardSupermarketPage = () => {
  return (
    <Layout title="Produtos">
      <Box sx={{ padding: '136px 30px 33px 124px' }}>
        <Typography variant="h1">Dashboard</Typography>
      </Box>
    </Layout>
  );
};

export default DashboardSupermarketPage;
