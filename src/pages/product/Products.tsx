import Layout from '@/common/components/supermarket/Layout';
import { Box, Typography } from '@mui/material';

const ProductsPage = () => {
  return (
    <Layout title="Produtos">
      <Box sx={{ padding: '136px 30px 33px 124px' }}>
        <Typography variant="h1">Produtos</Typography>
      </Box>
    </Layout>
  );
};

export default ProductsPage;
