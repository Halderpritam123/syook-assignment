// src/components/DeliveryVehicleList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeliveryVehicleList.css'; // Import custom styling

const DeliveryVehicleList = () => {
  const [deliveryVehicles, setDeliveryVehicles] = useState([]);

  useEffect(() => {
    fetchDeliveryVehicles();
  }, []);

  const fetchDeliveryVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:8080/delivery-vehicles');
      setDeliveryVehicles(response.data);
    } catch (error) {
      console.error('Failed to fetch delivery vehicles:', error);
    }
  };

  return (
    <div className="delivery-vehicle-list">
      <h2>Delivery Vehicle List</h2>
      <ul>
        {deliveryVehicles.map(vehicle => (
          <li className="vehicle-item" key={vehicle._id}>
            <span className="registration-number">{vehicle.registrationNumber}</span>
            <span className="vehicle-type">{vehicle.vehicleType}</span>
            <span className="city">{vehicle.city}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryVehicleList;
