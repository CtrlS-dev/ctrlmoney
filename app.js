require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const { userExtractor } = require('./middleware/auth');
const facturasRouter = require('./controllers/facturas');
const ventasRouter = require('./controllers/ventas');
const controlsRouter = require('./controllers/controls');
const logoutRouter = require('./controllers/logout');
const { MONGO_URI } = require('./config');


(async() => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.log(error);
  }
})()

app.use(cors());
app.use(express.json());
app.use(cookieParser());



// rutas frontend
app.use('/', express.static(path.resolve('views', 'home')));

app.use('/login', express.static(path.resolve('views', 'login')));

app.use('/signup', express.static(path.resolve('views', 'signup')));

app.use('/components', express.static(path.resolve('views', 'components')));

app.use('/images', express.static(path.resolve('img')));

app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));

app.use('/facturas', express.static(path.resolve('views', 'facturas')));

app.use('/controls', express.static(path.resolve('views', 'controls')));

app.use('/ventas', express.static(path.resolve('views', 'ventas')));


// app.use(morgan('tiny'));

// Rutas backend
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/facturas', userExtractor, facturasRouter);
app.use('/api/ventas', userExtractor, ventasRouter);
app.use('/api/controls', userExtractor, controlsRouter);
app.use('/api/logout', logoutRouter);
app.use(morgan('tiny'));

module.exports = app;