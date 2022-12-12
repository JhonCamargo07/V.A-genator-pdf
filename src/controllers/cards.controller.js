const pdfPrinter = require('pdfmake');
const fs = require('fs');
const PdfPrinter = require('pdfmake');
const { join } = require('path');
const { v4: uuidv4 } = require('uuid');
const cardsCtrl = {};

const fonts = require('./../models/fonts');
const styles = require('./../models/style');

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
			{ text: 'CERTIFICACI\u00d3N PERSONAL', style: ['header', 'bold'] },
			{
				text: 'Por medio de la presente, yo AMPARO CARDENAS VILLAMIL identificada con c\u00e9dula de ciudadan\u00eda No. 36.542.666 de N\u00e1taga (Huila), certifico que conozco desde hace 18 a\u00f1os al se\u00f1or JHON ALEXANDER CAMARGO CADENA identificado con c\u00e9dula de ciudadan\u00eda N\u00b0 2.101.010.101 de Bogot\u00e1, es una persona honrada, trabajadora, perseverante y cumplidora de su deber.',
				style: ['parrafo', 'superMargin'],
			},
			{
				text: 'Por tal motivo doy fe.',
				style: ['parrafo', 'marginTop'],
			},
			{
				text: 'Se expide en Bogota, a los 12 dias del mes de diciembre de 2022.',
				style: ['parrafo', 'marginTop'],
			},
			{ text: 'Att:', style: ['marginFirma', 'bold'] },
			{ text: '_______________________', style: ['marginRight', 'bold', 'font13'] },
			{ text: 'AMPARO CARDENAS VILLAMIL', style: ['marginRight', 'bold', 'font13'] },
			{ text: 'C.C: N° 36.542.666 de Nátaga (Huila)', style: ['marginRight', 'bold', 'font13'] },
			{ text: 'CEL: 315 762 1254', style: ['marginRight', 'bold', 'font13'] },
		],
		styles: styles,
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
