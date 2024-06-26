import { Box, Button, Divider } from '@mui/material';
import { useState } from 'react';
import CancelOrderModal from './CancelOrderModal';

const DrawerActionButtons = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Divider />
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        gap={'24px'}
        padding={'20px 30px 35px 30px'}
      >
        <Button onClick={handleOpen} variant="error" size="lg" fullWidth>
          Cancelar pedido
        </Button>
        <CancelOrderModal open={open} onClose={handleClose} />
        <Button variant="primary" size="lg" fullWidth>
          Aceitar
        </Button>
      </Box>
    </Box>
  );
};

export default DrawerActionButtons;
