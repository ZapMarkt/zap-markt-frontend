import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeTemporary = () => {
  return (
    <Box display={'flex'} padding={'20px'} gap={'20px'}>
      <Link to={'/dashboardadmin'}>Dashboard Administração</Link>
      <Link to={'/dashboarduser'}>Dashboard Mercados</Link>
    </Box>
  );
};

export default HomeTemporary;
