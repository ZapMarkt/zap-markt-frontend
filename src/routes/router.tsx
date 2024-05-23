import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Supermarkets } from "../pages/Supermarkets";
import { SupermarketFormPage } from "../pages/SupermarketFormPage";

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
]);
