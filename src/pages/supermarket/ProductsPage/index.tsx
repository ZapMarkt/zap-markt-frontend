import Layout from '@/common/components/supermarket/Layout';
import ProductTable from '@/components/supermarket/ProductsList';

const ProductsPage = () => {
  return (
    <Layout title="Produtos">
      <ProductTable />
    </Layout>
  );
};

export default ProductsPage;
