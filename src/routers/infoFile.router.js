const Router = require('express');

const { deleteElementAtInfoFile } = require('../controllers/infoFile.constroller');

const router = Router();

router.post('/api/delete', deleteElementAtInfoFile);

module.exports = router;
