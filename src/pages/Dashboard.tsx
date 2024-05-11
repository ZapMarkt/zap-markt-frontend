import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import { Layout } from "../shared/Layout";
import StoreIcon from "@mui/icons-material/Store";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export function Dashboard() {
  return (
    <Layout>
      <Grid
        marginTop={11.75}
        container
        columns={3}
        spacing={3.75}
        padding={3.75}
      >
        <Grid
          item
          xl={1}
          lg={1}
          md={1}
        >
          <Card>
            <CardContent>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: "8px", color: "#A5A5A5" }}
                  variant="subtitle1"
                  fontSize={18}
                  fontWeight={500}
                >
                  <StoreIcon
                    fontSize="large"
                    color="action"
                  />
                  Supermercados cadastrados
                </Typography>
                <ArrowOutwardIcon
                  fontSize="large"
                  color="warning"
                />
              </Box>
              <Typography
                variant="subtitle2"
                fontSize={44}
                fontWeight={600}
              >
                15
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  sx={{ color: "#A5A5A5" }}
                  variant="subtitle1"
                  fontSize={18}
                  fontWeight={500}
                >
                  Nesse mês
                </Typography>
                <Chip
                  label={"12.69%"}
                  variant="outlined"
                  color="success"
                  icon={<ArrowUpwardIcon />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xl={1}
          lg={1}
          md={1}
        >
          <Card>
            <CardContent>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: "8px", color: "#A5A5A5" }}
                  variant="subtitle1"
                  fontSize={18}
                  fontWeight={500}
                >
                  <PeopleIcon
                    fontSize="large"
                    color="action"
                  />
                  Usuários cadastrados
                </Typography>
                <ArrowOutwardIcon
                  fontSize="large"
                  color="warning"
                />
              </Box>
              <Typography
                variant="subtitle2"
                fontSize={44}
                fontWeight={600}
              >
                658
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  sx={{ color: "#A5A5A5" }}
                  variant="subtitle1"
                  fontSize={18}
                  fontWeight={500}
                >
                  Nesse mês
                </Typography>
                <Chip
                  label={"12.69%"}
                  variant="outlined"
                  color="error"
                  icon={<ArrowDownwardIcon />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xl={1}
          lg={1}
          md={1}
        >
          <Card>
            <CardContent>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: "8px", color: "#A5A5A5" }}
                  variant="subtitle1"
                  fontSize={18}
                  fontWeight={500}
                >
                  <SellIcon
                    fontSize="large"
                    color="action"
                  />
                  Compras realizadas
                </Typography>
                <ArrowOutwardIcon
                  fontSize="large"
                  color="warning"
                />
              </Box>
              <Typography
                variant="subtitle2"
                fontSize={44}
                fontWeight={600}
              >
                42
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  sx={{ color: "#A5A5A5" }}
                  variant="subtitle1"
                  fontSize={18}
                  fontWeight={500}
                >
                  Nesse mês
                </Typography>
                <Chip
                  label={"12.69%"}
                  variant="outlined"
                  color="success"
                  icon={<ArrowUpwardIcon />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
