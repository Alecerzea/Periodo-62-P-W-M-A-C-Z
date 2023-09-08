const storage = require('./storage')

function agregarDocente( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

function obtenerDocente( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}

function actualizarDocente( dato ) {
    return new Promise((resolve, reject) => {
        let docente = {
            nombre: dato.nombre,
            apellido: dato.apellido,
            telefono: dato.telefono,
            correoelectronico: dato.correoelectronico,
            fecharegistro: dato.fecharegistro,
        }
        resolve( storage.actualizar( docente ) )
    })
}

function eliminarDocente( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.eliminar( dato ) )
    })    
}

module.exports = {
    agregarDocente,
    obtenerDocente,
    actualizarDocente,
    eliminarDocente
}