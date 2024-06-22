import { formatCellPhone } from "../utils/formatCellPhone";
import { formatCpf } from "../utils/formatCpf";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";

export function UsersTable() {
  return (
    <Table className="border border-stone-200">
      <TableHeader className="font-bold border border-b-stone-200">
        <TableCell>Nome</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Celular</TableCell>
        <TableCell>CPF</TableCell>
        <TableCell>Status</TableCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Christofher Lucas</TableCell>
          <TableCell>christofher@gmail.com</TableCell>
          <TableCell>{formatCellPhone("8291485912")}</TableCell>
          <TableCell>{formatCpf("15022207419")}</TableCell>
          <TableCell>Ativo</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
