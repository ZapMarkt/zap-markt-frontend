import { Box, Divider, Tab, Tabs } from "@mui/material";
import { Link, useLocation, useMatch } from "react-router-dom";

export function CustomUserTabs() {
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
          value="/usuario/1"
          component={Link}
          to="/usuario/1"
        />
        <Tab
          label="Configurações"
          value="/usuario/1/configuracoes"
          component={Link}
          to="/usuario/1/configuracoes"
        />
      </Tabs>
      <Divider />
    </Box>
  );
}
