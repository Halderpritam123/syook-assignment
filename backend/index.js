const express = require('express');
const mongoose = require('mongoose');
const app = express();
const itemRoutes = require('./routes/itemRoutes');
const customerRoutes = require('./routes/customerRoutes');
const deliveryVehicleRoutes = require('./routes/deliveryVehicleRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoute');
const authMiddleware = require('./middleware/auth');
const db = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
app.use(morgan('combined'));

app.use(express.json());
app.use(cors());

app.use('/items', itemRoutes);
app.use('/customers', customerRoutes);
app.use('/delivery-vehicles', deliveryVehicleRoutes);
app.use('/orders', orderRoutes);
app.use('/admin', adminRoutes);
app.get('/',(req,res)=>{
    res.send("<h1>Express Working</h1>")
})
app.listen(process.env.PORT,async()=>{
    try {
        await mongoose.connection
        console.log("Server connected")
    } catch (error) {
        console.log(error)
        console.log("Server not connected")
    }
    console.log(`Server is running on port ${process.env.port}`)
})
