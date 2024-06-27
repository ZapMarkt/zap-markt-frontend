import ChangePassword from '@/components/supermarket/Login/ChangePassword';
import RecoveryPassword from '@/components/supermarket/Login/RecoveryPassword';
import DashboardPage from '@/pages/supermarket/DashboardPage';
import DeliveryConfigPage from '@/pages/supermarket/DeliveryPageConfig/DeliveryConfigPage';
import LoginPage from '@/pages/supermarket/LoginPage/LoginPage';
import OrderHistoryPage from '@/pages/supermarket/OrderHistory/OrderHistoryPage';
import OrdersPage from '@/pages/supermarket/OrdersPage';
import ProductsPage from '@/pages/supermarket/ProductsPage';
import { createBrowserRouter } from 'react-router-dom';
import { AdminUserFormPage } from '../pages/AdminUserFormPage';
import { Configurations } from '../pages/Configurations';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { SharedProducts } from '../pages/SharedProducts';
import { SubscriptionPlan } from '../pages/SubscriptionPlan';
import { SupermarketConfiguration } from '../pages/SupermarketConfiguration';
import { SupermarketFormPage } from '../pages/SupermarketFormPage';
import { Supermarkets } from '../pages/Supermarkets';
import { UserConfiguration } from '../pages/UserConfiguration';
import { UserDetails } from '../pages/UserDetails';
import { Users } from '../pages/Users';
import { PrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter([
  {
    index: true,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '/supermercados',
    element: (
      <PrivateRoute>
        <Supermarkets />
      </PrivateRoute>
    ),
  },
  {
    path: '/supermercados/dados-cadastrais',
    element: (
      <PrivateRoute>
        <SupermarketFormPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/supermercados/plano-assinatura',
    element: (
      <PrivateRoute>
        <SubscriptionPlan />
      </PrivateRoute>
    ),
  },
  {
    path: '/supermercados/plano-assinatura',
    element: (
      <PrivateRoute>
        <SubscriptionPlan />
      </PrivateRoute>
    ),
  },
  {
    path: '/supermercados/configuracoes',
    element: (
      <PrivateRoute>
        <SupermarketConfiguration />
      </PrivateRoute>
    ),
  },
  {
    path: '/usuarios',
    element: (
      <PrivateRoute>
        <Users />
      </PrivateRoute>
    ),
  },
  {
    path: '/usuario/1',
    element: (
      <PrivateRoute>
        <UserDetails />
      </PrivateRoute>
    ),
  },
  {
    path: '/usuario/1/configuracoes',
    element: (
      <PrivateRoute>
        <UserConfiguration />
      </PrivateRoute>
    ),
  },
  {
    path: '/configuracoes',
    element: (
      <PrivateRoute>
        <Configurations />
      </PrivateRoute>
    ),
  },
  {
    path: '/configuracoes/novo-usuario-administrador',
    element: (
      <PrivateRoute>
        <AdminUserFormPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/produtos-compartilhados',
    element: (
      <PrivateRoute>
        <SharedProducts />
      </PrivateRoute>
    ),
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
    path: '/login-supermarket',
    element: <LoginPage />,
  },
  {
    path: '/recuperar-senha',
    element: <RecoveryPassword />,
  },
  {
    path: '/criando-nova-senha',
    element: <ChangePassword />,
  },
  {
    path: '/dashboarduser', // alterar depois para a rota a ser usada em produção
    element: <DashboardPage />,
  },
  {
    path: '/pedidos',
    element: <OrdersPage />,
  },
  {
    path: '/produtos',
    element: <ProductsPage />,
  },
  {
    path: '/entrega',
    element: <DeliveryConfigPage />,
  },
  {
    path: '/historico-de-pedidos',
    element: <OrderHistoryPage />,
  },
]);
