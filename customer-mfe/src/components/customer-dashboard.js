import { ProfileListWidget } from 'l7-profile-list-widget'
import 'l7-profile-list-widget/dist/index.css'
import { useContext } from 'react';
import { ProfileDetailsWidget } from 'l7-profile-details-widget'
import 'l7-profile-details-widget/dist/index.css'



const CustomerDashboard = ()=>{
    debugger;
    

    return (
        
        <div className="text-3xl font-bold">Customer Dashboard Page 
        <br/>
        
        
        <ProfileDetailsWidget widgetId="customer-mfe-dahboard-profile-details-widgtId" customerId="2" env="qa" />
        <ProfileListWidget widgetId="cutomer-mfe-profile-list-widget" env="qa" />
        
        
        </div>
        
    )
}

export default CustomerDashboard;