const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');


router.get('/', controller.getAllDocentes);
exports.getAllDocentes = async (req, res) => {
    const docentes = await Docente.find();
    res.status(200).json(docentes);
  };

router.get('/:id', controller.getDocente);
exports.getDocente = async (req, res) => {
    const docente = await Docente.findById(req.params.id);
    res.status(200).json(docente);
  };

router.post('/', controller.createDocente);
exports.createDocente = async (req, res) => {
    const newDocente = new Docente(req.body);
    const docente = await newDocente.save();
    res.status(201).json(docente);
  };

router.put('/:id', controller.updateDocente);
exports.updateDocente = async (req, res) => {
    const updatedDocente = await Docente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedDocente);
  };

router.delete('/:id', controller.deleteDocente);
exports.deleteDocente = async (req, res) => {
    await Docente.findByIdAndDelete(req.params.id);
    res.status(204).send();
  };

module.exports = router;

const Docente = require('../models/models');

