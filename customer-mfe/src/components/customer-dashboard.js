import { ProfileListWidget } from 'l7-profile-list-widget'
import 'l7-profile-list-widget/dist/index.css'
import { useContext } from 'react';
import { ProfileDetailsWidget } from 'l7-profile-details-widget'
import 'l7-profile-details-widget/dist/index.css'
import {Context} from './Provider';


const CustomerDashboard = ()=>{
    

    const [contextData, setContextData] = useContext(Context);
    
    console.log("ContextData......", contextData);
    return (
      <div className='text-3xl font-semibold text-center underline'>
        Customer Dashboard
        <br />
        <div className='grid gap-3 grid-cols-4 mt-10'>
          <div className='col-span-1'>
            <ProfileDetailsWidget
              widgetId='customer-mfe-dahboard-profile-details-widgtId'
              context={{ contextData, setContextData }}
              customerId={2}
              env='qa'
            />
          </div>
          <div className='col-span-3' >
            <ProfileListWidget
              widgetId='cutomer-mfe-profile-list-widget'
              env='qa'
            />
          </div>
        </div>
      </div>
    );
}

export default CustomerDashboard;