const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('./middleware');
const Teacher = require('./models');

router.get('/teachers', authenticate, authorize(['admin', 'teacher']), async (req, res) => {
  const teachers = await Teacher.find({});
  res.send(teachers);
});

router.post('/teachers', authenticate, authorize(['admin']), async (req, res) => {
  const teacher = new Teacher(req.body);
  await teacher.save();
  res.send(teacher);
});

router.put('/teachers/:id', authenticate, authorize(['admin']), async (req, res) => {
  const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body);
  res.send(teacher);
});

router.delete('/teachers/:id', authenticate, authorize(['admin']), async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.send({ message: 'Teacher deleted' });
});

module.exports = router;

