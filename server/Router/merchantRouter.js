const express = require('express');
const { registerMerchant, loginMerchant } = require('../Controller/merchantControllers');

const router = express.Router();

router.post('/register',registerMerchant);
router.post('/login',loginMerchant);

module.exports =router;
