import { ChangeEvent, useState } from "react";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { formatCnpj } from "../utils/formatCnpj";
import SearchIcon from "@mui/icons-material/Search";
import { Supermarket } from "../types/Supermarket";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export function SupermarketTable() {
  const [supermarkets, setSupermarkets] = useState<Supermarket[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const rowsPerPageOptions = [10, 20, 30, 40, 50];
  const pageinatedSupermarkets = supermarkets.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const totalNumberOfRows = supermarkets.length;
  const items = rowsPerPage > 0 ? pageinatedSupermarkets : supermarkets;

  function handlePageChange(ev: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(ev: ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(+ev.target.value);
    setPage(0);
  }

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
          placeholder="Pesquisar por mercados"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
        <Link to="/supermercados/dados-cadastrais">
          <Button startIcon={() => <RiShoppingBasket2Fill size={24} />}>Novo supermercado</Button>
        </Link>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Supermercado</TableCell>
            <TableCell>CNPJ</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Plano</TableCell>
            <TableCell>Status</TableCell>
          </TableHead>
          <TableBody>
            {items.map((supermarket) => (
              <TableRow key={supermarket.id}>
                <TableCell sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar src="image.png" />
                  {supermarket.name}
                </TableCell>
                <TableCell>{formatCnpj(supermarket.cnpj)}</TableCell>
                <TableCell>{supermarket.email}</TableCell>
                <TableCell>{supermarket.plan}</TableCell>
                <TableCell>{supermarket.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              page={page}
              count={totalNumberOfRows}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={rowsPerPageOptions}
              labelRowsPerPage="Linhas por página"
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
