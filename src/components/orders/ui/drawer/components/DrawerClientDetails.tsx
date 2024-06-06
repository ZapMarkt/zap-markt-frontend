import { Box, Typography } from '@mui/material';

const DrawerClientDetails = () => {
  return (
    <Box
      padding={'12px 14px'}
      bgcolor={'#F2F2F2'}
      color={'#110B0A'}
      display={'flex'}
      flexDirection={'column'}
      gap={'4px'}
      borderRadius={'5px'}
      height={'81px'}
      boxSizing={'border-box'}
    >
      <Typography fontSize={24} fontWeight={600} lineHeight={1.2}>
        João Pedro Ferreira
      </Typography>
      <Box
        display={'flex'}
        gap={'8px'}
        justifyContent={'flex-start'}
        alignItems={'center'}
      >
        <Typography fontSize={20} fontWeight={400} lineHeight={1.2}>
          (82) 99825-1560
        </Typography>
        <Box
          height={7}
          width={7}
          bgcolor={'primary.main'}
          borderRadius={'50%'}
        />
        <Typography fontSize={20} fontWeight={400} lineHeight={1.2}>
          CPF: 999.999.999-99
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerClientDetails;
