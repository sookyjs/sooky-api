import { Router } from "express"
import admin from "./routes/admin/index.js"
import store from "./routes/store/index.js"
import auth from "./routes/auth/index.js"

const router = Router();

// Montez les routes sous les bons préfixes
router.use("/admin", admin);
router.use("/auth", auth); // Utilisation correcte du routeur auth
router.use("/store", store);

export default router;