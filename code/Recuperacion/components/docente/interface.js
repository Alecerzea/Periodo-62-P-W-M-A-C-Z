import express from "express";
import { createDocente } from "./controller.js";
import { isAdmin, verifyToken } from "../../middlewares/authJwt.js";
import { checkExistingUser } from "../../middlewares/verifySignup.js";

const router = express.Router();

router.post("/docente", [verifyToken, isAdmin, checkExistingUser], createDocente);

export default router;