import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { Order } from '../../../../../types/Order';

interface DrawerHeaderProps {
  onClick: () => void;
  selectedOrder: Order | null;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  onClick,
  selectedOrder,
}) => {
  return (
    <>
      <Box
        display={'flex'}
        alignItems={'flex-start'}
        justifyContent={'center'}
        gap={'10px'}
        padding={'40px 30px 14px 30px'}
      >
        <IconButton
          onClick={onClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: '49px',
          }}
        >
          <ArrowBackIcon
            sx={{
              color: 'primary.main',
              width: '36px',
              height: '36px',
              margin: 'auto 0',
            }}
          />
        </IconButton>
        <Typography
          variant="h1"
          fontSize={38}
          color={'#110B0A'}
          fontWeight={600}
          maxHeight={47}
          lineHeight={1.2894736842}
          sx={{ margin: 'auto 0' }}
        >
          {selectedOrder?.order}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            marginLeft: 'auto',
            padding: '9px 14px',
            display: 'flex',
            gap: '16px',
            maxHeight: '49px',
            borderRadius: '5px',
            border: '1.5px solid primary',
            color: 'primary',
            '&:hover': {
              borderColor: 'primary',
            },
          }}
        >
          <PrintIcon sx={{ width: '20px', height: '20px' }} />
          <Typography
            fontSize={'1.25rem'}
            fontWeight={500}
            textTransform={'initial'}
          >
            Imprimir
          </Typography>
        </Button>
      </Box>
      <Divider />
    </>
  );
};

export default DrawerHeader;
