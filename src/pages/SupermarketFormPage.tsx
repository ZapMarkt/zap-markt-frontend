import { CustomAppBar } from "../components/CustomAppBar";
import { CustomTabs } from "../components/CustomTabs";
import { SupermarketForm } from "../components/SupermarketForm";
import { Layout } from "../shared/Layout";

export function SupermarketFormPage() {
  return (
    <Layout>
      <CustomTabs />
      <CustomAppBar title="Novo cadastro" />
      <SupermarketForm />
    </Layout>
  );
}
