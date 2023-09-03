const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

import { auth_jwt } from '../../middlewares'

const route = express.Router()

route.get('/', auth_jwt.verify_token, function(req, res) {
    const filtro_empleado = req.query.cedula || null
    controller.get_empleado( filtro_empleado )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

route.post('/', [auth_jwt.verify_token, auth_jwt.is_admin], function(req, res) {
    controller.add_empleado( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 500) )
})

route.put('/', [auth_jwt.verify_token, auth_jwt.is_admin], function(req, res) {
    controller.update_empleado( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

route.delete('/', [auth_jwt.verify_token, auth_jwt.is_admin], function(req, res) {
    controller.delete_empleado( req.query.cedula )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

module.exports = route