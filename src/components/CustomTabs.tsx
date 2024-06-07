import { Box, Divider, Tab, Tabs } from "@mui/material";
import { Link, useLocation, useMatch } from "react-router-dom";

export function CustomTabs() {
  const location = useLocation();
  const routerData = useMatch(location.pathname);

  return (
    <Box
      marginTop={12.5}
      marginBottom={3.75}
    >
      <Tabs value={routerData?.pathname}>
        <Tab
          label="Dados cadastrais"
          value="/supermercados/dados-cadastrais"
          component={Link}
          to="/supermercados/dados-cadastrais"
        />
        <Tab
          label="Plano de assinatura"
          value="/supermercados/plano-assinatura"
          component={Link}
          to="/supermercados/plano-assinatura"
        />
        <Tab
          label="Configurações"
          value="/supermercados/configuracoes"
          component={Link}
          to="/supermercados/configuracoes"
        />
      </Tabs>
      <Divider />
    </Box>
  );
}
