import { ColumnDef } from "@tanstack/react-table";
import { SharedProductActions } from "./SharedPorductActions";
import { SharedProduct } from "@/services/ProductService";

export const columns: ColumnDef<SharedProduct>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "barcode",
    header: "Código de barras",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => <SharedProductActions {...row.original} />,
  },
];
