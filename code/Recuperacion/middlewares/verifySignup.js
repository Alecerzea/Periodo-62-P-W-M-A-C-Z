import Docente from "../components/docente/model";
import { ROLES } from "../components/roles/model";

export const checkExistingUser = async (req, res, next) => {
  try {
    const docenteFound = await Docente.findOne({ usuario: req.body.usuario });
    if (docenteFound)
      return res.status(400).json({ message: "The docente already exists" });
    
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkExistingRole = (req, res, next) => {
  req.body.roles.find();

  if (!req.body.roles) return res.status(400).json({ message: "No roles" });

  for (let i = 0; i < req.body.roles.length; i++) {
    if (!ROLES.includes(req.body.roles[i])) {
      return res.status(400).json({
        message: `Role ${req.body.roles[i]} does not exist`,
      });
    }
  }

  next();
};
