// ECMAScript 6-8
// Alcance de las variables

const TEXTO_ALTERNATIVO = 'Un gato'

var texto = 'Universidad Politecnica Salesiana'

function imprimir() {
    let texto2 = 'Programacion y Plataformas Web'
    TEXTO_ALTERNATIVO = 'otro gato'
    console.log(texto2)
    console.log(texto)
}

imprimir()

TEXTO_ALTERNATIVO = 'otro gato...'

console.log(texto)

//console.log(texto2)


