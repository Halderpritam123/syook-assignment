// src/pages/CustomerPage.js
import React from 'react';
import AddCustomer from '../components/AddCustomer';
import CustomerList from '../components/CustomerList';

const CustomerPage = () => {
  return (
    <div>
      <AddCustomer />
      <CustomerList />
    </div>
  );
};

export default CustomerPage;
