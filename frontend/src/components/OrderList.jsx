// components/OrderList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderList.css'; // Import custom styling

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleEdit = async (orderId) => {
    try {
      const response = await axios.patch(`http://localhost:8080/orders/${orderId}`, { isDelivered: true });
      console.log('Order updated:', response.data);
      fetchOrders(); // Refresh the orders list after editing
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    <div className="order-list-container">
      <h2>Orders</h2>
      <ul className="order-list">
        {orders.map(order => (
          <li key={order._id} className="order-item">
            <p>Order Number: {order.orderNumber}</p>
            <p>Item ID: {order.itemId}</p>
            <p>Price: ${order.price}</p>
            <p>Customer ID: {order.customerId}</p>
            <p>Delivery Vehicle ID: {order.deliveryVehicleId}</p>
            <p>Status: {order.isDelivered ? 'Delivered' : 'Pending'}</p>
            {!order.isDelivered && (
              <button onClick={() => handleEdit(order._id)} className="edit-button">
                Mark as Delivered
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
