const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authController');

router.get('/login', ctrl.loginForm);
router.post('/login', ctrl.loginAction);
router.get('/register', ctrl.registerForm);
router.post('/register', ctrl.registerAction);
router.post('/logout', ctrl.logout);

module.exports = router;
