const express = require('express');
const { merchantDetails, allMerchantDetails } = require('../Controller/merchantDetailsControllers');
const router = express.Router();


router.post('/new/register',merchantDetails);
router.get('/all/merchants',allMerchantDetails);

module.exports = router;