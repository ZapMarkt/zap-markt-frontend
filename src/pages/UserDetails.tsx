import { CustomAppBar } from "../components/CustomAppBar";
import { Layout } from "../shared/Layout";
import { UserForm } from "../components/UserForm";
import { CustomUserTabs } from "../components/CustomUserTabs";

export function UserDetails() {
  return (
    <Layout>
      <CustomAppBar title="Christopher" />
      <CustomUserTabs />
      <UserForm />
    </Layout>
  );
}
