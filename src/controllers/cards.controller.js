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
		`{\n\t\t"fecha": "${new Date().toLocaleDateString()}", \n\t\t"hora": "${new Date().toLocaleTimeString()}", \n\t\t"tipo_carta": "Referencia personal", \n\t\t"url": "http://${
			process.env.HOST
		}/public/pdf/${nameCard}.pdf"\n\t}`
	);

	res.status(200).json({
		success: true,
		message: 'Carta generada exitosamente',
		data: { url: `http://${process.env.HOST}/public/pdf/${nameCard}.pdf` },
	});
};

module.exports = cardsCtrl;
