import { Router } from 'express';
import socialShareRoutes from './tools/socialShareRoutes.js';
import listToolsRoutes from './tools/list-tools.js';

const router = Router();

router.use('/tools', socialShareRoutes);
router.use('/tools', listToolsRoutes);

export default router;