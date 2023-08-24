import React, { useState } from 'react';
import axios from 'axios';
import "./AdminStyles.css"
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/admin/login', { username, password });
      localStorage.setItem('adminToken', response.data.token);
      alert('Logged in successfully');
      if(localStorage.getItem('adminToken')){
          navigate("/orders");
      }else{
        alert("Login First")
      }
       // Redirect to dashboard after login
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
