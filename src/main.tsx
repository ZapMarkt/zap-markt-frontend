import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { ScopedCssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./libs/mui/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./libs/queryClient";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <RouterProvider router={router} />
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </ScopedCssBaseline>
  </React.StrictMode>
);
