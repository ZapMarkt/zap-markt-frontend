import { Layout } from "../shared/Layout";
import { UserForm } from "../components/UserForm";
import { CustomUserTabs } from "../components/CustomUserTabs";

export function UserDetails() {
  return (
    <Layout headerTitle="Christopher">
      <CustomUserTabs />
      <UserForm />
    </Layout>
  );
}
