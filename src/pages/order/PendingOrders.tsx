import Layout from '@/common/components/supermarket/Layout';
import DataTable from '@/components/supermarket/Orders/components/Table/DataTable';
import { columns } from '@/components/supermarket/Orders/components/Table/DataTableColumns';
import DataTableSearch from '@/components/supermarket/Orders/components/Table/DataTableSearch';
import { orders } from '@/data/orders';
import '@fontsource/inter/500.css';
import { Box } from '@mui/material';
import { useState } from 'react';

const PendingOrders = () => {
  const [filterValue, setFilterValue] = useState('');
  return (
    <Layout title="Painel de pedidos">
      <Box>
        <DataTableSearch value={filterValue} onChange={setFilterValue} />
        <DataTable
          columns={columns}
          data={orders}
          
          searchKey="name"
          filterValue={filterValue || ''}
          statusKey="status"
          statusFilter={status}
        />
      </Box>
    </Layout>
  );
};

export default PendingOrders;
