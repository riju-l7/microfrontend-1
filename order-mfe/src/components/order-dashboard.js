import React, { useContext } from 'react';
import {OrderListWidget}  from 'l7-order-list-widget'
import 'l7-order-list-widget/dist/index.css'
import {Context} from './Provider';
import { useSearchParams } from 'react-router-dom';

const OrderDashboard = ()=>{
    
  const [contextData, setContextData] = useContext(Context);
  let [searchParams, setSearchParams] = useSearchParams();
    console.log("ContextData..inside order dashboard.", contextData);
    return (
      <>
        <div className='text-2xl font-semibold text-center'>Order Dashboard Page </div>
        <br />
        <div className='text-1xl font-semibold text-left ml-5'>Recent Orders By Customer</div>
        <OrderListWidget
          isRecentOrders={true}
          customerId={searchParams.get('customerId')}
          context={{ contextData, setContextData }}
          env='qa'
        />
        <div className='text-1xl font-semibold text-left ml-5'>All Orders</div>
        <OrderListWidget
          isRecentOrders={false}
          context={{ contextData, setContextData }}
          env='qa'
        />
      </>
    );
}

export default OrderDashboard;