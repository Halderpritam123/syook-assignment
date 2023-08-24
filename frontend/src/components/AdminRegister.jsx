import React, { useState } from 'react';
import axios from 'axios';
import "./AdminStyles.css"
const AdminRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8080/admin/register', { username, password });
      alert('Registered successfully');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Admin Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default AdminRegister;
