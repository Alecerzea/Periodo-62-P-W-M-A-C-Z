const express = require('express');
const router = express.Router();
const Docente = require('../docente');

router.get('/', async (req, res) => {
  try {
    const docentes = await Docente.find();
    res.json(docentes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/', async (req, res) => {
  const docente = new Docente(req.body);

  try {
    const nuevoDocente = await docente.save();
    res.status(201).json(nuevoDocente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



module.exports = router;
