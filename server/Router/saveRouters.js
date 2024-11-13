const express = require('express');
const { secureData, paymentsData } = require('../Controller/saveControllers');
const router = express.Router();

router.post('/save/data',secureData);
router.get('/all/payments',paymentsData)


module.exports = router;
