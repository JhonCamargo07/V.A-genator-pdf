const Router = require('express');

const { deleteCard, deleteAllCards } = require('../controllers/infoFile.constroller');

const router = Router();

// Eliminar una sola carta
router.delete('/api/deleteCard', deleteCard);

// Eliminar todas las cartas hecha hasta el momento
router.delete('/api/deleteAllCards', deleteAllCards);

module.exports = router;
