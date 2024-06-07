import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';

const ActionsButtons = () => {
  return (
    <Box display={'flex'} gap={'18px'}>
      <Button
        variant="contained"
        color="error"
        sx={{
          padding: '7px',
          minWidth: '32px',
          height: '32px',
          borderRadius: '50%',
        }}
      >
        <CloseIcon sx={{ width: '18px', color: '#FFFFFF', fontWeight: 800 }} />
      </Button>
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
    </Box>
  );
};

export default ActionsButtons;
