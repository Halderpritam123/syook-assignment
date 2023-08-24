// src/components/AddItem.js
import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = async () => {
    try {
      await axios.post('http://localhost:8080/items', { name, price });
      console.log('Item added successfully');
      setName('');
      setPrice('');
      alert('Item added successfully');
      window.location.reload(); 
    } catch (error) {
      console.error('Failed to add item:', error);
      alert('Failed to add item');
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItem;
