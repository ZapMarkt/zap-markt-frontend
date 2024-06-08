import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Supermarkets } from "../pages/Supermarkets";
import { SupermarketFormPage } from "../pages/SupermarketFormPage";
import { SubscriptionPlan } from "../pages/SubscriptionPlan";
import { SupermarketConfiguration } from "../pages/SupermarketConfiguration";
import { Users } from "../pages/Users";
import { UserDetails } from "../pages/UserDetails";
import { UserConfiguration } from "../pages/UserConfiguration";
import { Configurations } from "../pages/Configurations";
import { AdminUserFormPage } from "../pages/AdminUserFormPage";
import { Login } from "../pages/Login";
import { SharedProducts } from "../pages/SharedProducts";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    index: true,
    element: (
      <PrivateRoute>
        <Dashboard />,
      </PrivateRoute>
    ),
  },
  {
    path: "/supermercados",
    element: (
      <PrivateRoute>
        <Supermarkets />,
      </PrivateRoute>
    ),
  },
  {
    path: "/supermercados/dados-cadastrais",
    element: (
      <PrivateRoute>
        <SupermarketFormPage />,
      </PrivateRoute>
    ),
  },
  {
    path: "/supermercados/plano-assinatura",
    element: (
      <PrivateRoute>
        <SubscriptionPlan />,
      </PrivateRoute>
    ),
  },
  {
    path: "/supermercados/plano-assinatura",
    element: (
      <PrivateRoute>
        <SubscriptionPlan />,
      </PrivateRoute>
    ),
  },
  {
    path: "/supermercados/configuracoes",
    element: (
      <PrivateRoute>
        <SupermarketConfiguration />,
      </PrivateRoute>
    ),
  },
  {
    path: "/usuarios",
    element: (
      <PrivateRoute>
        <Users />,
      </PrivateRoute>
    ),
  },
  {
    path: "/usuario/1",
    element: (
      <PrivateRoute>
        <UserDetails />,
      </PrivateRoute>
    ),
  },
  {
    path: "/usuario/1/configuracoes",
    element: (
      <PrivateRoute>
        <UserConfiguration />,
      </PrivateRoute>
    ),
  },
  {
    path: "/configuracoes",
    element: (
      <PrivateRoute>
        <Configurations />,
      </PrivateRoute>
    ),
  },
  {
    path: "/novo-usuario-administrador",
    element: (
      <PrivateRoute>
        <AdminUserFormPage />,
      </PrivateRoute>
    ),
  },
  {
    path: "/produtos-compartilhados",
    element: (
      <PrivateRoute>
        <SharedProducts />,
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
