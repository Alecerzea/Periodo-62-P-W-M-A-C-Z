import Docente from "./model.js";
import Role, { ROLES } from "../roles/model.js";

export const createDocente = async (req, res) => {
  try {
    const { cedula, nombre, apellido, usuario, clave } = req.body;

    const rolesFound = await Role.find({ name: { $in: ROLES } });

    // creating a new User
    const docente = new Docente({
      cedula,
      nombre,
      apellido,
      usuario,
      clave,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    docente.clave = await Docente.encryptPassword(docente.clave);

    // saving the new user
    const savedDocente = await docente.save();

    return res.status(200).json({
      _id: savedDocente._id,
      cedula: savedDocente.cedula,
      nombre: savedDocente.nombre,
      apellido: savedDocente.apellido,
      usuario: savedDocente.usuario,
      clave: savedDocente.clave,
      roles: savedDocente.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getDocentes = async (req, res) => {
  const docentes = await Docente.find();
  return res.json(docentes);
};

export const getDocenteById = async (req, res) => {
  const docente = await Docente.findById(req.params.docenteId);
  return res.json(docente);
};

export const updateDocenteById = async (req, res) => {
  const updateDocente = await Docente.findByIdAndUpdate(req.params.docenteId, req.body, {
    new: true
  })
  res.status(200).json(updateDocente)
}

export const deleteDocenteById = async (req, res) => {
  const {docenteId} = req.params
  const deleteDocente = await Docente.findByIdAndDelete(docenteId)
  res.status(204).json()
}