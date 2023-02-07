import React, { useContext } from 'react';
import {OrderListWidget}  from 'l7-order-list-widget'
import 'l7-order-list-widget/dist/index.css'
import {Context} from './Provider';


const OrderDashboard = ()=>{
    
    const [contextData, setContextData] = useContext(Context);
    console.log("ContextData..inside order dashboard.", contextData);
    return (
        
        <div className="text-3xl font-bold">Order Dashboard Page 
        <br/>
        <h3>Recent Orders By Customer</h3>
        <OrderListWidget isRecentOrders={true} customerId={contextData.customerId.toString()}  context={{contextData, setContextData}}  env="qa" />
        <h3>All Orders</h3>
        <OrderListWidget isRecentOrders={false}  context={{contextData, setContextData}}  env="qa" />
        </div>
        
    )
}

export default OrderDashboard;