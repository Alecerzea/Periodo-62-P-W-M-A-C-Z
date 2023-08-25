var xhttp = false

function consultar(url) {
    xhttp = false
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest()    
    }
    if (!xhttp) {
        console.log('[error] No es posible crear una instancia de XMLHttpRequest.')
        return false
    }
    xhttp.onreadystatechange = respuesta
    xhttp.open('GET', url, true)
    xhttp.send()
}

function respuesta() {
    if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
            dato = JSON.parse(xhttp.responseText)
            console.log(dato)

            let personaje = document.getElementById('personaje')
            personaje.innerHTML = `<h1>${dato.name}</h1>
            <img src='${dato.image}' />`
        } else {
            console.log('[error] Hubo problemas con la conexion.')
        }
    }
}

const URL = 'https://rickandmortyapi.com/api/character/1'

consultar(URL)