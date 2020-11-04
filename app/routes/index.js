const express = require('express')
const userRoute = require('../users/routes')



const router = express.Router();

router.use('/user', userRoute)




module.exports = router;
