const jwt = require('./../utils/JWT');

const ctrlAuth = {};

ctrlAuth.login = (req, res) => {
	if (!req.body.email || !req.body.pass) {
		return res.status(200).json({ success: false, message: 'Los datos no pueden ser nulos' });
	}

	if (req.body.email != process.env.USER || req.body.pass != process.env.PASS) {
		return res
			.status(401)
			.json({ success: false, message: 'Las credenciales son incorrectas' });
	}

	const token = jwt.login();

	res.status(200).json({ success: true, message: 'Inicio de sesi\u00f3n exitoso', token: token });
};

ctrlAuth.isAutorized = (req, res, next) => {
	const authorization = req.get('Authorization');

	if (!authorization) {
		return res.status(401).json({ success: false, message: 'Debe iniciar sesi\u00f3n' });
	}

	if (jwt.verifyToken(authorization)) {
		return next();
	}

	return res.status(401).json({ success: false, message: 'Debe iniciar sesi\u00f3n' });
};

ctrlAuth.resetToken = (req, res) => {
	return res.status(200).json({
		success: true,
		message: 'Inicio de sesi\u00f3n exitoso',
		token: jwt.login(),
	});
};

module.exports = ctrlAuth;
