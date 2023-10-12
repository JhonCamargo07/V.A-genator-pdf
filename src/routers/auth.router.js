const Router = require('express');
const { join } = require('path');

const { login, isAutorized } = require('../controllers/auth.controller.js');

const utils = require('../utils/utils.js');

const router = Router();

router.post('/api/login', login);

// Authorizations
router.use(isAutorized);

module.exports = router;
