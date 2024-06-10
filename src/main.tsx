import { ScopedCssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./libs/queryClient";
import { router } from "./routes/router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ScopedCssBaseline>
  </React.StrictMode>
);
