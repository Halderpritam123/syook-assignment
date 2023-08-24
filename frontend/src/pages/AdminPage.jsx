import React, { useState } from 'react';
import AdminLogin from '../components/AdminLogin';
import AdminRegister from '../components/AdminRegister';
import "./AdminPage.css"
const AdminPage = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const toggleForm = () => {
    setIsLoginActive(prevState => !prevState);
  };

  return (
    <div className="admin-page">
      <nav className="admin-nav">
        <button className={`nav-btn ${isLoginActive ? 'active' : ''}`} onClick={toggleForm}>
          Login
        </button>
        <button className={`nav-btn ${!isLoginActive ? 'active' : ''}`} onClick={toggleForm}>
          Register
        </button>
      </nav>
      <div className="admin-form">
        {isLoginActive ? <AdminLogin /> : <AdminRegister />}
      </div>
    </div>
  );
};

export default AdminPage;
