const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conectado a MongoDB');
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

// Rutas
const authRoutes = require('./routes/auth');
const docenteRoutes = require('./routes/docente');
app.use('/auth', authRoutes);
app.use('/docentes', docenteRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
