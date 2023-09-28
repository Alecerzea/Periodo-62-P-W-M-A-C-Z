const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const docenteRoutes = require('./routes/docenteRoutes');
const tituloRoutes = require('./routes/tituloRoutes');

const app = express();

mongoose.connect('mongodb+srv://alecerzea:miguelalejandro@cluster1.y8leh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/docentes', docenteRoutes);
app.use('/titulos', tituloRoutes);

app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));