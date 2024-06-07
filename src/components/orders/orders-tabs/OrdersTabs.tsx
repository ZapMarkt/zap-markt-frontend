import { Box, Divider, Tab, Tabs } from '@mui/material';
import { Link, useLocation, useMatch } from 'react-router-dom';

const TabSX = (isActive: boolean) => ({
  '&.Mui-selected': {
    color: isActive ? '#110B0A' : '#909090',
    transition: '.3s',
  },
});

const ProductsTabs = () => {
  const pathname = useLocation().pathname;
  const routerData = useMatch(pathname);

  const tabLinks = [
    {
      label: 'Todos',
      value: '/pedidos',
      active: pathname === '/pedidos',
    },
    {
      label: 'Pendentes',
      value: '/pedidos/pendentes',
      active: pathname === '/pedidos/pendentes',
    },
    {
      label: 'Aceitos',
      value: '/pedidos/aceitos',
      active: pathname === '/pedidos/aceitos',
    },
    {
      label: 'Em separação',
      value: '/pedidos/separacao',
      active: pathname === '/pedidos/separacao',
    },
    {
      label: 'Rota de entrega',
      value: '/pedidos/rota-de-entrega',
      active: pathname === '/pedidos/rota-de-entrega',
    },
    {
      label: 'Concluído',
      value: '/pedidos/concluido',
      active: pathname === '/pedidos/concluido',
    },
    {
      label: 'Cancelado',
      value: '/pedidos/cancelado',
      active: pathname === '/pedidos/cancelado',
    },
  ];

  return (
    <Box>
      <Tabs
        value={routerData?.pathname}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabLinks.map((tab) => (
          <Tab
            disableRipple
            key={tab.label}
            label={tab.label}
            value={tab.value}
            component={Link}
            to={tab.value}
            sx={TabSX(tab.active)}
          />
        ))}
      </Tabs>
      <Divider sx={{ mb: '24px' }} />
    </Box>
  );
};

export default ProductsTabs;
