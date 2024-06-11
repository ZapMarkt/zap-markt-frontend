import { AdminUserTable } from "../components/AdminUserTable";
import { Layout } from "../shared/Layout";

export function Configurations() {
  return (
    <Layout headerTitle="Configurações">
      <AdminUserTable />
    </Layout>
  );
}
