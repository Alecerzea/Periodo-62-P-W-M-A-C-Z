const express = require("express");
const router = express.Router();
const Teacher = require("./../models/models");


router.get("/", async (req, res) => {

  const teachers = await Teacher.find();
  res.json(teachers);
});


router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const teacher = await Teacher.findById(id);
  res.json(teacher);
});

router.post("/", async (req, res) => {
  const data = req.body;
  const teacher = new Teacher(data);
  await teacher.save();
  res.json(teacher);
});


router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const teacher = await Teacher.findByIdAndUpdate(id, data, {
    new: true,
  });

  res.json(teacher);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Teacher.findByIdAndDelete(id);
  const teacher = await Teacher.findById(id);
  if (teacher) {
    res.status(404).json({ message: "Docente no encontrado" });
  } else {
    res.status(204).send();
  }
});