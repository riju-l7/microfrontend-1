import ProfileListWidget from 'csc-listing-widget';
import { useContext } from 'react';
import { ProfileDetailsWidget } from 'l7-profile-details-widget';
import { Context } from './Provider';
import { useState } from 'react';
import { useEffect } from 'react';
import { link, BrowserRouter as Router, Route, useParams, Link, Routes } from 'react-router-dom';

const CustomerSidebar = () => {
  const [contextData, setContextData] = useContext(Context);
  const [customer, setCustomer] = useState();

  const [customers, setCustomers] = useState([]);
  const [sort, setSort] = useState({});
  const date_formatter = (result) => new Date(result.updatedAt).toLocaleString();
  
  const orderFormatter = (result) => (
    <Link
      className='text-blue-500'
      to={`/order?customerId=${result.id}`}
    >
      Orders
    </Link>
  );

  const clientNameFormatter = (result) => (
    <>
      <Link
        className='text-blue-500'
        to={`details/${result.id}`}
      >
        {result.firstName}
      </Link>
    </>
  );
  let colDef = [
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
    },
    {
      name: 'orders',
      label: 'Orders',
      className: '',
      formatter: orderFormatter,
      sortable: false,
    }
  ];
  useEffect(() => {
    fetch('https://6326b210ba4a9c4753299365.mockapi.io/litmus7/users/')
      .then((response) => response.json())
      .then((data) => {
        console.log('profile_api_data' + data);
        setCustomers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <>
             <ProfileListWidget
            widgetId='cutomer-mfe-profile-list-widget'
            env='qa'
            results={customers}
            colDef={colDef}
            // sort={sort}
            // setSort={setSort}
          />
    </>
  );
};


export default CustomerSidebar;