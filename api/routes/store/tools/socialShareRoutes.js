import express from 'express';
import SocialShareService from '../../../../services/socialShareService.js';
import authentication from '../../../middlewares/authentication.js';

const router = express.Router();

// POST - Créer un nouveau lien de partage SocialShare
const createShareLink = async (req, res) => {
  try {
    const newShareLink = await SocialShareService.createShareLink(req.body);
    res.status(201).json(newShareLink);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET - Récupérer un lien de partage SocialShare par ID
const getShareLinkById = async (req, res) => {
  try {
    const shareLink = await SocialShareService.getShareLink(req.params.id);
    if (!shareLink) return res.status(404).json({ message: 'Lien non trouvé' });
    res.json(shareLink);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH - Mettre à jour un lien de partage SocialShare par ID
const updateShareLink = async (req, res) => {
  try {
    const updatedShareLink = await SocialShareService.updateShareLink(req.params.id, req.body);
    if (!updatedShareLink) return res.status(404).json({ message: 'Lien non trouvé' });
    res.json({ message: 'Lien modifié', updatedShareLink });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE - Supprimer un lien de partage SocialShare par ID
const deleteShareLinkById = async (req, res) => {
  try {
    const shareLink = await SocialShareService.deleteShareLink(req.params.id);
    if (!shareLink) return res.status(404).json({ message: 'Lien non trouvé' });
    res.json({ message: 'Lien supprimé' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET - Lister tous les liens de partage SocialShare
const getAllShareLinks = async (req, res) => {
  try {
    const shareLinks = await SocialShareService.listAll();
    res.json(shareLinks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Appliquez le middleware d'authentification et les fonctions nommées
router.post('/social/share-link', authentication, createShareLink);
router.get('/social/share-link/:id', authentication, getShareLinkById);
router.patch('/social/share-link/:id', authentication, updateShareLink);
router.delete('/social/share-link/:id', authentication, deleteShareLinkById);
router.get('/social/share-links', authentication, getAllShareLinks);

export default router;
