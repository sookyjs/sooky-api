import { Router } from "express";
import registerUser from "./sign-up.js";
import loginUser from "./sign-in.js";

const router = Router();

// Définition des routes
router.post("/sign-in", loginUser);
router.post("/sign-up", registerUser);

export default router;
