// Tipos de funciones

// Funcion declarativa
function imprimir_resultado() {
    console.log( `Hola mundo.` )
}

imprimir_resultado()

// Funcion expresiva, o tambien conocida como anonima
const suma = function(a, b) {
    return (a + b)
}

let total = suma(10, 20)
console.log(`La suma es: ${total}`)

// Funcion flecha
const suma2 = (a, b) => a + b
let total2 = suma2(100, 200)
console.log(`La suma es: ${total2}`)

const suma3 = (a, b) => {
    let total = a + b
    console.log(`La suma es: ${total}`)
}
suma3(200, 200)


