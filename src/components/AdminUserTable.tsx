import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { adminService } from "../services/AdminService";
import { Button } from "./ui/button";
import { BsPeopleFill } from "react-icons/bs";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import { IoMdMore } from "react-icons/io";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { useCurrentUserStore } from "@/stores/CurrentUserStore";
import { Toaster, toast } from "sonner";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { Skeleton } from "./ui/skeleton";

export function AdminUserTable() {
  const query = useQuery({
    queryFn: adminService.getAll,
    queryKey: ["all-admins"],
  });
  const currentUser = useCurrentUserStore((state) => state.currentUser);
  const mutation = useMutation({ mutationFn: adminService.removeAdmin });

  const handleRemoveUser = async (userUUID: string) => {
    await mutation.mutateAsync(userUUID, {
      onSuccess: () => {
        query.refetch();
        toast("Usuário removido", {
          duration: 5000,
          position: "top-right",
          className: "bg-green-600 text-white",
        });
      },
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mt-28 mb-9">
        <Input
          className="w-[414px]"
          placeholder="Buscar por usuários"
        />
        <Link to="/novo-usuario-administrador">
          <Button className="gap-3">
            <BsPeopleFill />
            Novo usuário administrador
          </Button>
        </Link>
      </div>
      <Table className="border border-stone-200">
        <TableHeader className="font-bold border border-b-stone-200">
          <TableCell>Nome</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Cargo</TableCell>
        </TableHeader>
        <TableBody>
          {query.isPending ? (
            <TableRow>
              <TableCell>
                <Skeleton className="w-full h-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-full h-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-full h-4" />
              </TableCell>
            </TableRow>
          ) : (
            query.data?.map((user) => (
              <TableRow key={user.uuid}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="flex items-center gap-7">
                  {user.role.name}
                  <Menubar className="border-none rounded-full p-0 w-10 h-10">
                    <MenubarMenu>
                      <MenubarTrigger className="rounded-full w-10 h-10">
                        <IoMdMore size={24} />
                      </MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem className="flex items-center gap-3">
                          <MdVisibility />
                          Ver informações deste usuário
                        </MenubarItem>
                        {currentUser.role.hasTotalPermission && currentUser.uuid !== user.uuid && (
                          <MenubarItem
                            className="flex items-center gap-3"
                            onClick={() => handleRemoveUser(user.uuid)}
                          >
                            <FaRegTrashCan />
                            Remover este usuário
                          </MenubarItem>
                        )}
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Toaster />
    </>
  );
}
