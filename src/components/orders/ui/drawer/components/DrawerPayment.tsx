import { Box, Typography } from '@mui/material';

const DrawerPayment = () => {
  return (
    <Box
      padding={'12px 14px'}
      bgcolor={'#F2F2F2'}
      color={'#110B0A'}
      display={'flex'}
      flexDirection={'column'}
      gap={'4px'}
      borderRadius={'5px'}
      boxSizing={'border-box'}
    >
      <Typography
        fontSize={24}
        fontWeight={600}
        lineHeight={1.2}
        marginBottom={'10px'}
      >
        Pagamento
      </Typography>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'100%'}
        marginBottom={'6px'}
      >
        <Typography fontSize={20} fontWeight={400} lineHeight={1.2}>
          Subtotal
        </Typography>
        <Typography fontSize={20} fontWeight={400} lineHeight={1.2}>
          R$ 138,86
        </Typography>
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'100%'}
        marginBottom={'12px'}
      >
        <Typography fontSize={20} fontWeight={400} lineHeight={1.2}>
          Frete
        </Typography>
        <Typography fontSize={20} fontWeight={400} lineHeight={1.2}>
          R$ 12,00
        </Typography>
      </Box>{' '}
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'100%'}
      >
        <Typography fontSize={20} fontWeight={600} lineHeight={1.2}>
          Total
        </Typography>
        <Typography fontSize={20} fontWeight={600} lineHeight={1.2}>
          R$ 150,86
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerPayment;
