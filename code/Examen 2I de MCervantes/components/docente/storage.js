const { eliminarDocente } = require('./controller')
const Model = require('./model')

async function agregarDocente( dato ) {
    const resultado = await new Model( dato )
    return resultado.save()
}

async function obtenerDocente( filtro ) {
    let mi_filtro = {}

    if (filtro.docente != null) {
        mi_filtro = { usuario: filtro.docente }
    }
    const resultado = await Model.find( mi_filtro )
    return resultado
}

async function actualizarUsuario(dato) {
    const nuevo_objeto = await Model.findOne( { usuario: dato.docente } )

    nuevo_objeto.usuario = dato.docente
    nuevo_objeto.nombre = dato.nombre
    nuevo_objeto.apellido = dato.apellido
    nuevo_objeto.telefono = dato.telefono
    nuevo_objeto.correoelectronico = dato.correoelectronico
    nuevo_objeto.fecharegistro = dato.fecharegistro
    
    const resultado = await nuevo_objeto.save()
    return resultado
}

async function eliminarUsuario(dato) {
    const resultado = await Model.deleteOne( {docente: dato.docente} )
    return resultado
}

module.exports = {
    agregar:agregarDocente,
    obtener:obtenerDocente,
    actualizar:actualizarDocente,
    eliminar:eliminarDocente
}