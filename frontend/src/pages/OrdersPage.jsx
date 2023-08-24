// src/components/OrdersPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrdersPage.css'; // Import custom styling
import AddOrderForm from '../components/AddOrderForm'; // Create this component
import OrderList from '../components/OrderList'; // Create this component

const OrdersPage = () => {
  // State to store orders
  const [orders, setOrders] = useState([]);

  // Fetch orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  // Function to fetch orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  return (
    <div className="orders-page">
      <h2>Orders</h2>
      <AddOrderForm fetchOrders={fetchOrders} /> {/* Implement this component */}
      <OrderList orders={orders} /> {/* Implement this component */}
    </div>
  );
};

export default OrdersPage;
