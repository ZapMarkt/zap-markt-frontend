import { Layout } from "../shared/Layout";
import { SupermarketTable } from "../components/SupermarketTable";

export function Supermarkets() {
  return (
    <Layout headerTitle="Supermercados">
      <SupermarketTable />
    </Layout>
  );
}
