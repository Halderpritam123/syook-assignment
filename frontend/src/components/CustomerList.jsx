// src/components/CustomerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomerList.css'; // Import custom styling

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Failed to fetch customers:', error);
    }
  };

  return (
    <div className="customer-list">
      <h2>Customer List</h2>
      <ul>
        {customers.map(customer => (
          <li className='cusLi' key={customer._id}>
            <span className="customer-name">{customer.name}</span>
            <span className="customer-city">{customer.city}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
