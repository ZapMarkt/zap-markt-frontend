import '@fontsource/inter/600.css';
import { AppBar, Box, Divider, Toolbar, Typography } from '@mui/material';
import Profile from './Profile';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Box>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          width: 'calc(100% - 110px)',
          background: '#fff',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            padding: '40px 30px 15px 27px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 600,
              fontSize: '38px',
              lineHeight: '46px',
              fontFamily: 'Inter, sans-serif',
              color: '#110B0A',
            }}
          >
            {title}
          </Typography>
          <Profile />
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
};

export default Header;
