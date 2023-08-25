var contactos = []

function guardar() {
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let correo = document.getElementById('correo').value

    alert( nombre + ' ' + apellido + ' - ' + correo )
    
    let objeto = new contacto( nombre, apellido, correo )

    contactos.push( objeto )
}

function contacto(nombre, apellido, correo) {
    this.nombre = nombre
    this.apellido = apellido
    this.correo = correo
}