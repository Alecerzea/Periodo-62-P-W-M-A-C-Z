const API = 'https://rickandmortyapi.com/api/character/'

var xhttp = null

function personaje(texto) {
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(texto.name)
    let h1 = document.createElement('h1')
    h1.appendChild(h1_texto)
    div.appendChild(h1)
    let img = document.createElement('img')
    img.src = texto.image
    div.appendChild(img)

    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild( div )
}

function cargar_datos(url_api) {
    return new Promise((resolve, reject) => {
        xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = function(e) {
            if (xhttp && xhttp.readyState == 4) {
                (xhttp.status == 200) 
                    ? resolve(JSON.parse(xhttp.responseText)) 
                    : reject(`[error]: ${url_api}`)
            }
        }
        xhttp.send()    
    })
}

function obtener_personaje(id) {
    cargar_datos( `${API}${id}` )
}

obtener_personaje(1)
    .then( (data) => {
        personaje(data)
        return obtener_personaje(2)
    } )
    .then( (data) => {
        personaje(data)
        return obtener_personaje(3)
    } )
    .then( (data) => {
        personaje(data)
        return obtener_personaje(4)
    } )
    .then( (data) => {
        personaje(data)
        return obtener_personaje(5)
    } )
