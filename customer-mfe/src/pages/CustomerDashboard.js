import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CustomerDetails from '../components/customer-details';
import CustomerSidebar from '../components/customer-sidebar'
// import CustomerDashboard from '../components/customer-dashboard.js';
import CustomerResultPage from './CustomerResults'
import {Link, useLocation} from 'react-router-dom';


 const CustomerDashboardPage = ()=>{
  const {state} = useLocation();
  console.log("STATE FROM PREV", state);
    return (
    
//         <div class="parent md:h-screen md:grid md:grid-cols-6">
//   <section class="sidebar bg-green-400 md:col-span-2">
//         {/* <CustomerSidebar /> */}
//   </section>
  <main class="main md:col-span-4">

        <Routes>
        <Route
              path='/customer/details/:customerId'
              element={<CustomerDetails />}
            />
            <Route
              path='/customer'
              element={<CustomerResultPage />}
            />
            </Routes>
  </main>
// </div>

    )
}

export default CustomerDashboardPage;