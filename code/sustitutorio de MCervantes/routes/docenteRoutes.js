const express = require('express');
const docenteController = require('../controllers/docenteController');
const router = express.Router();

router.get('/', docenteController.getDocentes);
router.post('/', docenteController.createDocente);

module.exports = router;