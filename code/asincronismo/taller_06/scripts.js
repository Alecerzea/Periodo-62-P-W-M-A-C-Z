const URL_API = 'https://rickandmortyapi.com/api/character/'

var xhttp = null

function cargar_datos(personaje_id) {
    xhttp = new XMLHttpRequest()
    xhttp.open('GET', URL_API + personaje_id, true)
    xhttp.send()
    xhttp.onreadystatechange = obtener_respuesta
}

function obtener_respuesta() {
    if (xhttp && xhttp.readyState == 4 && xhttp.status == 200) {
        texto = JSON.parse(xhttp.responseText)
        
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
}

cargar_datos(1)
cargar_datos(2)
cargar_datos(3)
cargar_datos(4)