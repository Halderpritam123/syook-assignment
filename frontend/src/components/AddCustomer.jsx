// src/components/AddCustomer.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleAddCustomer = async () => {
    try {
      await axios.post('http://localhost:8080/customers', { name, city });
      console.log('Customer added successfully');
      setName('');
      setCity('');
      alert('Customer added successfully');
      window.location.reload();
    } catch (error) {
      console.error('Failed to add customer:', error);
      alert('Failed to add customer');
    }
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
      <button onClick={handleAddCustomer}>Add Customer</button>
    </div>
  );
};

export default AddCustomer;
