const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

router.get('/users/', UserController.index);
router.post('/user/register', UserController.register);
router.post('/user/login', UserController.login);

module.exports = router;