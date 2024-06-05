import '@fontsource/inter/500.css';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import Visa from '../../../assets/visa.svg';
import { orders } from '../../../data/orders';
import OrderDrawer from '../../../pages/pedidos/drawer/OrderDrawer';
import DrawerContent from '../../../pages/pedidos/drawer/components/DrawerContent';
import { Order } from '../../../types/Order';
import { formatCurrency } from '../../../utils/formatCurrency';
import { formatStatusIcons } from '../../../utils/formatOrderIcons';

interface OrdertableProps {
  status: string;
}

const tableHeadCell = [
  { label: 'Pedido' },
  { label: 'Nome do cliente' },
  { label: 'Endereço' },
  { label: 'Valor' },
  { label: 'Qtd.' },
  { label: 'Forma de Pagamento' },
  { label: 'Status' },
  { label: 'Ação' },
];

const statusColors: { [key: string]: string } = {
  Pendente: '#EEBE10',
  Aceito: '#2F7958',
  'Em separação': '#F2790B',
  'Rota de entrega': '#276EFF',
  Concluído: '#18BF5F',
  Cancelado: '#BF1818',
};

const OrderTable: React.FC<OrdertableProps> = ({ status }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function toggleDrawer(order: Order) {
    setSelectedOrder(order);
    setOpenDrawer(true);
  }

  // paginação
  const filteredOrders = orders.filter((order) => order.status === status);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const rowsPerPageOptions = [10, 20, 30, 40, 50];
  const pageinatedOrders = filteredOrders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );
  const totalNumberOfRows = filteredOrders.length;
  const items = rowsPerPage > 0 ? pageinatedOrders : orders;

  function handlePageChange(_ev: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(ev: ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(+ev.target.value);
    setPage(0);
  }

  const renderStatusCell = (status: string, order: Order) => {
    return (
      <TableCell onClick={() => toggleDrawer(order)}>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 500,
          }}
          style={{ color: statusColors[status] }}
        >
          {status}
        </Typography>
      </TableCell>
    );
  };

  return (
    <>
      <TableContainer
        sx={{
          maxHeight: '100%',
          padding: '0 18px',
          background: '#ECECEC',
          borderRadius: '10px',
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {tableHeadCell.map((cell, index) => (
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: '18px',
                    background: '#ECECEC',
                    padding: '14px 14px 12px 14px',
                    '&:last-child': {
                      textAlign: 'center',
                    },
                  }}
                  key={index}
                >
                  {cell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{ fontFamily: 'Inter, sans-serif', background: '#ECECEC' }}
          >
            {items
              .filter((order) => order.status === status)
              .map((order, index) => (
                <TableRow
                  key={index}
                  sx={{
                    color: '#110B0A',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    '&:hover': { background: '#DBDBDB' },
                  }}
                >
                  <TableCell
                    sx={{ fontSize: '18px', color: '#110B0A' }}
                    onClick={() => toggleDrawer(order)}
                  >
                    {order.order}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: '18px' }}
                    onClick={() => toggleDrawer(order)}
                  >
                    {order.name}{' '}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: '18px' }}
                    onClick={() => toggleDrawer(order)}
                  >
                    {order.adress}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: '18px' }}
                    onClick={() => toggleDrawer(order)}
                  >
                    {formatCurrency(order.valor)}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: '18px' }}
                    onClick={() => toggleDrawer(order)}
                  >
                    {order.quantidade}
                  </TableCell>
                  <TableCell onClick={() => toggleDrawer(order)}>
                    <Box sx={{ display: 'flex', gap: '6px' }}>
                      <img src={Visa} loading="lazy" width={24} />
                      <Typography>Debito - Visa</Typography>
                    </Box>
                  </TableCell>
                  {renderStatusCell(order.status, order)}
                  <TableCell
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {formatStatusIcons(order.status).icon}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter
            sx={{ position: 'sticky', bottom: 0, background: '#ECECEC' }}
          >
            <TableRow>
              <TablePagination
                page={page}
                count={totalNumberOfRows}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={rowsPerPageOptions}
                labelRowsPerPage="Linhas por página"
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <OrderDrawer
        openDrawer={openDrawer}
        closeDrawer={() => setOpenDrawer(false)}
        selectedOrder={selectedOrder}
      >
        <DrawerContent selectedOrder={selectedOrder} />
      </OrderDrawer>
    </>
  );
};

export default OrderTable;
