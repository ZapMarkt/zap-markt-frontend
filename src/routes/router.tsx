import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Supermarkets } from "../pages/Supermarkets";
import { SupermarketFormPage } from "../pages/SupermarketFormPage";
import { SubscriptionPlan } from "../pages/SubscriptionPlan";
import { SupermarketConfiguration } from "../pages/SupermarketConfiguration";
import { Users } from "../pages/Users";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: "/supermercados",
    element: <Supermarkets />,
  },
  {
    path: "/supermercados/dados-cadastrais",
    element: <SupermarketFormPage />,
  },
  {
    path: "/supermercados/plano-assinatura",
    element: <SubscriptionPlan />,
  },
  {
    path: "/supermercados/plano-assinatura",
    element: <SubscriptionPlan />,
  },
  {
    path: "/supermercados/configuracoes",
    element: <SupermarketConfiguration />,
  },
  {
    path: "/usuarios",
    element: <Users />,
  },
]);
