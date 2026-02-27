const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const connectDB = require('./config/db');
dotenv.config();
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');
app.use( session({
    secret: process.env.SESSION_SECRET || 'dev-secret',
    resave: false,
    saveUninitialized: false, }) );
app.use((req, res, next) => { res.locals.user = req.session.user || null; next();
});
const serverRoutes = require('./app_server/routes/index');
const recipePageRoutes = require('./app_server/routes/recipes');
const recipeApiRoutes = require('./app_api/routes/recipesApi');
const authRoutes = require('./app_server/routes/auth');
app.use('/', serverRoutes);
app.use('/recipes', recipePageRoutes);
app.use('/api/recipes', recipeApiRoutes);
app.use('/auth', authRoutes);
const PORT = process.env.PORT || 3000;
connectDB(process.env.MONGODB_URI)
  .then(() => { app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); })
  .catch((err) => { console.error('DB connection error:', err); process.exit(1);});
