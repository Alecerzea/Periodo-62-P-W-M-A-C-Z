const mongoose = require('mongoose');

const Titulo = mongoose.model('Titulo', new mongoose.Schema({
  codigo: String,
  nombre: String,
  universidad: String,
  es_maestria: Boolean,
  es_doctorado: Boolean,
  docente: { type: mongoose.Schema.Types.ObjectId, ref: 'Docente' },
}));

module.exports = Titulo;