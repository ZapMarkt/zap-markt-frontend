import { useState } from "react";

export function usePagination() {
  const [pagination, setPagination] = useState({ pageSize: 10, pageIndex: 0 });

  return {
    pagination,
    setPagination,
  };
}
