import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { ScopedCssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <RouterProvider router={router} />
    </ScopedCssBaseline>
  </React.StrictMode>
);
