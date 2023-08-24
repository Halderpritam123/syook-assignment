// src/components/AddDeliveryVehicle.js
import React, { useState } from 'react';
import axios from 'axios';

const AddDeliveryVehicle = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('bike'); // Default value
  const [city, setCity] = useState('');

  const handleAddVehicle = async () => {
    try {
      await axios.post('http://localhost:8080/delivery-vehicles', { registrationNumber, vehicleType, city });
      console.log('Delivery vehicle added successfully');
      setRegistrationNumber('');
      setVehicleType('bike'); // Reset to default value
      setCity('');
      alert('Delivery vehicle added successfully');
      window.location.reload();
    } catch (error) {
      console.error('Failed to add delivery vehicle:', error);
      alert('Failed to add delivery vehicle');
    }
  };

  return (
    <div>
      <h2>Add Delivery Vehicle</h2>
      <input type="text" placeholder="Registration Number" value={registrationNumber} onChange={e => setRegistrationNumber(e.target.value)} />
      <select value={vehicleType} onChange={e => setVehicleType(e.target.value)}>
        <option value="bike">Bike</option>
        <option value="truck">Truck</option>
      </select>
      <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
      <button onClick={handleAddVehicle}>Add Vehicle</button>
    </div>
  );
};

export default AddDeliveryVehicle;
