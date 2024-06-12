import { Box } from '@mui/material';
import DataTableSearch from '../supermarket/Orders/components/Table/DataTableSearch';

interface OrderPanelProps {
  value: string;
  onChange: (value: string) => void;
}

const OrderPanel: React.FC<OrderPanelProps> = ({ value, onChange }) => {
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        marginBottom="24px"
      >
        <DataTableSearch value={value} onChange={onChange} />
      </Box>
    </>
  );
};

export default OrderPanel;
