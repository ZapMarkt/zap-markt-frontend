import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Tomate from '../../../../../assets/tomate.jpeg';

interface CancelProductModalProps {
  open: boolean;
  onClose: () => void;
}

const CancelProductModal: React.FC<CancelProductModalProps> = ({
  open,
  onClose,
}) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCancelOrder = () => {
    // TODO: Adicionar requisição para cancelamento do produto
    onClose();
    handleOpenSnackbar();
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
          width={596}
          marginBottom={'4px'}
          padding={'24px 24px 0 24px'}
          id="alert-dialog-title"
          boxSizing={'border-box'}
        >
          Cancelar produto
        </DialogTitle>
        <DialogContent sx={{ paddingBottom: '24px', width: '548px' }}>
          <DialogContentText
            id="alert-dialog-description"
            fontSize={18}
            color={'#5F7880'}
            marginBottom={'24px'}
          >
            Você tem certeza que deseja cancelar esse produto? Está ação será
            irreversível.
          </DialogContentText>
          <Box
            borderRadius={'5px'}
            border={'1px solid #2F79584D'}
            padding={'10px 15px'}
            display={'flex'}
            gap={'6px'}
            alignItems={'center'}
          >
            <Box
              width={60}
              height={60}
              borderRadius={'5px'}
              bgcolor={'#FFFFFF'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <img src={Tomate} alt="Feijão Kikaldo Preto" height={'100%'} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
              <Typography
                color={'#110B0A'}
                fontSize={'20px'}
                lineHeight={1.2}
                fontWeight={500}
              >
                Tomate
              </Typography>
              <Typography
                color={'primary'}
                fontSize={'18px'}
                lineHeight={1.2}
                fontWeight={500}
              >
                R$ 8,70
              </Typography>
            </Box>
            <Typography
              color={'#110B0A'}
              fontSize={'20px'}
              lineHeight={1.2}
              fontWeight={500}
              marginLeft={'auto'}
            >
              1,200 kg
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            gap: '20px',
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
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' center',
          }}
          onClose={handleCloseSnackbar}
        >
          Produto cancelado com sucesso!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CancelProductModal;
