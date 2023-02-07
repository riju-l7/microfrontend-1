import React, { useContext } from 'react';
import {OrderDetailsWidget}    from 'l7-order-detail-widget'
import 'l7-order-detail-widget/dist/index.css'
import {Context} from './Provider';
import { useParams } from "react-router-dom";


const OrderDashboard = ()=>{

      
    let { orderId } = useParams(); 
    if (!orderId) {
        orderId = contextData?.orderId;
    }
    
    const [contextData, setContextData] = useContext(Context);
    console.log("ContextData..inside order dashboard.", contextData);
    return (
        
        <div className="text-3xl font-bold">Order Details Page 
        <br/>
        <OrderDetailsWidget  isRecentOrders={true} orderId={orderId}   env="qa" />
        </div>
        
    )
}

export default OrderDashboard;