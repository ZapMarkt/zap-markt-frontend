import { PaginatedData, SharedProduct, productService } from "@/services/ProductService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { IoMdMore } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";

export function SharedProductActions(sharedProduct: SharedProduct) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productService.deleteSharedProduct,
    onSuccess: () => {
      queryClient.setQueryData(["sharedProducts"], (oldState: PaginatedData<SharedProduct>) => ({
        ...oldState,
        items: oldState.items.filter((item) => item.uuid !== sharedProduct.uuid),
      }));
    },
  });

  const handleDeleteSharedPorduct = () => mutation.mutateAsync(sharedProduct.uuid);

  return (
    <div className="flex items-center gap-10">
      <Button
        className="w-5 h-5 rounded-full"
        variant="ghost"
      >
        <MdVisibility className="text-stone-600 w-16 h-16" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IoMdMore className="text-stone-600 w-5 h-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="flex items-center gap-3"
            onClick={handleDeleteSharedPorduct}
          >
            <FaRegTrashCan />
            Deletar produto
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
