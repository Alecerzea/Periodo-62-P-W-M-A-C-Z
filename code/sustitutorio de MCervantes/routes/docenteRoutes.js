const express = require('express');
const docenteController = require('../controllers/docenteController');
const router = express.Router();

router.get('/',docenteController.getDocentes);
router.post('/',docenteController.createDocentes);

modules.exports = router;