import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

type LayoutProps = {
  children: ReactNode;
};

const links = [
  {
    name: "Dasboard",
    icon: <HomeIcon sx={{ color: "#a5a5a5" }} />,
  },
  {
    name: "Supermercados",
    icon: <StoreIcon sx={{ color: "#a5a5a5" }} />,
  },
  {
    name: "Usuários",
    icon: <PeopleIcon sx={{ color: "#a5a5a5" }} />,
  },
  {
    name: "Configurações",
    icon: <SettingsIcon sx={{ color: "#a5a5a5" }} />,
  },
  {
    name: "Sair da conta",
    icon: <LogoutIcon sx={{ color: "#a5a5a5" }} />,
  },
];

const drawerWidth = 340;

export function Layout({ children }: LayoutProps) {
  return (
    <Box display={"flex"}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ width: drawerWidth }}
        PaperProps={{
          sx: {
            color: "#a5a5a5",
            backgroundColor: "#110b0a",
          },
        }}
      >
        <Box padding={3.75}>
          <img
            src="logo.png"
            alt="logo"
            width={280}
          />
        </Box>
        <List disablePadding>
          {links.map((link) => (
            <ListItem
              disablePadding
              sx={{ width: drawerWidth }}
            >
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText>{link.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box flexGrow={1}>
        <AppBar
          position="fixed"
          color="default"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 3.75,
          }}
        >
          <Toolbar>
            <Typography
              variant="h1"
              fontSize={38}
              fontWeight={600}
            >
              Dashboard
            </Typography>
          </Toolbar>
          <Box
            display={"flex"}
            gap={1}
          >
            <IconButton size="large">
              <Badge
                badgeContent={4}
                color="error"
              >
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <Box
              display={"flex"}
              gap={1}
            >
              <Avatar
                alt="Christopher Lucas"
                sx={{ width: 48, height: 48 }}
              />
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600 }}
                >
                  Christopher Lucas
                </Typography>
                <Typography variant="body2">Administrador</Typography>
              </Box>
            </Box>
          </Box>
        </AppBar>
        {children}
      </Box>
    </Box>
  );
}
