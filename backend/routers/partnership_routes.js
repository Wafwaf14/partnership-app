const express = require('express');
const router = express.Router();
const partnershipController = require('../controller/partnership_controller');

router.post('/partnership', partnershipController.submitRequest);

module.exports = router;

