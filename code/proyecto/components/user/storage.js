const Model = require('./model')




function agregarUsuario( dato ){
 const resultado = new module(dato)
 return resultado.save()
}

module.exports = {
    agregar:agregarUsuario
}