const pdfPrinter = require('pdfmake');
const fs = require('fs');
const PdfPrinter = require('pdfmake');
const fonts = require('./../models/fonts');
const { join } = require('path');
const { v4: uuidv4 } = require('uuid');
const cardsCtrl = {};
const printer = new PdfPrinter(fonts);

cardsCtrl.laborCard = async (req, res) => {
	res.status(200).json({ success: true, message: 'Todas las reservas', data: response });
	// await Reserva.find({})
	// 	.then((response) => {
	// 	})
	// 	.catch((error) => {
	// 		res.status(500).json({ success: false, message: `Ocurrio un error: ${error}` });
	// 	});
};

cardsCtrl.familyCard = async (req, res) => {
	res.status(200).json({ success: false, message: 'Metodo si funcional' });
};

cardsCtrl.personalCard = async (req, res) => {
	var contentCard = {
		content: [
			'First paragraph',
			'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
		],
	};

	const nameFile = uuidv4();

	let pdfDoc = printer.createPdfKitDocument(contentCard);
	pdfDoc.pipe(fs.createWriteStream(join(__dirname, `../public/pdf/${nameFile}.pdf`)));
	pdfDoc.end();

	res.status(200).json({
		success: true,
		message: 'Carta generada exitosamente',
		data: { url: `http://${process.env.HOST}/public/pdf/${nameFile}.pdf` },
	});
};

module.exports = cardsCtrl;
