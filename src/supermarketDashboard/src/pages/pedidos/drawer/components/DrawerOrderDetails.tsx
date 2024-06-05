import { Box, Typography } from '@mui/material';
import { Order } from '../../../../types/Order';
import { formatStatusOrder } from '../../../../utils/formatStatusOrder';

interface DrawerOrderDetailsProps {
  selectedOrder: Order;
}

const DrawerOrderDetails: React.FC<DrawerOrderDetailsProps> = ({
  selectedOrder,
}) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      gap={'10px'}
    >
      <Box
        padding={'10px 12px'}
        width={194}
        borderRadius={'5px'}
        bgcolor={formatStatusOrder(selectedOrder.status)}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        maxHeight={'44px'}
      >
        <Typography
          fontSize={20}
          fontWeight={500}
          color={'#ffffff'}
          lineHeight={1.2}
        >
          {selectedOrder.status}
        </Typography>
      </Box>
      <Box height={6} width={6} bgcolor={'#110B0A'} borderRadius={'50%'} />
      <Box
        padding={'10px 12px'}
        width={157}
        borderRadius={'5px'}
        bgcolor={'transparent'}
        border={'1.5px solid rgba(47, 121, 88, 0.30)'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        maxHeight={'44px'}
      >
        <Typography
          fontSize={20}
          fontWeight={500}
          color={'#110B0A'}
          lineHeight={1.2}
        >
          Feito ás 12:53
        </Typography>
      </Box>
      <Box height={6} width={6} bgcolor={'#110B0A'} borderRadius={'50%'} />
      <Box
        padding={'10px 12px'}
        width={229}
        borderRadius={'5px'}
        bgcolor={'transparent'}
        border={'1.5px solid rgba(47, 121, 88, 0.30)'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        maxHeight={'44px'}
      >
        <Typography
          fontSize={20}
          fontWeight={500}
          color={'#110B0A'}
          lineHeight={1.2}
        >
          Entregar até as 14:00
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerOrderDetails;
