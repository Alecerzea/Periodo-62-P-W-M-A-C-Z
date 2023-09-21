import jwt from "jsonwebtoken";
import { SECRET } from "../config";
import Docente from "../components/docente/model";
import Role from "../components/roles/model";

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.docenteId = decoded.id;

    const docente = await Docente.findById(req.docenteId, { password: 0 });
    if (!docente) return res.status(404).json({ message: "No docente found" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const docente = await Docente.findById(req.docenteId);
    const roles = await Role.find({ _id: { $in: docente.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Admin Role!" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};
