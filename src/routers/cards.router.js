const Router = require('express');
const { join } = require('path');
const { personalCard, laborCard, familyCard } = require('../controllers/cards.controller.js');

const router = Router();

router.post('/api/labor-card', laborCard);
router.post('/api/family-card', familyCard);
router.all('/api/personal-card', personalCard);

router.get('/public/*', (req, res) => {
	res.status(200).sendFile(join(__dirname, '../public/info-cards.json'));
});

router.use((req, res) => {
	res.status(404).json({ success: false, message: 'Page no found' });
});

module.exports = router;
