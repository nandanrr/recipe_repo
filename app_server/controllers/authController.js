const bcrypt = require('bcryptjs');
const User = require('../../app_api/models/User');

const loginForm = (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render('auth/login');
};

const registerForm = (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render('auth/register');
};

const registerAction = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).send('Missing fields');
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).send('Email already registered');
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, passwordHash });
  req.session.user = { id: user._id.toString(), name: user.name, email: user.email };
  res.redirect('/');
};

const loginAction = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('Invalid credentials');
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(400).send('Invalid credentials');
  req.session.user = { id: user._id.toString(), name: user.name, email: user.email };
  res.redirect('/');
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

module.exports = { loginForm, registerForm, registerAction, loginAction, logout };
