const moongose = require('mongoose')
const Schema = moongose.Schema

const usuario_Schema = new Schema({
    nombre: String,
    apellido: String,
})

const model = moongose.model('Usuario', usuario_Schema)
module.exports = model

