import { Layout } from "../shared/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IoStorefront } from "react-icons/io5";
import { SupermarketsTable } from "@/components/SupermarketsTable/SupermarketstTable";

export function Supermarkets() {
  return (
    <Layout headerTitle="Supermercados">
      <div className="p-8 h-[840px] overflow-x-hidden">
        <div className="flex justify-end mb-8">
          <Link to="/supermercados/dados-cadastrais">
            <Button>
              <IoStorefront className="mr-4" />
              Novo supermercado
            </Button>
          </Link>
        </div>
        <SupermarketsTable />
      </div>
    </Layout>
  );
}
