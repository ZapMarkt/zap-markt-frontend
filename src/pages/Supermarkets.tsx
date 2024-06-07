import { Layout } from "../shared/Layout";
import { CustomAppBar } from "../components/CustomAppBar";
import { SupermarketTable } from "../components/SupermarketTable";

export function Supermarkets() {
  return (
    <Layout>
      <CustomAppBar title="Supermercados" />
      <SupermarketTable />
    </Layout>
  );
}
