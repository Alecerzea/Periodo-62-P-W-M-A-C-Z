const express = require('express');
const passport = require('passport');
const Docente = require('../models/docente');

const router = express.Router();

// Middleware de autenticación JWT
const requireAuth = passport.authenticate('jwt', { session: false });

// Middleware de autorización de roles
const requireAdmin = (req, res, next) => {
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Acceso no autorizado' });
  }
};

// Lista de docentes (cualquier usuario autenticado puede acceder)
router.get('/', requireAuth, (req, res) => {
  Docente.find({}, (err, docentes) => {
    if (err) res.status(500).json({ error: err.message });
    res.json(docentes);
  });
});

// Crear docente (solo admin)
router.post('/', requireAuth, requireAdmin, (req, res) => {
  // ... código para crear un docente
});

// Actualizar docente (solo admin)
router.put('/:id', requireAuth, requireAdmin, (req, res) => {
  // ... código para actualizar un docente
});

// Eliminar docente (solo admin)
router.delete('/:id', requireAuth, requireAdmin, (req, res) => {
  // ... código para eliminar un docente
});

module.exports = router;
