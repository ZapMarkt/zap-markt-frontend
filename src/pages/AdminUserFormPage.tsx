import { AdminUserForm } from "../components/AdminUserForm";
import { Layout } from "../shared/Layout";

export function AdminUserFormPage() {
  return (
    <Layout headerTitle="Novo usuário administrador">
      <AdminUserForm />
    </Layout>
  );
}
