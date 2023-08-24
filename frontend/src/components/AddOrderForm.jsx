// components/AddOrderForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddOrderForm.css'; // Import custom styling

const AddOrderForm = () => {
  const [orderData, setOrderData] = useState({
    itemId: '',
    price: 0,
    customerId: '',
    deliveryVehicleId: '',
    orderNumber: Math.floor(Math.random() * 100000), // Generate a random order number
  });

  const [items, setItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [deliveryVehicles, setDeliveryVehicles] = useState([]);

  useEffect(() => {
    fetchItems();
    fetchCustomers();
    fetchDeliveryVehicles();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const fetchDeliveryVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:8080/delivery-vehicles');
      setDeliveryVehicles(response.data);
    } catch (error) {
      console.error('Error fetching delivery vehicles:', error);
    }
  };

  const handleItemChange = (itemId) => {
    const selectedItem = items.find(item => item._id === itemId);
    if (selectedItem) {
      setOrderData({
        ...orderData,
        itemId: selectedItem._id,
        price: selectedItem.price,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(orderData);
      const response = await axios.post('http://localhost:8080/orders', orderData);
      console.log('Order created:', response.data);
      setOrderData({
        itemId: '',
        price: 0,
        customerId: '',
        deliveryVehicleId: '',
        orderNumber: Math.floor(Math.random() * 100000),
      });
      alert('Order created');
      window.location.reload();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="order-form-container">
      <h2>Create New Order</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <label className="order-label">
          Item:
          <select
            className="order-input"
            value={orderData.itemId}
            onChange={(e) => {
              setOrderData({ ...orderData, itemId: e.target.value });
              handleItemChange(e.target.value);
            }}
          >
            <option value="">Select an item</option>
            {items.map(item => (
              <option key={item._id} value={item._id}>{item.name}</option>
            ))}
          </select>
        </label>
        <label className="order-label">
          Price:
          <input
            className="order-input"
            type="number"
            value={orderData.price}
            onChange={(e) => setOrderData({ ...orderData, price: e.target.value })}
          />
        </label>
        <label className="order-label">
          Customer:
          <select
            className="order-input"
            value={orderData.customerId}
            onChange={(e) => setOrderData({ ...orderData, customerId: e.target.value })}
          >
            <option value="">Select a customer</option>
            {customers.map(customer => (
              <option key={customer._id} value={customer._id}>{customer.name}</option>
            ))}
          </select>
        </label>
        <label className="order-label">
          Delivery Vehicle:
          <select
            className="order-input"
            value={orderData.deliveryVehicleId}
            onChange={(e) => setOrderData({ ...orderData, deliveryVehicleId: e.target.value })}
          >
            <option value="">Select a delivery vehicle</option>
            {deliveryVehicles.map(vehicle => (
              <option key={vehicle._id} value={vehicle._id}>{vehicle.registrationNumber}</option>
            ))}
          </select>
        </label>
        <button type="submit" className="order-button">Create Order</button>
      </form>
    </div>
  );
};

export default AddOrderForm;
