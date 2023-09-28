const mongoose = require('mongoose');
const Docente = require('./Docente');

const TituloSchema = new mongoose.Schema({
  codigo: String,
  nombre: String,
  universidad: String,
  es_maestria: Boolean,
  es_doctorado: Boolean,
  docente: { type: mongoose.Schema.Types.ObjectId, ref: 'Docente' },
});

const Titulo = mongoose.model('Titulo', TituloSchema);

module.exports = Titulo;