import Layout from '@/common/components/supermarket/Layout';
import CategoryTable from '@/components/supermarket/CategoryList';
import ProductTable from '@/components/supermarket/ProductsList';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TabsData = [
  {
    value: 'products',
    name: 'Produtos',
    content: <ProductTable />,
  },
  {
    value: 'categories',
    name: 'Categorias',
    content: <CategoryTable />,
  },
];

const ProductsPage = () => {
  return (
    <Layout title="Produtos">
      <Tabs defaultValue="products" className="fixed">
        <TabsList className="flex justify-start w-full gap-[18px] mb-[30px] h-[59px] bg-transparent border-b border-customMkt-gray2">
          {TabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              className="text-2xl px-[18px] pt-[10px] pb-5 text-customMkt-gray6 font-normal border-b-2 border-customMkt-gray2 max-h-[59px] data-[state=active]:border-customMkt-black rounded-none"
              value={tab.value}
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {TabsData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </Layout>
  );
};

export default ProductsPage;
