import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import React from 'react';

interface ChangeQuantityModalProps {
  open: boolean;
  onClose: () => void;
}

const ChangeQuantityModal: React.FC<ChangeQuantityModalProps> = ({
  open,
  onClose,
}) => {
  const handleEditProductQuantify = () => {
    // TODO: Adicionar requisição para edição de quantidade
    alert('Quantidade editada');
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
        Edição de quantidade
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          fontSize={18}
          color={'#5F7880'}
          marginBottom={'24px'}
        >
          Edite a quantidade de um produto sem precisa exclui-lo.
        </DialogContentText>
        <Box component="form" display={'flex'} gap={'20px'}>
          <TextField
            required
            id="outlined-required"
            label="Preço total"
            defaultValue={'R$ 8,70'}
            disabled
            sx={{
              background: '#D9D9D9',
              border: '1px solid #5F7880',
              borderRadius: '5px',
              maxWidth: '264px',
              '& input': {
                background: '#D9D9D9',
                color: 'primary',
                fontWeight: 500,
                fontSize: '18px',
                WebkitTextFillColor: 'rgba(17, 11, 10, 0.65) !important',
              },
              '& .MuiFormLabel-root': {
                color: 'rgba(17, 11, 10, 0.65)',
                fontWeight: 600,
              },
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Quantidade"
            defaultValue={'1,200 Kg'}
            sx={{
              background: '#FFF',
              border: '1px solid #5F7880',
              borderRadius: '5px',
              maxWidth: '264px',
              '& input': {
                color: 'primary.contrastText',
                fontWeight: 500,
                fontSize: '18px',
              },
              '& .MuiFormLabel-root': {
                color: 'primary.contrastText',
                fontWeight: 600,
                background: '#FFF',
              },
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '20px',
          padding: '0 24px 24px 24px',
        }}
      >
        <Button size="lg" variant="secondary" fullWidth onClick={onClose}>
          Voltar
        </Button>
        <Button
          variant="primary"
          fullWidth
          size="lg"
          onClick={handleEditProductQuantify}
        >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangeQuantityModal;
