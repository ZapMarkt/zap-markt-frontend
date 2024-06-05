import { Box, Typography } from '@mui/material';

const DrawerAdressDetails = () => {
  return (
    <Box
      padding={'12px 14px'}
      bgcolor={'#F2F2F2'}
      color={'#110B0A'}
      display={'flex'}
      flexDirection={'column'}
      borderRadius={'5px'}
      height={'105px'}
      boxSizing={'border-box'}
    >
      <Typography
        fontSize={24}
        fontWeight={600}
        lineHeight={1.2}
        marginBottom={'4px'}
      >
        Endereço de entrega
      </Typography>
      <Typography fontSize={20} fontWeight={400} lineHeight={1.2}>
        Av. Fernandes Lima, 2257 - Pinheiro , Maceió - AL
      </Typography>
      <Typography
        fontSize={20}
        fontWeight={300}
        lineHeight={1.2}
        color={'#5F7880'}
      >
        Ao lado do mercado do joão
      </Typography>
    </Box>
  );
};

export default DrawerAdressDetails;
