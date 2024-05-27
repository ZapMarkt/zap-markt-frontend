import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ReactNode } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";

type LayoutProps = {
  children: ReactNode;
};

const links = [
  {
    primary: "Dashboard",
    to: "/",
    icon: <DashboardIcon />,
  },

  {
    primary: "Supermercados",
    to: "/supermercados",
    icon: <StoreIcon />,
  },
  {
    primary: "Usuários",
    to: "/usuarios",
    icon: <PeopleIcon />,
  },
  {
    primary: "Configurações",
    to: "/configuracoes",
    icon: <SettingsIcon />,
  },
];

export function Layout({ children }: LayoutProps) {
  return (
    <Box display={"flex"}>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{ width: 340 }}
        PaperProps={{
          sx: {
            backgroundColor: grey[900],
            color: grey[500],
          },
        }}
      >
        <Box
          marginBottom={5.5}
          marginInline={3.75}
          marginTop={5}
        >
          <img
            src="./logo.png"
            loading="lazy"
            width={280}
          />
        </Box>
        <List
          sx={{ width: 340 }}
          disablePadding
        >
          {links.map((link, index) => (
            <ListItem
              key={index}
              button
              component={NavLink}
              to={link.to}
            >
              <ListItemIcon color="gray">{link.icon}</ListItemIcon>
              <ListItemText primary={link.primary} />
            </ListItem>
          ))}
          <ListItem button>
            <ListItemIcon color="gray">
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Sair da conta</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Box
        flex={1}
        padding={3.75}
      >
        {children}
      </Box>
    </Box>
  );
}
