import React, { useEffect } from 'react';
import './index.css?modules=false';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import OrderDashboard from './components/order-dashboard';
import OrderDetail from './components/order-detail';
import ProviderComponent from './components/Provider.js';

export default function Root(props) {
  return (
    <BrowserRouter>
      <ProviderComponent {...props}>
        <section>
          <Routes>
            <Route path='/order' element={<OrderDashboard />} />
            <Route
              path='/order/order-detail/:orderId'
              element={<OrderDetail {...props} />}
            />
          </Routes>
        </section>
      </ProviderComponent>
    </BrowserRouter>
  );
}
