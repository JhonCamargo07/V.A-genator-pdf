const utils = require('./../utils/utils');
const personal = require('./../models/GeneratorPdf');
const Personal = require('./../models/InfoCards');

const cardsCtrl = {};

cardsCtrl.comunityCard = (req, res) => {
	if (
		// !req.body.namePeopleCertifier ||
		// !req.body.phonePeopleCertifier ||
		// !req.body.documentPeopleCertifier ||
		// !req.body.documentTypePeopleCertifier ||
		// !req.body.prefixDocumentTypePeopleCertifier ||
		// !req.body.isManPeopleCertifier === undefined ||
		!req.body.namePeopleCertified ||
		!req.body.documentPeopleCertified ||
		!req.body.documentTypePeopleCertified ||
		!req.body.isManPeopleCertified === undefined ||
		!req.body.addresPeopleCertified ||
		!req.body.phonePeopleCertified ||
		!req.body.homePeopleCertified
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
		phonePeopleCertified,
		documentPeopleCertified,
		documentTypePeopleCertified,
		originDocumentPeopleCertified,
		isManPeopleCertified,
		addresPeopleCertified,
		homePeopleCertified,
		acquaintanceTime,
	} = req.body;

	const nameCard = personal.generateComunityCard(
		new Personal(
			namePeopleCertifier,
			phonePeopleCertifier,
			documentPeopleCertifier,
			documentTypePeopleCertifier,
			originDocumentPeopleCertifier,
			prefixDocumentTypePeopleCertifier,
			isManPeopleCertifier,
			namePeopleCertified,
			phonePeopleCertified,
			documentPeopleCertified,
			documentTypePeopleCertified,
			originDocumentPeopleCertified,
			isManPeopleCertified,
			addresPeopleCertified,
			homePeopleCertified,
			acquaintanceTime
		)
	);

	utils.createQrImage(nameCard);

	utils.writeToFileInfo(
		`{\n\t\t"fecha": "${new Date().toLocaleDateString()}", \n\t\t"hora": "${new Date().toLocaleTimeString()}", \n\t\t"tipo_carta": "Referencia JAC Recuerdo", \n\t\t"url": "http://${
			process.env.HOST
		}/public/pdf/${nameCard}.pdf", \n\t\t"qr": "http://${process.env.HOST}/public/img/${nameCard}.png"\n\t}`
	);

	res.status(200).json({
		success: true,
		message: 'Carta generada exitosamente',
		data: {
			qr: `http://${process.env.HOST}/public/img/${nameCard}.png`,
			url: `http://${process.env.HOST}/public/pdf/${nameCard}.pdf`,
		},
	});
};

cardsCtrl.familyCard = (req, res) => {
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
		!req.body.isManPeopleCertified === undefined
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

	const nameCard = personal.generateFamilyCard(
		new Personal(
			namePeopleCertifier,
			phonePeopleCertifier,
			documentPeopleCertifier,
			documentTypePeopleCertifier,
			originDocumentPeopleCertifier,
			prefixDocumentTypePeopleCertifier,
			isManPeopleCertifier,
			namePeopleCertified,
			undefined,
			documentPeopleCertified,
			documentTypePeopleCertified,
			originDocumentPeopleCertified,
			isManPeopleCertified,
			undefined,
			undefined,
			acquaintanceTime
		)
	);

	utils.createQrImage(nameCard);

	utils.writeToFileInfo(
		`{\n\t\t"fecha": "${new Date().toLocaleDateString()}", \n\t\t"hora": "${new Date().toLocaleTimeString()}", \n\t\t"tipo_carta": "Referencia familiar", \n\t\t"url": "http://${
			process.env.HOST
		}/public/pdf/${nameCard}.pdf", \n\t\t"qr": "http://${process.env.HOST}/public/img/${nameCard}.png"\n\t}`
	);

	res.status(200).json({
		success: true,
		message: 'Carta generada exitosamente',
		data: {
			qr: `http://${process.env.HOST}/public/img/${nameCard}.png`,
			url: `http://${process.env.HOST}/public/pdf/${nameCard}.pdf`,
		},
	});
};

cardsCtrl.personalCard = (req, res) => {
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
		addresPeopleCertified,
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
			undefined,
			documentPeopleCertified,
			documentTypePeopleCertified,
			originDocumentPeopleCertified,
			isManPeopleCertified,
			addresPeopleCertified,
			undefined,
			acquaintanceTime
		)
	);

	utils.createQrImage(nameCard);

	utils.writeToFileInfo(
		`{\n\t\t"fecha": "${new Date().toLocaleDateString()}", \n\t\t"hora": "${new Date().toLocaleTimeString()}", \n\t\t"tipo_carta": "Referencia personal", \n\t\t"url": "http://${
			process.env.HOST
		}/public/pdf/${nameCard}.pdf", \n\t\t"qr": "http://${process.env.HOST}/public/img/${nameCard}.png"\n\t}`
	);

	res.status(200).json({
		success: true,
		message: 'Carta generada exitosamente',
		data: {
			qr: `http://${process.env.HOST}/public/img/${nameCard}.png`,
			url: `http://${process.env.HOST}/public/pdf/${nameCard}.pdf`,
		},
	});
};

module.exports = cardsCtrl;
