import { CustomTabs } from "../components/CustomTabs";
import { SupermarketForm } from "../components/SupermarketForm";
import { Layout } from "../shared/Layout";

export function SupermarketFormPage() {
  return (
    <Layout headerTitle="Novo cadastro">
      <CustomTabs />
      <SupermarketForm />
    </Layout>
  );
}
