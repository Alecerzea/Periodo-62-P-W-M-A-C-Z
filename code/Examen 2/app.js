// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const docenteRouter = require('./routes/docente');

const app = express();

// Configuración de la base de datos
require('./db');

// Middleware para procesar JSON
app.use(bodyParser.json());

// Rutas para CRUD de docentes
app.use('/api/docentes', docenteRouter);

// Configuración de la vista HTML (EJS)
app.set('view engine', 'ejs');

// Página HTML para mostrar los datos de los docentes
app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
