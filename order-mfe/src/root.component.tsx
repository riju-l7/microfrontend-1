import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import OrderDashboard from "./components/order-dashboard";
import ProviderComponent from "./components/Provider.js";

export default function Root(props) {
  return (
    <ProviderComponent>
      <section>
        <BrowserRouter>
          <Routes>
            <Route path="/order" element={<OrderDashboard />} />
          </Routes>
        </BrowserRouter>
      </section>
    </ProviderComponent>
  );
}
