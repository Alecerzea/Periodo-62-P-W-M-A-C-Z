const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const docenteRouter = require('./routes/docente');

const app = express();


require('./db');


app.use(bodyParser.json());


app.use('/api/docentes', docenteRouter);


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
