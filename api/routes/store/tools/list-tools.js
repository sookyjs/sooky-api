import express from 'express';
import SocialShareService from '../../../../services/socialShareService.js';
// Importez ici d'autres services pour différents types d'outils si nécessaire

const router = express.Router();

// GET - Lister tous les outils (y compris Social Share Links)
router.get('/all-tools', async (req, res) => {
  try {
    const socialShareLinks = await SocialShareService.listAll(); // Liste tous les Social Share Links

    // Vous pouvez ajouter ici d'autres appels pour lister différents types d'outils, par exemple :
    // const otherToolLinks = await OtherToolService.listAll();

    res.json({
      socialShareLinks,
      // otherTools: otherToolLinks,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
