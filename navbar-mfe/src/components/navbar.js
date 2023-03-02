// import {Link} from 'react-router-dom';
// const Navbar = (props) => {
//   const contextId = props?.contextId;
//   const useCookies = props?.useCookies;
//   console.log('navbar props', props);
//   return (
//     // <nav className='bg-gray-300 mb-10'>
//     //   <ul className='flex flex-row justify-start items-center border-gray-1000'>
//     //     <li className='mx-5 my-5 font-semibold'>
//     //       <Link to={'/home?contextId='+ props?.contextId}> home</Link>
//     //     </li>
//     //     |
//     //     {(!props?.root_mfe || props?.root_mfe === 'customer') && (
//     //       <li className='mx-5 my-5 font-semibold'>
//     //         <Link to={'/customer?contextId='+ props?.contextId}>Customer</Link>
//     //       </li>
//     //     )}
//     //     |
//     //     {(!props?.root_mfe || props?.root_mfe === 'order') && (
//     //       <li className='mx-5 my-5 font-semibold'>
//     //         <Link to={'/order?contextId='+ props?.contextId}>Order</Link>
//     //       </li>
//     //     )}
//     //   </ul>
//     // </nav>
//   );
// };

// export default Navbar;

import ProfileListWidget from 'csc-listing-widget';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
// import { Context } from './Provider';
import { useState } from 'react';
import { useEffect } from 'react';
import { link, BrowserRouter as Router, Route, useParams, Link, Routes, useLocation  } from 'react-router-dom';

const CustomerSidebar = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  console.log("useLocation", useLocation())
  const {pathname: pathName = ''} = useLocation();


  const [customers, setCustomers] = useState([]);
  const SaveSessionStorage = (result)=>{
    sessionStorage.setItem("customerId", result.id)
  }
  
  const clientNameFormatter = (result) => (
    <>
      <Link
        className='text-blue-500'
        to={`customer/details/${result.id}`}
        onClick={()=>{SaveSessionStorage(result)}}
      >
        {result.firstName}
      </Link>
    </>
  );
  const orderNameFormatter = (result) => (
    <>
      <Link
        className='text-blue-500'
        to={`order/details/${result.orderId}`}
      >
        {result.orderId}
      </Link>
    </>
  );
  let colDefCustomers = [
    {
      name: 'ClientName',
      label: 'Client name',
      formatter: clientNameFormatter,
      className: '',
      sortable: true,
      searchable: true,
    },
    {
      name: 'id',
      label: 'id',
      link: '',
      className: 'font-bold',
      sortable: true,
    }
  ];
  let colDefOrders = [
    {
      name: 'orderId',
      label: 'orderId',
      formatter: orderNameFormatter,
      className: '',
      sortable: true,
      searchable: true,
    },
    {
      name: 'totalPrice',
      label: 'totalPrice',
      link: '',
      className: 'font-bold',
      sortable: true,
    },
    {
      name: 'createdAt',
      label: 'createdAt',
      link: '',
      className: 'font-bold',
      sortable: true,
    }
  ];
  let widgetPage = ''
  console.log("pathName", pathName);
  if(pathName.includes('/customer')) {
    widgetPage = 'customer'
  }else if(pathName.includes('/order')) {
    widgetPage = 'order'
  }
  console.log("widgetPage default", pathName.includes('/customer'));

  const [widgetType, setWidgetType] = useState(widgetPage);
  const urltofetch = widgetType ==='customer' ? 'https://6326b210ba4a9c4753299365.mockapi.io/litmus7/users/' : 'https://6326b210ba4a9c4753299365.mockapi.io/litmus7/orders/'
  useEffect(() => {
    if(widgetType) {
      fetch(urltofetch)
      .then((response) => response.json())
      .then((data) => {
        console.log('profile_api_data', data);
        setCustomers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }

  }, [widgetType]);

  const colDef= widgetType ==='customer' ? colDefCustomers : colDefOrders;

  const changeWidgetType = (type)=>{
    
     setWidgetType(type);
    navigate(`/${type}`, { state: { id: 7, color: 'red' } });
    // if(type === 'customer') {
    //   navigate('/customer', { state: { id: 7, color: 'red' } });
    //   //window.history.pushState({name:"sanjay"}, "",'/customer')
    // } else if(widgetType==='order') {
    //  // window.history.pushState({name:"simon"}, "",'/order')
    //    navigate('/order', { state: { id: 7, color: 'green' } });
    // }
    
  }
  return (
    <>
    <button class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>changeWidgetType('customer')}>Customer</button>
    <button class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>changeWidgetType('order')}>Order</button>
    <button class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>changeWidgetType('')}>None</button>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>changeWidgetType()}>
        
        Selected Widget Page = {widgetType} </button> */}
      <input class="bg-gray-200  w-full py-2 px-4 text-gray-700"
       id="inline-full-name" 
       type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} />
       {widgetType && (
 <ProfileListWidget
 widgetId='cutomer-mfe-profile-list-widget'
 env='qa'
 results={customers}
 colDef={colDef}
 // sort={sort}
 // setSort={setSort}
/>
       )}
            
    </>
  );
};


export default CustomerSidebar;
