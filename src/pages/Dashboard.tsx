import { Box, Typography } from "@mui/material";
import { Layout } from "../shared/Layout";

export function Dashboard() {
  return (
    <Layout>
      <Box padding={3.75}>
        <Typography
          variant="h1"
          sx={{ marginTop: 11.75 }}
          fontSize={38}
          fontWeight={600}
        >
          Dashboard
        </Typography>
      </Box>
    </Layout>
  );
}
