const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
// router.get('/check',(req,res)=>{
//     res.send("<h1>Db Working</h1>")
// })
router.post('/', customerController.createCustomer);
router.get('/', customerController.getCustomers);

module.exports = router;
