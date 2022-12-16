const Router = require('express');
const { join } = require('path');

const { login, isAutorized, validateSession } = require('./../controllers/auth.controller.js');
const { personalCard, comunityCard, familyCard } = require('./../controllers/cards.controller.js');

const utils = require('./../utils/utils');

const router = Router();

// Authorizations

router.post('/api/login', login);

router.use(isAutorized);
router.use(validateSession);

// Cards
router.post('/api/family-card', familyCard);
router.post('/api/comunity-card', comunityCard);
router.post('/api/personal-card', personalCard);

// Files
router.get('/public/img/:file', (req, res) => {
	res.status(200).sendFile(join(__dirname, `../public/img/${req.params.file}`));
});

router.get('/public/pdf/:file', (req, res) => {
	res.status(200).sendFile(join(__dirname, `../public/pdf/${req.params.file}`));
});

router.get('/public/*', (req, res) => {
	console.log(req.params.file);
	res.status(200).sendFile(join(__dirname, `../public/${utils.getFileNameInfo()}`));
});

// Error 404
router.use((req, res) => {
	res.status(404).json({ success: false, message: 'Page no found' });
});

module.exports = router;
