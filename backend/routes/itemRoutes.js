const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.createItem);
router.get('/', itemController.getItems);

module.exports = router;
