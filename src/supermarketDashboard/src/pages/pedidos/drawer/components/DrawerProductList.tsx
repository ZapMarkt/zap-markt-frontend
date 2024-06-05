import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import FeijaoKikaldoPreto from '../../../../assets/feijao-preto-kicaldo.jpeg';
import Tomate from '../../../../assets/tomate.jpeg';
import { Order } from '../../../../types/Order';
import { formatCurrency } from '../../../../utils/formatCurrency';
import ChangeQuantityModal from './ui/ChangeQuantityModal';

interface DrawerProductListProps {
  selectedOrder: Order | null;
}

const dataProductList = [
  {
    id: 1,
    nome: 'Feijão Preto Kicaldo',
    valor: 13.7,
    img: FeijaoKikaldoPreto,
    unity: 2,
  },
  { id: 2, nome: 'Tomate', valor: 8.7, img: Tomate, unity: 1200 },
];

const DrawerProductList: React.FC<DrawerProductListProps> = ({
  selectedOrder,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const statusDisabled =
    selectedOrder?.status === 'Pendente' ||
    selectedOrder?.status === 'Rota de entrega' ||
    selectedOrder?.status === 'Concluído' ||
    selectedOrder?.status === 'Cancelado';

  const [openModalQuantify, setOpenModalQuantify] = useState(false);
  const handleOpenModalQuantify = () => {
    setOpenModalQuantify(true);
    setAnchorEl(null); // Fecha o menu ao abrir o modal
  };
  const handleCloseModalQuantify = () => setOpenModalQuantify(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {dataProductList.map((product) => (
        <Box
          key={product.id}
          padding={'10px 0'}
          display={'flex'}
          gap={'8px'}
          alignItems={'center'}
          borderBottom={'thin solid rgba(0, 0, 0, 0.12)'}
        >
          <Box
            width={98}
            height={98}
            borderRadius={'5px'}
            bgcolor={'#FFFFFF'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img src={product.img} alt="Feijão Kikaldo Preto" height={'100%'} />
          </Box>
          <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
            <Typography
              color={'#110B0A'}
              fontSize={'20px'}
              lineHeight={1.2}
              fontWeight={500}
            >
              {product.nome}
            </Typography>
            <Typography
              color={'primary'}
              fontSize={'18px'}
              lineHeight={1.2}
              fontWeight={500}
            >
              {formatCurrency(product.valor)}
            </Typography>
          </Box>
          <Typography
            color={'#110B0A'}
            fontSize={'20px'}
            lineHeight={1.2}
            fontWeight={500}
            marginLeft={'auto'}
          >
            {product.unity}
          </Typography>
          <Box>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              disabled={statusDisabled}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{ left: '-23px' }}
            >
              <MenuItem
                sx={{
                  padding: '10px',
                  display: ' flex',
                  gap: '10px',
                  color: '#909090',
                }}
                onClick={handleOpenModalQuantify}
              >
                <LooksOneOutlinedIcon />
                <Typography
                  color={'#909090'}
                  fontSize={'18px'}
                  fontWeight={400}
                >
                  Alterar quantidade
                </Typography>
              </MenuItem>
              <MenuItem
                sx={{
                  padding: '10px',
                  display: ' flex',
                  gap: '10px',
                  color: '#909090',
                }}
                onClick={() => console.log(product.id)}
              >
                <DeleteForeverOutlinedIcon />
                <Typography
                  color={'#909090'}
                  fontSize={'18px'}
                  fontWeight={400}
                >
                  Cancela produto
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      ))}

      <ChangeQuantityModal
        open={openModalQuantify}
        onClose={handleCloseModalQuantify}
      />
    </Box>
  );
};

export default DrawerProductList;
