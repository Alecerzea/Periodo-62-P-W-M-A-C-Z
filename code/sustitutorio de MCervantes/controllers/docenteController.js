const Docente = require('../models/Docente');

exports.getDocentes = async (req, res) => {
  const docentes = await Docente.find();
  res.send(docentes);
};

exports.createDocente = async (req, res) => {
  const docente = new Docente(req.body);
  await docente.save();
  res.send(docente);
};