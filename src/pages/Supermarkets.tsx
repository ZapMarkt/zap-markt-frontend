import { Layout } from "../shared/Layout";
import { SupermarketTable } from "../components/SupermarketTable";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IoStorefront } from "react-icons/io5";

export function Supermarkets() {
  return (
    <Layout headerTitle="Supermercados">
      <div className="p-8">
        <div className="flex justify-end mb-8">
          <Link to="/supermercados/dados-cadastrais">
            <Button>
              <IoStorefront className="mr-4" />
              Novo supermercado
            </Button>
          </Link>
        </div>
        <SupermarketTable />
      </div>
    </Layout>
  );
}
