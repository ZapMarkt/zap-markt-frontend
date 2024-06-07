import { AdminUserTable } from "../components/AdminUserTable";
import { CustomAppBar } from "../components/CustomAppBar";
import { Layout } from "../shared/Layout";

export function Configurations() {
  return (
    <Layout>
      <CustomAppBar title="Configurações" />
      <AdminUserTable />
    </Layout>
  );
}
