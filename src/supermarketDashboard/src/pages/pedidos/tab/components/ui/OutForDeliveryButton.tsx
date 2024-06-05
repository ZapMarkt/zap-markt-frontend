import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';

const OutForDeliveryButton = () => {
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
      <CheckIcon sx={{ width: '18px', color: '#FFFFFF' }} />
    </Button>
  );
};

export default OutForDeliveryButton;
