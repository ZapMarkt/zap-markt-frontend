import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { adminService } from "../services/AdminService";
import { IoSearch } from "react-icons/io5";
import { Button } from "./Button";
import { IoMdPeople } from "react-icons/io";
import { TextField } from "./TextField";

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
          placeholder="Buscar por produtos"
          endIcon={() => <IoSearch size={24} />}
        />
        <Link to="/novo-usuario-administrador">
          <Button startIcon={() => <IoMdPeople size={24} />}>Novo usuário administrador</Button>
        </Link>
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
