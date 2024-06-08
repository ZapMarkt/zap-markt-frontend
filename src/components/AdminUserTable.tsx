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
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import { useQuery } from "@tanstack/react-query";
import { adminService } from "../services/AdminService";

export function AdminUserTable() {
  const query = useQuery({ queryFn: adminService.getAll, queryKey: ["all-admins"] });

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
          to="/novo-usuario-administrador"
        >
          Novo usuário administrador
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Cargo</TableCell>
          </TableHead>
          <TableBody>
            {query.data?.map((userAdmin) => (
              <TableRow
                key={userAdmin.uuid}
                component={Link}
                to={`/usuario-administrador/configuracoes/${userAdmin.uuid}`}
              >
                <TableCell>{userAdmin.name}</TableCell>
                <TableCell>{userAdmin.email}</TableCell>
                <TableCell>{userAdmin.role.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
