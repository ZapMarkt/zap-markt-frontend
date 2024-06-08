import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { ReactNode } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";
import logo from "../../public/logo.png";
import { useMutation } from "@tanstack/react-query";
import { adminService } from "../services/AdminService";
import { useUserSessionStore } from "../stores/userSessionStore";

type LayoutProps = {
  children: ReactNode;
};

const menuLinks = [
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
    primary: "Produtos compartilhados",
    to: "/produtos-compartilhados",
    icon: <ShoppingBasketIcon />,
  },
];

export function Layout({ children }: LayoutProps) {
  const mutation = useMutation({ mutationFn: adminService.signOut });
  const userSession = useUserSessionStore((state) => state.userSession);

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
            src={logo}
            loading="lazy"
            width={280}
          />
        </Box>
        <List
          sx={{ width: 340 }}
          disablePadding
        >
          <ListSubheader sx={{ backgroundColor: grey[900], color: grey[500], fontSize: 18 }}>
            MENU
          </ListSubheader>
          {menuLinks.map((link, index) => (
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
          <ListSubheader sx={{ backgroundColor: grey[900], color: grey[500], fontSize: 18 }}>
            SISTEMA
          </ListSubheader>
          <ListItem
            button
            component={NavLink}
            to="/configuracoes"
          >
            <ListItemIcon color="gray">
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItem>
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
