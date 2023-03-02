import React, { useContext } from 'react';
// import { OrderDetailsWidget } from 'l7-order-detail-widget';
import { OrderDetailsWidget } from './test';
import 'l7-order-detail-widget/dist/index.css';
import { Context } from './Provider';
import { useParams } from 'react-router-dom';

const OrderDashboard = () => {
  let { orderId } = useParams();
  if (!orderId) {
    orderId = contextData?.orderId;
  }

  const [contextData, setContextData] = useContext(Context);
  console.log('ContextData..inside order dashboard.', contextData);
  return (
    <>
      <div className='text-2xl font-semibold text-center'>Order Details Page</div>
      <br />
      <div className='mx-35-percent'>
        <OrderDetailsWidget
          isRecentOrders={true}
          orderId={orderId}
          widgetId="order-detail-widget"
          env='qa'
          context={{ contextData, setContextData }}
        />
      </div>
    </>
  );
};

export default OrderDashboard;
