import { Router } from "express";
import socialShareRoutes from "./socialShareRoutes.js"; // Renommé pour plus de clarté
import listToolsRoutes from "./list-tools.js"; // Liste tous les outils

const router = Router();

// Monte les routes spécifiques à Social Share sous `/tools`
router.use(socialShareRoutes);

// Monte la route pour lister tous les outils
router.use(listToolsRoutes);

export default router;
