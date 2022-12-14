const utils = require('../utils/utils');
const personal = require('../models/Cards');
const Personal = require('./../models/Personal');

const cardsCtrl = {};

cardsCtrl.laborCard = async (req, res) => {
	res.status(200).json({ success: true, message: 'Todas las reservas' });
};

cardsCtrl.familyCard = async (req, res) => {
	res.status(200).json({ success: true, message: 'Metodo si funcional' });
};

cardsCtrl.personalCard = async (req, res) => {
	if (
		!req.body.namePeopleCertifier ||
		!req.body.phonePeopleCertifier ||
		!req.body.documentPeopleCertifier ||
		!req.body.documentTypePeopleCertifier ||
		!req.body.prefixDocumentTypePeopleCertifier ||
		!req.body.isManPeopleCertifier === undefined ||
		!req.body.namePeopleCertified ||
		!req.body.documentPeopleCertified ||
		!req.body.documentTypePeopleCertified ||
		!req.body.isManPeopleCertified === undefined ||
		!req.body.acquaintanceTime
	) {
		return res.status(200).json({ success: false, message: 'Los datos no pueden ser nulos' });
	}

	const {
		namePeopleCertifier,
		phonePeopleCertifier,
		documentPeopleCertifier,
		documentTypePeopleCertifier,
		originDocumentPeopleCertifier,
		prefixDocumentTypePeopleCertifier,
		isManPeopleCertifier,
		namePeopleCertified,
		documentPeopleCertified,
		documentTypePeopleCertified,
		originDocumentPeopleCertified,
		isManPeopleCertified,
		acquaintanceTime,
	} = req.body;

	const nameCard = personal.generatePersonalCard(
		new Personal(
			namePeopleCertifier,
			phonePeopleCertifier,
			documentPeopleCertifier,
			documentTypePeopleCertifier,
			originDocumentPeopleCertifier,
			prefixDocumentTypePeopleCertifier,
			isManPeopleCertifier,
			namePeopleCertified,
			documentPeopleCertified,
			documentTypePeopleCertified,
			originDocumentPeopleCertified,
			isManPeopleCertified,
			acquaintanceTime
		)
	);

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
