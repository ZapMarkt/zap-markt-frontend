import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CancelOrderModalProps {
  open: boolean;
  onClose: () => void;
}

const CancelOrderModal: React.FC<CancelOrderModalProps> = ({
  open,
  onClose,
}) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleCancelOrder = () => {
    // TODO: Adicionar requisição para cancelamento do pedido

    onClose();
    handleOpenSnackbar();
    setTimeout(() => {
      navigate(0);
    }, 2000);
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          fontSize={24}
          fontWeight={600}
          maxWidth={596}
          marginBottom={'4px'}
          padding={'24px 24px 0 24px'}
          id="alert-dialog-title"
        >
          Cancelar pedido #856-963
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            fontSize={18}
            color={'#5F7880'}
          >
            Você tem certeza que deseja cancelar esse pedido? Está ação será
            irreversível.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '0 24px 24px 24px',
          }}
        >
          <Button
            size="lg"
            color="error"
            variant="contained"
            fullWidth
            onClick={handleCancelOrder}
          >
            Cancelar
          </Button>
          <Button variant="primary" fullWidth onClick={onClose} size="lg">
            Voltar
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{
            width: '100%',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' center',
          }}
          onClose={handleCloseSnackbar}
        >
          Pedido cancelado com sucesso!
        </Alert>
      </Snackbar>
      ;
    </>
  );
};

export default CancelOrderModal;
