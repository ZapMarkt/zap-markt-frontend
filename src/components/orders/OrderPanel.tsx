import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField } from '@mui/material';

const OrderPanel = () => {
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        marginBottom="24px"
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Pesquisar por pedidos"
          sx={{
            '& input': {
              height: '58px',
              width: '414px',
              boxSizing: 'border-box',
            },
          }}
          InputProps={{
            endAdornment: <SearchIcon color="action" />,
          }}
        />
      </Box>
    </>
  );
};

export default OrderPanel;
