const express = require('express');
const tituloController = require('../controllers/tituloController');
const router = express.Router();

router.get('/',tituloController.getTitulos);
router.post('/',tituloController.createTitulo);

module.exports=router;