const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs') 

const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const empleado_schema = new Schema({
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    usuario: req_string,
    clave: req_string,
    roles: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'rol' }
    ]
}, {
    timestamps: true
})

empleado_schema.statics.encrypted_password = (password) => {
    const salt = bcryptjs.genSaltSync()
    return bcryptjs.hashSync(password, salt)
}

empleado_schema.statics.compare_password = (password, received_password) => {
    return bcryptjs.compareSync(password, received_password)
}

const model = mongoose.model('empleado', empleado_schema)
module.exports = model
