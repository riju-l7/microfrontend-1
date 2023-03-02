// import { ProfileDetailsWidget } from 'l7-profile-details-widget'
import {ProfileDetailsWidget} from './test'
import 'l7-profile-details-widget/dist/index.css'
import { ProfileListWidget } from 'l7-profile-list-widget'
import 'l7-profile-list-widget/dist/index.css'
import { useParams } from "react-router-dom";
import {Context} from './Provider';
import React, {useContext, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';





const CustomerDetails = (props)=>{

  const {state} = useLocation();
// const { id, color } = state;

    const [contextData, setContextData] = useContext(Context);

    console.log("ContextData.....Rendering customer", contextData);

    useEffect(()=>{
      console.log("COntext Data in Rendering customer useEffect---", contextData)
        sessionStorage.setItem('customer-mfe', JSON.stringify(contextData))
    },[contextData])
    // This is how we useContext!! Similar to useState
  
    let { customerId } = useParams(); 
    if (!customerId) {
        customerId = contextData?.customerId;
    }
    return (
      <>
      <button></button>
        <div className='text-2xl font-semibold text-center'>Customer Details</div>
        <br />
        <Link className="text-blue-600 visited:text-purple-600" to={`/order/details/${customerId}`}>Customer Order</Link>
        <div className=' block mx-35-percent w-100'>
          <ProfileDetailsWidget
            widgetId='customer-detail-widgetId'
            customerId={customerId}
            env='qa'
            context={{ contextData, setContextData }}
          />
        </div>
        <br />
        
      </>
    );
}

export default CustomerDetails;