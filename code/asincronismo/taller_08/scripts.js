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

function cargar_datos(url_api, fn) {
    xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = function(e) {
        if (xhttp && xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                fn(null, JSON.parse(xhttp.responseText))
            } else {
                const error = `[error]: ${url_api}`
                fn(error, null)
            }
        }
    }
    xhttp.send()
}

const invocacionAsincronica = function(error, data) {
    if (error)
        return console.error( error )

    for (let i=0; i<10; i++) {
        cargar_datos( API + data.results[i].id, function(error2, data2) {
            if (error2)
                return console.error( error2 )
            
            personaje(data2)
        })
    }
}

cargar_datos(API, invocacionAsincronica)
