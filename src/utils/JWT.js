const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

exports.login = () => {
	const payload = {
		name: process.env.NAME,
		email: process.env.JWT_EMAIL,
		userId: process.env.JWT_NAME,
	};

	// Genera el JWT
	return jwt.sign(payload, secret, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
	isTrue = false;
	jwt.verify(token, secret, (err) => {
		if (!err) isTrue = true;
	});
	return isTrue;
};
