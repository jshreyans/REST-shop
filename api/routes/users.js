const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');

router.post('/signup', UsersController.user_signup);

router.post('/login', UsersController.user_login);

router.delete('/:userID', UsersController.delete_user);

module.exports = router;