const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const docenteRoutes = require('./src/routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://alecerzea:miguelalejandro@cluster1.y8leh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(passport.initialize());

app.use('/src/routes/routes', routes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});