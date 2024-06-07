import { CustomAppBar } from "../components/CustomAppBar";
import { UsersTable } from "../components/UsersTable";
import { Layout } from "../shared/Layout";

export function Users() {
  return (
    <Layout>
      <CustomAppBar title="Usuários" />
      <UsersTable />
    </Layout>
  );
}
