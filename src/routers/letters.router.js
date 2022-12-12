const Router = require('express');
const { personalCard, laborCard, familyCard } = require('./../controllers/cards.controller.js');

const router = Router();

router.post('/api/labor-card', laborCard);
router.post('/api/family-card', familyCard);
router.all('/api/personal-card', personalCard);

router.use((req, res) => {
	res.status(404).json({ success: false, message: 'Page no found' });
});

module.exports = router;
