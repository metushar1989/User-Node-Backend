const express = require('express');
const usersController = require('./controller');

const router = express.Router();

router.route('/').post(usersController.createUser)
router.route('/').put(usersController.updateUserById)
router.route('/delete').put(usersController.deleteUser)
router.route('/').get(usersController.getAllUser)

module.exports = router;

