// import { ProfileDetailsWidget } from 'l7-profile-details-widget'
// import 'l7-profile-details-widget/dist/index.css'
// import { ProfileListWidget } from 'l7-profile-list-widget'
// import 'l7-profile-list-widget/dist/index.css'
import { useParams } from "react-router-dom";
import {Context} from './Provider';
import React, {useContext} from 'react';




const CustomerDetails = (props)=>{

    const [contextData, setContextData] = useContext(Context);

    console.log("ContextData......insidecustomerdetail", contextData);
    // This is how we useContext!! Similar to useState
  
    let { customerId } = useParams(); 
    if (!customerId) {
        customerId = contextData?.customerId;
    }
    console.log('customerId_detail', customerId);
    return (
      <>
        <div className='text-2xl font-semibold text-center'>Customer Details</div>
        <br />
        <div className=' block mx-35-percent w-100'>
          {/* <ProfileDetailsWidget
            widgetId='customer-mfe-widgtId'
            customerId={customerId}
            env='qa'
            context={{ contextData, setContextData }}
          /> */}
        </div>
        <br />
      </>
    );
}

export default CustomerDetails;