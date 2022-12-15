const Router = require('express');
const { join } = require('path');

const { login, isAutorized } = require('./../controllers/auth.controller.js');
const { personalCard, comunityCard, familyCard } = require('./../controllers/cards.controller.js');

const utils = require('./../utils/utils');

const router = Router();

router.post('/api/login', login);

router.use(isAutorized);

router.post('/api/family-card', familyCard);
router.post('/api/comunity-card', comunityCard);
router.post('/api/personal-card', personalCard);

router.get('/public/*', (req, res) => {
	res.status(200).sendFile(join(__dirname, `../public/${utils.getFileNameInfo()}`));
});

router.use((req, res) => {
	res.status(404).json({ success: false, message: 'Page no found' });
});

module.exports = router;
