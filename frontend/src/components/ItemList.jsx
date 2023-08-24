// src/components/ItemList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemList.css'; // Import custom styling

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://syooook.onrender.com/items');
      setItems(response.data);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  return (
    <div className="item-list">
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li className='itemLi' key={item._id}>
            <span className="item-name">{item.name}</span>
            <span className="item-price">${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
