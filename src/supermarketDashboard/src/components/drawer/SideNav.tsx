import '@fontsource/inter/600.css';
import DvrIcon from '@mui/icons-material/Dvr';
import HomeIcon from '@mui/icons-material/Home';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const ListItemSX = (isActive: boolean) => ({
  '&': {
    borderColor: isActive ? 'secondary.main' : 'transparent',
    background: isActive ? 'secondary.contrastText' : 'transparent',
  },
  '& .MuiSvgIcon-root': {
    color: isActive ? 'secondary.main' : '#110B0A',
    transition: 'color 0.1s',
  },
});

const SideNav: React.FC = () => {
  const pathname = useLocation().pathname;

  const menuLinks = [
    {
      primary: 'Dashboard',
      to: '/',
      icon: <HomeIcon sx={{ height: 32, width: 32, color: '#110B0A' }} />,
      active: pathname === '/',
    },

    {
      primary: 'Painel de pedidos',
      to: '/pedidos',
      icon: <DvrIcon sx={{ height: 32, width: 32, color: '#110B0A' }} />,
      active: pathname.includes('/pedidos'),
    },

    {
      primary: 'Produtos',
      to: '/produtos',
      icon: (
        <LocalGroceryStoreIcon
          sx={{ height: 32, width: 32, color: '#110B0A' }}
        />
      ),
      active: pathname.includes('/produtos'),
    },
  ];

  return (
    <Box>
      <Drawer variant="permanent" anchor="left">
        <Toolbar
          sx={{
            padding: '40px 30px 13px 30px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src={Logo} loading="lazy" width={54.988} />
        </Toolbar>
        <Divider sx={{ mb: '16px' }} />
        <List
          disablePadding
          sx={{
            width: 109,
            gap: '6px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {menuLinks.map((link) => (
            <ListItemButton
              key={link.primary}
              component={NavLink}
              to={link.to}
              sx={ListItemSX(link.active)}
            >
              <Tooltip title={link.primary} arrow placement="right">
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    px: '39px',
                    py: '20px',
                  }}
                >
                  {link.icon}
                </ListItemIcon>
              </Tooltip>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideNav;
