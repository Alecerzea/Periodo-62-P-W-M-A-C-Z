const mongoose = require('mongoose');

const docenteSchema = new mongoose.Schema({
  cedula: String,
  nombres: String,
  apellidos: String,
  usuario: String,
  clave: String
});

module.exports = mongoose.model('Docente', docenteSchema);