import {
  Chip,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export function SharedProductsTable() {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);

  function handleCloseMenu() {
    setAnchor(null);
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableCell>Produto</TableCell>
          <TableCell>Código de barras</TableCell>
          <TableCell>Medida</TableCell>
          <TableCell>Ações</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.75,
              }}
            >
              <img
                src="./image.png"
                width={40}
              />
              Leite Moça Integral 269ml
            </TableCell>
            <TableCell>192312482494</TableCell>
            <TableCell>
              <Chip
                label="Un"
                variant="filled"
                size="small"
                color="warning"
              />
            </TableCell>
            <TableCell>
              <Tooltip title="Desativar visibilidade">
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Mais opções">
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
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText>Editar</ListItemText>
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
