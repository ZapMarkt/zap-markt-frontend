import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";

export function SharedProductsTable() {
  return (
    <Table className="border border-stone-200">
      <TableHeader className="font-bold border border-b-stone-200">
        <TableCell>Produto</TableCell>
        <TableCell>Código de barras</TableCell>
        <TableCell>Medida</TableCell>
        <TableCell>Ações</TableCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <img
              src="./image.png"
              width={40}
            />
            Leite Moça Integral 269ml
          </TableCell>
          <TableCell>192312482494</TableCell>
          <TableCell>Un</TableCell>
          <TableCell>
            <Menubar className="border-none rounded-full p-0 w-10 h-10">
              <MenubarMenu>
                <MenubarTrigger className="rounded-full w-10 h-10">
                  {/* <IoMdMore size={24} /> */}
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem className="flex items-center gap-3">
                    {/* <MdVisibility /> */}
                    Ver informações deste usuário
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
