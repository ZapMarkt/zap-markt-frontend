import { columnsProducts } from '@/components/supermarket/ProductsList/components/Table/components/DataTableColumns';
import { products } from '@/data/productList';
import { DataProductTable } from './components/Table';

const ProductTable = () => {
  return (
    <div>
      <DataProductTable data={products} columns={columnsProducts} />
    </div>
  );
};

export default ProductTable;
