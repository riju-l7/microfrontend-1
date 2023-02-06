import { ProfileListWidget } from 'l7-profile-list-widget'
import 'l7-profile-list-widget/dist/index.css'


const CustomerDashboard = ()=>{
    return (
        <div className="text-3xl font-bold">Customer Dashboard Page 
        <br/>
        
        <ProfileListWidget widgetId="cutomer-mfe-profile-list-widget" env="qa" />
        
        </div>
        
    )
}

export default CustomerDashboard;