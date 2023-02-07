import { Routes , Route, BrowserRouter } from 'react-router-dom';
import './index.css?modules=false';
import CustomerDetails from './components/customer-details';
import CustomerDashboard from './components/customer-dashboard.js';
import ProviderComponent from './components/Provider.js';



export default function Root(props) {



  return (

    <ProviderComponent>
  <section>

<BrowserRouter>


<Routes>

  
    <Route  path="/customer/customer-detail/:customerId" element={<CustomerDetails {...props} />} />
    <Route  path="/customer" element={<CustomerDashboard />} />
  
  
  {/* <Route path="/customer-list" component={CustomerApp} /> */}
</Routes>

</BrowserRouter>
  </section>
  </ProviderComponent>
  )
}
