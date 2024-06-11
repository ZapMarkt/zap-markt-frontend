import { ordersColumns } from '@/types/Order';
import { useState } from 'react';
import DataTable from './DataTable';
import { columns } from './DataTableColumns';

async function getData(): Promise<ordersColumns[]> {
  return [
    {
      id: '#857-970',
      name: 'Rafael Costa',
      adress: 'Avenida Ipiranga, 700 - República',
      value: 98.2,
      quantify: 2,
      payMethod: { method: 'Debito - Visa' },
      status: 'Aceito',
      action: '1',
    },
  ];
}

const DemoPage1 = async () => {
  const data = await getData();
  const [filterValue, setFilterValue] = useState('');
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={data}
        searchKey="label"
        filterValue={filterValue}
      />
    </div>
  );
};

export default DemoPage1;
