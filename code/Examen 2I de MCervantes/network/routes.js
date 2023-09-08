const usuario = require('../components/Docente/interface')

const routes = function( server ) {
    server.use('/docente', docente)
}

module.exports = routes;