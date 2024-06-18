import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/ProductService";
import { DataTable } from "../ui/data-table";
import { columns } from "./Columns";

export function SharedProductsTable() {
  const query = useQuery({
    queryKey: ["sharedProducts"],
    queryFn: productService.getSharedPorducts,
  });

  const data = query.data?.items ?? [];

  return (
    <DataTable
      columns={columns}
      data={data}
    />
  );
}
