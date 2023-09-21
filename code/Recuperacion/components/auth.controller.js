import jwt from "jsonwebtoken";
import Docente from "./docente/model.js";
import Role from "./roles/model.js";
import { SECRET } from "../config.js";

export const signupHandler = async (req, res) => {
  try {
    const { cedula, nombre, apellido, usuario, clave, roles } = req.body;

    // Creating a new User Object
    const newdocente = new Docente({
        cedula,
        nombre,
        apellido,
        usuario,
        clave
      });

    // checking for roles
    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newdocente.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "docente" });
      newdocente.roles = [role._id];
    }

    // Saving the User Object in Mongodb
    const savedDocente = await newdocente.save();

    // Create a token
    const token = jwt.sign({ id: savedDocente._id }, SECRET, {
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const signinHandler = async (req, res) => {
  try {
    // Request body email can be an email or username
    const docenteFound = await Docente.findOne({ usuario: req.body.usuario }).populate(
      "roles"
    );

    if (!docenteFound) return res.status(400).json({ message: "Docente Not Found" });

    const matchPassword = await Docente.comparePassword(
      req.body.clave,
      docenteFound.clave
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: docenteFound._id }, SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
