import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { DataTable } from "../ui/data-table";
import { columns } from "./Columns";
import { supermarketService } from "@/services/SupermarketService";
import { usePagination } from "@/hooks/usePagination";

export function SupermarketsTable() {
  const { pagination, setPagination } = usePagination();

  const query = useQuery({
    queryKey: ["supermarkets", pagination],
    queryFn: () => supermarketService.getSupermarkets(pagination),
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
