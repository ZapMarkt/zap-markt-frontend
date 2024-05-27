import { Box, FormControlLabel, Link, Switch, Typography } from "@mui/material";
import { CustomAppBar } from "../components/CustomAppBar";
import { CustomTabs } from "../components/CustomTabs";
import { Layout } from "../shared/Layout";

export function SupermarketConfiguration() {
  return (
    <Layout>
      <CustomAppBar title="Mix Mateus" />
      <CustomTabs />
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={8.62}
      >
        <FormControlLabel
          label="Loja visível no aplicativo"
          labelPlacement="start"
          control={<Switch color="success" />}
        />
        <Typography
          variant="caption"
          fontSize={16}
        >
          Excluir todos os dados deste usuário
        </Typography>
        <Link color="error">Excluir dados</Link>
      </Box>
    </Layout>
  );
}
