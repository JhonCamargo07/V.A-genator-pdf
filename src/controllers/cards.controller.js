const utils = require('../utils/utils');
const personal = require('../models/Cards');

const cardsCtrl = {};

cardsCtrl.laborCard = async (req, res) => {
	res.status(200).json({ success: true, message: 'Todas las reservas', data: response });
};

cardsCtrl.familyCard = async (req, res) => {
	res.status(200).json({ success: false, message: 'Metodo si funcional' });
};

cardsCtrl.personalCard = async (req, res) => {
	const nameCard = personal.generatePersonalCard();

	utils.writeToFileInfo(
		`{"fecha": "${new Date().toLocaleDateString()}", "hora": "${new Date().toLocaleTimeString()}", "tipo_carta": "Referencia personal", "url": "http://${
			process.env.HOST
		}/public/pdf/${nameCard}.pdf"}`
	);

	res.status(200).json({
		success: true,
		message: 'Carta generada exitosamente',
		data: { url: `http://${process.env.HOST}/public/pdf/${nameCard}.pdf` },
	});
};

module.exports = cardsCtrl;
