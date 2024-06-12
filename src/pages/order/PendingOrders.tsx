import Layout from '@/common/components/supermarket/Layout';
import '@fontsource/inter/500.css';
import { Box } from '@mui/material';
import { useState } from 'react';

const PendingOrders = () => {
  const [filterValue, setFilterValue] = useState('');
  return (
    <Layout title="Painel de pedidos">
      <Box>1</Box>
    </Layout>
  );
};

export default PendingOrders;
