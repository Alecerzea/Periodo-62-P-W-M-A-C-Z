const express = require('express');
const router = express.Router();
const docenteController = require('../controllers/controllers');


router.get('/', docenteController.getAllDocentes);
exports.getAllDocentes = async (req, res) => {
    const docentes = await Docente.find();
    res.status(200).json(docentes);
  };

router.get('/:id', docenteController.getDocente);
exports.getDocente = async (req, res) => {
    const docente = await Docente.findById(req.params.id);
    res.status(200).json(docente);
  };

router.post('/', docenteController.createDocente);
exports.createDocente = async (req, res) => {
    const newDocente = new Docente(req.body);
    const docente = await newDocente.save();
    res.status(201).json(docente);
  };

router.put('/:id', docenteController.updateDocente);
exports.updateDocente = async (req, res) => {
    const updatedDocente = await Docente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedDocente);
  };

router.delete('/:id', docenteController.deleteDocente);
exports.deleteDocente = async (req, res) => {
    await Docente.findByIdAndDelete(req.params.id);
    res.status(204).send();
  };

module.exports = router;

const Docente = require('../models/models');

