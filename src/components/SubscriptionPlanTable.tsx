import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Tooltip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { formatCurrency } from "../utils/formatCurrency";
import dayjs from "dayjs";

export function SubscriptonPlanTable() {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);

  function handleCloseMenu() {
    setAnchor(null);
  }

  return (
    <TableContainer
      sx={{
        marginTop: 3.75,
      }}
    >
      <Table>
        <TableHead>
          <TableCell>Plano de assinatura</TableCell>
          <TableCell>Data de envio</TableCell>
          <TableCell>Data de vencimento</TableCell>
          <TableCell>Valor</TableCell>
          <TableCell>Status</TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Premium</TableCell>
            <TableCell>{dayjs().format("DD/MM/YYYY")}</TableCell>
            <TableCell>{dayjs().format("DD/MM/YYYY")}</TableCell>
            <TableCell>{formatCurrency(1)}</TableCell>
            <TableCell>
              <Chip
                label="Aberto"
                color="warning"
                size="small"
              />
            </TableCell>
            <TableCell>
              <Tooltip title="Ações">
                <IconButton onClick={(ev) => setAnchor(ev.currentTarget)}>
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
              <Menu
                open={open}
                anchorEl={anchor}
                onClose={handleCloseMenu}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AttachMoneyIcon />
                  </ListItemIcon>
                  <ListItemText>Mudar para pago</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText>Deletar cobrança</ListItemText>
                </MenuItem>
              </Menu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
