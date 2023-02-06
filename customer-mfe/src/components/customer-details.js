import { ProfileDetailsWidget } from 'l7-profile-details-widget'
import 'l7-profile-details-widget/dist/index.css'
import { ProfileListWidget } from 'l7-profile-list-widget'
import 'l7-profile-list-widget/dist/index.css'
import { useParams } from "react-router-dom";



const CustomerDetails = (props)=>{

    debugger;
    let { customerId } = useParams(); 
    return (
        
        <div className="text-3xl font-bold underline">
            Customer Detail Page 
            <br/>
            <ProfileDetailsWidget widgetId="customer-mfe-widgtId" customerId={customerId} env="qa" />
            
            <br/>

            

        </div>
    )
}

export default CustomerDetails;