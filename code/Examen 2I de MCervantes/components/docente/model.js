const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuario_schema = new Schema({
    docente: String,
    clave: String,
    nombre: String,
    apellido: String,
    telefono: String,
    correoelectronico: String,
    fecharegistro : String,
}) 

const model = mongoose.model('Docente', Docente_schema)
module.exports = model