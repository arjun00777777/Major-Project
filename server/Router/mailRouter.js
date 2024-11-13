const express = require('express');
const Email = require('../sendMail');
const router = express.Router();

router.post('/mail', Email)

module.exports = router;