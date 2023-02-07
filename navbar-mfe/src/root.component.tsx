import './navamfe.css';
import React from "react";

export default function Root(props) {
  return <nav>
      <ul>
        <li>
          <a href="/home">home</a>
        </li>
        <li>
          <a href="/customer">Customer</a>
        </li>
        <li>
          <a href="/order">Order</a>
        </li>
      </ul>
  </nav>;
    
}
