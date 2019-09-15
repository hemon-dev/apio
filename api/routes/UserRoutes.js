const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const UserController = require('../controller/UserController');
const Auth = require('../middlewares/AuthMiddleware');

// USER ROUTES
router.get('/users/', Auth, UserController.index);
router.post('/user/register', UserController.register);
router.post('/user/login', UserController.login);

module.exports = router;