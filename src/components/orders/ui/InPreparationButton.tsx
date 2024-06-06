import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Button } from '@mui/material';

const InPreparationButton = () => {
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
      <LocalShippingIcon sx={{ width: '18px', color: '#FFFFFF' }} />
    </Button>
  );
};

export default InPreparationButton;
