import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

type CustomAppBarProps = {
  title: string;
};

export function CustomAppBar({ title }: CustomAppBarProps) {
  return (
    <AppBar
      color="inherit"
      position="fixed"
      elevation={1}
      sx={{ padding: 3.75, marginBottom: 5, width: `calc(100% - 340px)`, paddingBottom: 1.87 }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h1"
          fontSize={38}
          fontWeight={600}
        >
          {title}
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={2}
        >
          <Badge color="error">
            <Tooltip title="Notificações">
              <IconButton size="large">
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
          </Badge>
          <Avatar
            src="https://avatars.githubusercontent.com/u/155776948?s=400&u=8d19ea65fef2e1d19b126536be7ad758c604971f&v=4"
            sx={{ width: 48, height: 48 }}
          />
          <Box>
            <Typography
              variant="caption"
              fontSize={18}
              fontWeight={600}
              display={"block"}
            >
              Christopher Lucas
            </Typography>
            <Typography variant="caption">Administrador</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
