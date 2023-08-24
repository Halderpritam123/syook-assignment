const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const authMiddleware = require('../middleware/auth'); // Import your auth middleware

const router = express.Router();

// Register a new admin
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newAdmin = new Admin({
      username,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register admin' });
  }
});

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the admin by username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ adminId: admin._id }, 'pritam', { expiresIn: '1h' });
    console.log("Generated Token:", token); 
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to log in' });
  }
});

// Protected admin route
router.get('/protected-route', authMiddleware, (req, res) => {
  // Accessible only with a valid token
  res.status(200).json({ message: 'Protected route accessed successfully' });
});

module.exports = router;
