import React from 'react';
import { OrderDetailsWidget } from 'l7-order-detail-widget';
import 'l7-order-detail-widget/dist/index.css';

import { useParams } from 'react-router-dom';
import AccordionFormWizard from './accordion-form-wizard';
import { useProviderContext } from './Provider';

const OrderDashboard = (props) => {
  let { orderId } = useParams();

  const { contextData, callback } = useProviderContext();

  return (
    <>
      <div className='text-2xl font-semibold text-center'>
        Order Details Page
      </div>
      <br />
      <div className='mx-35-percent'>
        <OrderDetailsWidget isRecentOrders={true} orderId={orderId} env='qa' />
      </div>

      <AccordionFormWizard
        contextData={contextData}
        callback={callback}
        orderId={orderId}
      />
    </>
  );
};

export default OrderDashboard;
