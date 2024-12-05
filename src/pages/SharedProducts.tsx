import { SharedProductsTable } from "../components/SharedPorductsTable/SharedProductsTable";
import { Layout } from "../shared/Layout";
import { SharedProductForm } from "../components/SharedProductForm";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MdDriveFolderUpload } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

export function SharedProducts() {
  return (
    <Layout headerTitle="Produtos compartilhados">
      <div className="p-8">
        <div className="flex justify-end gap-4 mb-8">
          <Button
            className="gap-4 text-stone-400"
            variant="outline"
          >
            <MdDriveFolderUpload size={24} />
            Importar produtos
          </Button>
          <Sheet>
            <SheetTrigger>
              <Button>
                <AiFillProduct className="mr-4" />
                Novo produto compartilhado
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-[900px]">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-3xl font-bold text-stone-900">
                  Novo produto compartilhado
                </SheetTitle>
              </SheetHeader>
              <SharedProductForm />
            </SheetContent>
          </Sheet>
        </div>
        <SharedProductsTable />
      </div>
    </Layout>
  );
}
