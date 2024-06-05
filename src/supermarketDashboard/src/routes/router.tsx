import { createBrowserRouter } from 'react-router-dom';
import DashboardPage from '../pages/dashboard/Dashboard';
import AcceptedOrders from '../pages/pedidos/tab/AcceptedOrders';
import AllOrdersTab from '../pages/pedidos/tab/AllOrders';
import CancelledOrders from '../pages/pedidos/tab/CancelledOrders';
import CompletedOrders from '../pages/pedidos/tab/CompletedOrders';
import InPreparationOrders from '../pages/pedidos/tab/InPreparationOrders';
import OutForDeliveryOrders from '../pages/pedidos/tab/OutForDeliveryOrders';
import PendingOrders from '../pages/pedidos/tab/PendingOrders';
import ProductsPage from '../pages/produtos/Products';

export const router = createBrowserRouter([
  {
    index: true,
    element: <DashboardPage />,
  },
  {
    path: '/pedidos',
    element: <AllOrdersTab />,
  },
  {
    path: '/pedidos/pendentes',
    element: <PendingOrders />,
  },
  {
    path: '/pedidos/aceitos',
    element: <AcceptedOrders />,
  },
  {
    path: '/pedidos/separacao',
    element: <InPreparationOrders />,
  },
  {
    path: '/pedidos/rota-de-entrega',
    element: <OutForDeliveryOrders />,
  },
  {
    path: '/pedidos/concluido',
    element: <CompletedOrders />,
  },
  {
    path: '/pedidos/cancelado',
    element: <CancelledOrders />,
  },
  {
    path: '/produtos',
    element: <ProductsPage />,
  },
]);
