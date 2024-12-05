import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { productService } from "@/services/ProductService";
import { DataTable } from "../ui/data-table";
import { columns } from "./Columns";
import { usePagination } from "@/hooks/usePagination";

export function SharedProductsTable() {
  const { pagination, setPagination } = usePagination();
  const query = useQuery({
    queryKey: ["sharedProducts", pagination],
    queryFn: () => productService.getSharedPorducts(pagination),
    placeholderData: keepPreviousData,
  });

  const data = query.data?.items ?? [];
  const pageCount = query.data?.totalPages;

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination={pagination}
      onPaginationChange={setPagination}
      pageCount={pageCount}
    />
  );
}
