import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { formatCellPhone } from "../utils/formatCellPhone";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";

export function AdminUserTable() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginTop={12.5}
        marginBottom={3.75}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Pesquisar por usuários administradores"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<PeopleIcon />}
          component={Link}
          to="/supermercados/dados-cadastrais"
        >
          Novo usuário
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Celular</TableCell>
            <TableCell>Cargo</TableCell>
          </TableHead>
          <TableBody>
            <TableRow
              component={Link}
              to="/usuario-administrador/configuracoes/1"
            >
              <TableCell>Christofher Lucas</TableCell>
              <TableCell>christofher@gmail.com</TableCell>
              <TableCell>{formatCellPhone("8291485912")}</TableCell>
              <TableCell>Administrador</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
