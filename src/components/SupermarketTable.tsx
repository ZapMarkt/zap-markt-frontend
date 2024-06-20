import { formatCnpj } from "../utils/formatCnpj";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function SupermarketTable() {
  return (
    <Table className="border border-stone-200">
      <TableHeader className="font-bold border border-b-stone-200">
        <TableCell>CNPJ</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Plano</TableCell>
        <TableCell>Status</TableCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Avatar>
              <AvatarImage />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </TableCell>
          <TableCell>{formatCnpj("111111111111")}</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
