import { Tabs, TabsContent } from '@/components/ui/tabs';
import { orders } from '@/data/orders';
import { labels } from '@/types/data';
import { useState } from 'react';
import DataTable from './components/Table/DataTable';
import { columns } from './components/Table/DataTableColumns';
import DataTableSearch from './components/Table/DataTableSearch';
import OrderTabnation from './components/Table/OrderTabnation';

const Orders = () => {
  const [filterValue, setFilterValue] = useState('');
  return (
    <div>
      <div className="flex justify-end">
        <DataTableSearch value={filterValue} onChange={setFilterValue} />
      </div>
      <Tabs defaultValue="all">
        <OrderTabnation />
        <div>
          {labels.map((content) => (
            <TabsContent
              key={content.value}
              value={content.value}
              className="bg-customMkt-whiteF9 rounded-[10px] px-[18px] pb-[18px] m-0"
            >
              <DataTable
                columns={columns}
                data={orders}
                searchKey="name"
                filterValue={filterValue || ''}
                statusKey="status"
                statusFilter={content.status}
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Orders;
