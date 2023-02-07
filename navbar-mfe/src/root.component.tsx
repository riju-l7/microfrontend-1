import './navamfe.css';
import React from "react";

export default function Root(props) {
  console.log('props mfe', props?.root_mfe);
  return <nav>
      <ul>
        <li>
          <a href="/home">home</a>
        </li>
        {(!props?.root_mfe  || props?.root_mfe==='customer') &&
        <li>
          <a href="/customer">Customer</a>
        </li>
        }
        
        {(!props?.root_mfe  || props?.root_mfe==='order') &&
        <li>
          <a href="/order">Order</a>
        </li>
        }
        
      </ul>
  </nav>
    
}
