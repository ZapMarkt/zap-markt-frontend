import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { formatCellPhone } from "../utils/formatCellPhone";
import { formatCpf } from "../utils/formatCpf";
import { IoSearch } from "react-icons/io5";
import { TextField } from "./TextField";

export function UsersTable() {
  return (
    <>
      <TextField
        placeholder="Buscar por produtos"
        endIcon={() => <IoSearch size={24} />}
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
