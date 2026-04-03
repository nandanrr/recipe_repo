const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authController');

router.get('/login', ctrl.loginForm);
router.post('/login', ctrl.loginAction);
router.get('/register', ctrl.registerForm);
router.post('/register', ctrl.registerAction);
router.post('/logout', ctrl.logout);

// Check if user is logged in (used by frontend)
router.get('/check-session', (req, res) => {
  if (req.session && req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ message: 'Not logged in' });
  }
});


module.exports = router;
