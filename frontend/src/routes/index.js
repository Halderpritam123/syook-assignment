import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import ItemsPage from '../pages/ItemsPage';
import VehiclesPage from '../pages/VehiclesPage';
import OrdersPage from '../pages/OrdersPage';
import CustomersPage from '../pages/CustomersPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/items" element={<ItemsPage/>} />
      <Route path="/vehicles" element={<VehiclesPage/>} />
      <Route path="/orders" element={<OrdersPage/>} />
      <Route path="/customers" element={<CustomersPage/>} />
    </Routes>
  );
};

export default AllRoutes;
