const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controller');

router.get('/signup',authController.getSignPage);
router.get('/login', authController.getLoginPage);
router.post('/signup',authController.signUp);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logout);

module.exports = router;