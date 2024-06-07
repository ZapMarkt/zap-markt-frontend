import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';

const AcceptedButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        padding: '7px',
        minWidth: '32px',
        height: '32px',
        borderRadius: '50%',
      }}
    >
      <ShoppingCartIcon sx={{ width: '18px', color: '#FFFFFF' }} />
    </Button>
  );
};

export default AcceptedButton;
