import { createBrowserRouter } from 'react-router-dom';
import { AdminUserFormPage } from '../pages/AdminUserFormPage';
import { Configurations } from '../pages/Configurations';
import { Dashboard } from '../pages/Dashboard';
import HomeTemporary from '../pages/HomeTemporary';
import { Login } from '../pages/Login';
import { SharedProducts } from '../pages/SharedProducts';
import { SubscriptionPlan } from '../pages/SubscriptionPlan';
import { SupermarketConfiguration } from '../pages/SupermarketConfiguration';
import { SupermarketFormPage } from '../pages/SupermarketFormPage';
import { Supermarkets } from '../pages/Supermarkets';
import { UserConfiguration } from '../pages/UserConfiguration';
import { UserDetails } from '../pages/UserDetails';
import { Users } from '../pages/Users';
import DashboardSupermarketPage from '../pages/dashboard/Dashboard';
import AcceptedOrders from '../pages/order/AcceptedOrders';
import AllOrdersTab from '../pages/order/AllOrders';
import CancelledOrders from '../pages/order/CancelledOrders';
import CompletedOrders from '../pages/order/CompletedOrders';
import InPreparationOrders from '../pages/order/InPreparationOrders';
import OutForDeliveryOrders from '../pages/order/OutForDeliveryOrders';
import PendingOrders from '../pages/order/PendingOrders';
import ProductsPage from '../pages/product/Products';

export const router = createBrowserRouter([
  {
    index: true,
    element: <HomeTemporary />,
  },
  {
    path: '/dashboardadmin', // alterar depois para a rota a ser usada em produção
    element: <Dashboard />,
  },

  {
    path: '/supermercados',
    element: <Supermarkets />,
  },
  {
    path: '/supermercados/dados-cadastrais',
    element: <SupermarketFormPage />,
  },
  {
    path: '/supermercados/plano-assinatura',
    element: <SubscriptionPlan />,
  },
  {
    path: '/supermercados/plano-assinatura',
    element: <SubscriptionPlan />,
  },
  {
    path: '/supermercados/configuracoes',
    element: <SupermarketConfiguration />,
  },
  {
    path: '/usuarios',
    element: <Users />,
  },
  {
    path: '/usuario/1',
    element: <UserDetails />,
  },
  {
    path: '/usuario/1/configuracoes',
    element: <UserConfiguration />,
  },
  {
    path: '/configuracoes',
    element: <Configurations />,
  },
  {
    path: '/novo-usuario-administrador',
    element: <AdminUserFormPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/produtos-compartilhados',
    element: <SharedProducts />,
  },

  // supermarket routes

  {
    path: '/dashboarduser', // alterar depois para a rota a ser usada em produção
    element: <DashboardSupermarketPage />,
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
