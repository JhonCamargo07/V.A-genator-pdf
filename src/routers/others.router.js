const Router = require('express');
const { resetToken } = require('../controllers/auth.controller');

const router = Router();

router.post('/api/resettoken', resetToken);

// Error 404
router.use((req, res) => {
	res.status(404).json({ success: false, message: 'Page no found' });
});

module.exports = router;
