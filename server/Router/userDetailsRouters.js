const express = require('express');
const { userDetails, allUserDetails } = require('../Controller/userDetailsControllers');
const router = express.Router();


router.post('/new/register',userDetails);
router.get('/all/user',allUserDetails);

module.exports = router;