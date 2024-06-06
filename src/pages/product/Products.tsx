import { Box, Typography } from '@mui/material';
import Header from '../../components/header/Header';
import LayoutSupermarket from '../../shared/LayoutSupermarket';

const ProductsPage = () => {
  return (
    <LayoutSupermarket>
      <Header title="Painel de pedidos" />
      <Box sx={{ padding: '136px 30px 33px 124px' }}>
        <Typography variant="h1">Products</Typography>
      </Box>
    </LayoutSupermarket>
  );
};

export default ProductsPage;
