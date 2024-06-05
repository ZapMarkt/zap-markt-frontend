import { Box, Typography } from '@mui/material';
import Visa from '../../../../assets/visa.svg';

const DrawerPaymentMethod = () => {
  return (
    <Box color={'##110B0A'}>
      <Typography
        fontSize={24}
        fontWeight={600}
        lineHeight={1.2}
        marginBottom={'10px'}
      >
        Forma de pagamento
      </Typography>
      <Box
        border={'1px solid #DADADA'}
        borderRadius={'5px'}
        bgcolor={'#FFFFFF'}
        padding={'10px 14px'}
      >
        <Box
          display={'flex'}
          justifyContent={'flex-start'}
          alignContent={'center'}
          gap={'6px'}
        >
          <img src={Visa} loading="lazy" width={24} />{' '}
          <Typography fontSize={20} fontWeight={500} lineHeight={1.2}>
            Debito - Visa
          </Typography>
        </Box>
        <Typography
          fontSize={18}
          fontWeight={300}
          lineHeight={1.2}
          color={'#5F7880'}
        >
          Pagamento na entrega
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerPaymentMethod;
