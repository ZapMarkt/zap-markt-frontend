import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { formatCellPhone } from "../utils/formatCellPhone";
import { formatCpf } from "../utils/formatCpf";

export function UsersTable() {
  return (
    <>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Pesquisar por mercados"
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        sx={{
          marginTop: 12.5,
          marginBottom: 3.75,
        }}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Celular</TableCell>
            <TableCell>CPF</TableCell>
            <TableCell>Status</TableCell>
          </TableHead>
          <TableBody>
            <TableRow
              component={Link}
              to="/usuario/1"
            >
              <TableCell>Christofher Lucas</TableCell>
              <TableCell>christofher@gmail.com</TableCell>
              <TableCell>{formatCellPhone("8291485912")}</TableCell>
              <TableCell>{formatCpf("15022207419")}</TableCell>
              <TableCell>
                <Chip
                  variant="filled"
                  color="success"
                  size="small"
                  label="Ativo"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
