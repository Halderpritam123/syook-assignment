// src/pages/VehiclesPage.js
import React from 'react';
import AddDeliveryVehicle from '../components/AddDeliveryVehicle';
import DeliveryVehicleList from '../components/DeliveryVehicleList';

const VehiclesPage = () => {
  return (
    <div>
      <AddDeliveryVehicle />
      <DeliveryVehicleList />
    </div>
  );
};

export default VehiclesPage;
