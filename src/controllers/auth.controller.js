const jwt = require('./../utils/JWT');

const ctrlAuth = {};

ctrlAuth.login = (req, res) => {
	console.log('ENTRO');
	if (!req.body.email || !req.body.pass) {
		return res.json({ success: false, message: 'Los datos no pueden ser nulos' });
	}

	if (req.body.email != process.env.USER || req.body.pass != process.env.PASS) {
		return res.json({ success: false, message: 'Las credenciales son incorrectas' });
	}

	const token = jwt.login();
	res.json({ success: true, message: 'Inicio de sesi\u00f3n exitoso', token: token });
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

module.exports = ctrlAuth;
