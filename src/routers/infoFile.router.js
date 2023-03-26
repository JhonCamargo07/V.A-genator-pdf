const Router = require('express');

const { deleteCard } = require('../controllers/infoFile.constroller');

const router = Router();

router.delete('/api/deleteCard', deleteCard);

module.exports = router;
