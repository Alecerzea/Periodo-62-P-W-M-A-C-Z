const Storage = require('./storage')
const express = require('express')
const controller = require('./controller')

const routes = express.Router()


function agregarUsuario( dato ){
    return new Promise((resolve, reject) => {
     resolve( Storage.agregar(dato))
    })
}

module.exports = {
    agregarUsuario,
}