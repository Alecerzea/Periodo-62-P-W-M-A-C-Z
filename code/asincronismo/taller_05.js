async function saludar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hola ${nombre}.`)
            resolve(nombre)
        }, 1000) 
    })
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Bla, bla, bla...`)
            resolve(nombre)
        }, 1000) 
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Adios ${nombre}.`)
            console.log(`Terminando conversacion...`)
            resolve(nombre)
        }, 1000) 
    })
}

async function main() {
    console.log('Iniciando conversacion...')
    let nombre = await saludar('Guillermo')
    await hablar( nombre )
    await adios( nombre ) 
}

main()