const Model = require('./model')

async function agregarUsuario( dato ) {
    const resultado = await new Model( dato )
    return resultado.save()
}

async function obtenerUsuario( filtro ) {
    let mi_filtro = {}

    if (filtro.nombre != null) {
        mi_filtro = { nombre: filtro.nombre }
    }
    const resultado = await Model.find( mi_filtro )
    console.log(resultado)
    return resultado
}

module.exports = {
    agregar:agregarUsuario,
    obtener:obtenerUsuario,
}