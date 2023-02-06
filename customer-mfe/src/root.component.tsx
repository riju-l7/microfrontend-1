import { Routes , Route, BrowserRouter } from 'react-router-dom';
import './index.css?modules=false';
import CustomerDetails from './components/customer-details';



export default function Root(props) {



  return (
  <section>

<BrowserRouter>


<Routes>

  
  <Route  path="/customer/customer-detail" element={<CustomerDetails />} />
  {/* <Route path="/customer-list" component={CustomerApp} /> */}
</Routes>

</BrowserRouter>
  </section>
  )
}
