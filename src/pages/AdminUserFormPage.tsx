import { AdminUserForm } from "../components/AdminUserForm";
import { CustomAppBar } from "../components/CustomAppBar";
import { Layout } from "../shared/Layout";

export function AdminUserFormPage() {
  return (
    <Layout>
      <CustomAppBar title="Novo usuário administrador" />
      <AdminUserForm />
    </Layout>
  );
}
