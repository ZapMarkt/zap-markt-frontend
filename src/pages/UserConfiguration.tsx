import { Box, FormControlLabel, Link, Switch, Typography } from "@mui/material";
import { CustomAppBar } from "../components/CustomAppBar";
import { Layout } from "../shared/Layout";
import { CustomUserTabs } from "../components/CustomUserTabs";

export function UserConfiguration() {
  return (
    <Layout>
      <CustomAppBar title="Christopher" />
      <CustomUserTabs />
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={8.62}
      >
        <FormControlLabel
          label="Status da conta"
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
