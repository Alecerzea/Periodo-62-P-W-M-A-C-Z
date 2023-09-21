import {Router} from 'express'
import * as docenteCtrl from '../components/docente/controller'
import * as authCtrl from '../components/auth.controller.js'
import {verifyToken, isAdmin} from '../middlewares/authJwt'
import {checkExistingUser, checkExistingRole} from '../middlewares/verifySignup'
const router = Router()

router.post('/docente', docenteCtrl.createDocente)
router.get('/docente', docenteCtrl.getDocentes)
router.get('/docente/:docenteId', docenteCtrl.getDocenteById)
router.put('/docente/:docenteId', docenteCtrl.updateDocenteById)
router.delete('/docente/:docenteId', docenteCtrl.deleteDocenteById)
router.post('/docente/signin', authCtrl.signupHandler)
router.post('/docente/signup', authCtrl.signinHandler)


export default router