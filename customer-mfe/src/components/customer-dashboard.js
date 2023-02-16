import { ProfileListWidget } from 'l7-profile-list-widget';
import 'l7-profile-list-widget/dist/index.css';
import { useContext } from 'react';
import { ProfileDetailsWidget } from 'l7-profile-details-widget';
import 'l7-profile-details-widget/dist/index.css';
import { Context } from './Provider';

const CustomerDashboard = () => {
  const [contextData, setContextData] = useContext(Context);

  console.log('ContextData......', contextData);
  return (
    <>
      <div className='text-2xl font-semibold text-center '>
        Customer Dashboard
        <br />
      </div>
      <div className='grid gap-3 grid-cols-4 mt-10'>
        <div className={`${contextData.customerId ? 'col-span-3' : 'col-span-4'}`}>
          <ProfileListWidget
            widgetId='cutomer-mfe-profile-list-widget'
            context={{ contextData, setContextData }}
            env='qa'
          />
        </div>
        {contextData.customerId && (
          <div className='col-span-1'>
            <ProfileDetailsWidget
              widgetId='customer-mfe-dahboard-profile-details-widgtId'
              context={{ contextData, setContextData }}
              customerId={contextData.customerId}
              env='qa'
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerDashboard;
