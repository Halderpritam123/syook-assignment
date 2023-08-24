import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom styling

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">App</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/vehicles">Vehicles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/items">Items</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/orders">Orders</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customers">Customers</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-nav ml-auto">
        <Link className="nav-item nav-link" to="/admin">Admin Login</Link>
        <Link className="nav-item nav-link" to="/logout">Admin Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
