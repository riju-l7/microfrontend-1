import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CustomerDetails from '../components/customer-details';
import CustomerResultsTable from '../components/customer-results-table';

 const CustomerResultPage = ()=>{
    return (
    
        <CustomerResultsTable />

    )
}

export default CustomerResultPage;