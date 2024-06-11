import OrderHeader from './components/Header';
import OrderTabnation from './components/OrderTabnation';

const Orders = () => {
  return (
    <div className="flex flex-col">
      <OrderHeader />
      <OrderTabnation />
    </div>
  );
};

export default Orders;
