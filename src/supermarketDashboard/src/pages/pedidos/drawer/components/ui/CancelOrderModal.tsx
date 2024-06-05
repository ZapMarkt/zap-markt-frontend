import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface CancelOrderModalProps {
  open: boolean;
  onClose: () => void;
}

const CancelOrderModal: React.FC<CancelOrderModalProps> = ({
  open,
  onClose,
}) => {
  const handleCancelOrder = () => {
    // TODO: Adicionar requisição para cancelamento do pedido
    alert('Produto cancelado');
    onClose();
  };

  return (
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
        <Button variant="heavy" fullWidth onClick={onClose} size="lg">
          Voltar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelOrderModal;
