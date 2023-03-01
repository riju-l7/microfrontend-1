import ProfileListWidget from 'csc-listing-widget';
import { useContext } from 'react';
import { ProfileDetailsWidget } from 'l7-profile-details-widget';
import { Context } from './Provider';
import { useState } from 'react';
import { useEffect } from 'react';
import { link, BrowserRouter as Router, Route, useParams, Link, Routes } from 'react-router-dom';

const CustomerDashboard = () => {
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
        {result.firstName} {result.lastName}
      </Link>
      <br />
      Birthday gift redeemed: {result.giftRedeemed ? 'y' : 'n'}
      <br />
      Bi points: {result.biPoints}
      <br />
      YTD spend: {result.ytdSpent}
      <br />
      <Link
        className='text-blue-500'
        to={`notes/${result.id}`}
      >
        notes
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
      name: 'city',
      label: 'city',
      className: '',
      sortable: true,
      searchable: true,
    },
    {
      name: 'state',
      label: 'state',
      className: '',
      sortable: true,
    },
    {
      name: 'phoneNumber',
      label: 'phoneNumber',
      className: '',
    },
    {
      name: 'updatedAt',
      label: 'last login',
      className: '',
      formatter: date_formatter,
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

  useEffect(() => {
    console.log('customer......', customer);
  }, [customer]);

  return (
    <>
      <div className='text-2xl font-semibold text-center '>
        Customer Dashboard
        <br />
      </div>
      <div className='grid gap-3 grid-cols-4 mt-10'>
        <div className='col-span-3'>
          <ProfileListWidget
            widgetId='cutomer-mfe-profile-list-widget'
            env='qa'
            results={customers}
            colDef={colDef}
            sort={sort}
            setSort={setSort}
          />
        </div>
        <Routes>
          <Route
            path='details/:id'
            element={<Details />}
          />
          <Route
            path='notes/:id'
            element={<Notes />}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

function Details() {
  const id = useParams()['id'];
  console.log(id)
   const [contextData, setContextData] = useContext(Context);
  return (
    <div className='col-span-1'>
      <ProfileDetailsWidget
        widgetId='customer-mfe-dahboard-profile-details-widgtId'
        context={{ contextData, setContextData }}
        customerId={id}
        env='qa'
      />
    </div>
  );
}

function Notes() {
  const id = useParams()['id'];
  return (
    <div className='col-span-1'>
      Notes for customer id:
      <Link
        className='text-blue-500'
        to={`/order/order-detail/${id}`}
      >
        Order
      </Link>
      <br />
      This is a sample note
      <br />
      This is sample note
      <br />
      This is sample note
    </div>
  );
}

export default CustomerDashboard;
