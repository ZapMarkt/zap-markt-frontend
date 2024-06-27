import { ISupermarket } from "@/services/SupermarketService";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ISupermarket>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Supermercado",
  },
  {
    id: "cnpj",
    accessorKey: "cnpj",
    header: "CNPJ",
  },
  {
    id: "email",
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "plan",
    accessorKey: "plan",
    header: "Plano",
    cell: () => <span>Premium</span>,
  },
  {
    id: "status",
    accessorKey: "inactive",
    header: "Status",
    cell: ({ cell }) => {
      return !cell.getValue() ? (
        <span className="text-amber-500">Ativo</span>
      ) : (
        <span className="text-rose-600">Suspenso</span>
      );
    },
  },
];
