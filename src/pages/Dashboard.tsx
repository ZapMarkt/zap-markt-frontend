import { Box, Card, CardContent, Chip, Divider, Typography } from "@mui/material";
import { Layout } from "../shared/Layout";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";

export function Dashboard() {
  return (
    <Layout headerTitle="Dashboard">
      <Box
        display={"flex"}
        gap={3.75}
        marginTop={12.5}
      >
        <Card
          elevation={3}
          sx={{ flex: 1 }}
        >
          <CardContent>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="h2"
                fontSize={18}
                display={"flex"}
                alignItems={"center"}
                gap={1.5}
              >
                <StoreIcon />
                Supermercados
              </Typography>
              <ArrowOutwardIcon color="warning" />
            </Box>
            <Typography
              variant="caption"
              fontSize={44}
              fontWeight={700}
            >
              15
            </Typography>
            <Divider />
            <Box
              marginTop={2.5}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="caption"
                fontSize={18}
                fontWeight={500}
              >
                Nesse mês
              </Typography>
              <Chip
                label="12.69%"
                variant="filled"
                color="success"
                size="small"
                icon={<ArrowUpwardIcon />}
              />
            </Box>
          </CardContent>
        </Card>
        <Card
          elevation={3}
          sx={{ flex: 1 }}
        >
          <CardContent>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="h2"
                fontSize={18}
                display={"flex"}
                alignItems={"center"}
                gap={1.5}
              >
                <PeopleIcon />
                Usuários
              </Typography>
              <ArrowOutwardIcon color="warning" />
            </Box>
            <Typography
              variant="caption"
              fontSize={44}
              fontWeight={700}
            >
              658
            </Typography>
            <Divider />
            <Box
              marginTop={2.5}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="caption"
                fontSize={18}
                fontWeight={500}
              >
                Nesse mês
              </Typography>
              <Chip
                label="12.69%"
                variant="filled"
                color="error"
                size="small"
                icon={<ArrowDownwardIcon />}
              />
            </Box>
          </CardContent>
        </Card>
        <Card
          elevation={3}
          sx={{ flex: 1 }}
        >
          <CardContent>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="h2"
                fontSize={18}
                display={"flex"}
                alignItems={"center"}
                gap={1.5}
              >
                <SellIcon />
                Vendas
              </Typography>
              <ArrowOutwardIcon color="warning" />
            </Box>
            <Typography
              variant="caption"
              fontSize={44}
              fontWeight={700}
            >
              42
            </Typography>
            <Divider />
            <Box
              marginTop={2.5}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="caption"
                fontSize={18}
                fontWeight={500}
              >
                Hoje
              </Typography>
              <Chip
                label="12.69%"
                variant="filled"
                color="success"
                size="small"
                icon={<ArrowUpwardIcon />}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
}
