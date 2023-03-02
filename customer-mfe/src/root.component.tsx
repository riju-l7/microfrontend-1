import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css?modules=false';
import CustomerDetails from './components/customer-details';
// import CustomerDashboard from './components/customer-dashboard.js';
import CustomerSearch from './components/customer-search.js';
import CustomerDashboardPage from './pages/CustomerDashboard';
import ProviderComponent from './components/Provider.js';

export default function Root(props) {
  return (
    <ProviderComponent {...props}>
      <section>
        <BrowserRouter>
          {/* <Routes>
          <Route
              path='/*'
              element={<CustomerDashboardPage {...props} />}
            />
  
          </Routes> */}
          <CustomerDashboardPage />
        </BrowserRouter>
      </section>
    </ProviderComponent>
  );
}
