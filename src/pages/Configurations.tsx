import { Link } from "react-router-dom";
import { AdminUserTable } from "../components/AdminUserTable";
import { Layout } from "../shared/Layout";
import { Button } from "@/components/ui/button";
import { BsPeopleFill } from "react-icons/bs";

export function Configurations() {
  return (
    <Layout headerTitle="Configurações">
      <div className="p-8">
        <div className="flex justify-end items-center mb-8">
          <Link to="/configuracoes/novo-usuario-administrador">
            <Button className="gap-3">
              <BsPeopleFill />
              Novo usuário administrador
            </Button>
          </Link>
        </div>
        <AdminUserTable />
      </div>
    </Layout>
  );
}
