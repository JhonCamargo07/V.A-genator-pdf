const Router = require('express');

const router = Router();

// Error 404
router.use((req, res) => {
	res.status(404).json({ success: false, message: 'Page no found' });
});

module.exports = router;
