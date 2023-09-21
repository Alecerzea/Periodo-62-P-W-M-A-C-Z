import db from './db'
import config from './config'
import express from 'express'
import docente from './network/routes'
import { createRoles } from './components/lib/initialSetup'

db( config.DB_URL )

var app = express()
createRoles()

app.use(express.json())

app.use('/', docente)

app.listen( config.PORT )
console.log(`La aplicacion se encuentra arriba en http://localhost:${config.PORT}`)