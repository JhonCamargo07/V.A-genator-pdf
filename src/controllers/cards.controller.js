const cardsCtrl = {};

const fs = require('fs');
const { join } = require('path');
const pdfPrinter = require('pdfmake');
const PdfPrinter = require('pdfmake');
const { v4: uuidv4 } = require('uuid');

const fonts = require('./../models/fonts');
const styles = require('./../models/style');

const printer = new PdfPrinter(fonts);

cardsCtrl.laborCard = async (req, res) => {
	res.status(200).json({ success: true, message: 'Todas las reservas', data: response });
};

cardsCtrl.familyCard = async (req, res) => {
	res.status(200).json({ success: false, message: 'Metodo si funcional' });
};

cardsCtrl.personalCard = async (req, res) => {
	const fecha = new Date();
	const namePeopleCertifier = 'AMPARO CARDENAS VILLAMIL 2';
	const namePeopleCertified = 'JHON ALEXANDER CAMARGO CADENA 2';
	var contentCard = {
		content: [
			{ text: 'CERTIFICACI\u00d3N PERSONAL', style: ['header', 'bold'] },
			{
				text: `Por medio de la presente, yo ${namePeopleCertifier} identificada con c\u00e9dula de ciudadan\u00eda No. 36.542.666 de N\u00e1taga (Huila), certifico que conozco desde hace 18 a\u00f1os al se\u00f1or ${namePeopleCertified} identificado con c\u00e9dula de ciudadan\u00eda N\u00b0 2.101.010.101 de Bogot\u00e1, es una persona honrada, trabajadora, perseverante y cumplidora de su deber.`,
				style: ['parrafo', 'superMargin'],
			},
			{
				text: 'Por tal motivo doy fe.',
				style: ['parrafo', 'marginTop'],
			},
			{
				text: `Se expide en Bogot\u00e1, a los ${fecha.getDate()} d\u00edas del mes de ${
					fecha.getMonth() + 1
				} de ${fecha.getFullYear()}.`,
				style: ['parrafo', 'marginTop'],
			},
			{ text: 'Att:', style: ['marginFirma', 'bold'] },
			{ text: '_______________________', style: ['marginRight', 'bold', 'font13'] },
			{ text: `${namePeopleCertifier}`, style: ['marginRight', 'bold', 'font13'] },
			{ text: 'C.C: N° 36.542.666 de Nátaga (Huila)', style: ['marginRight', 'bold', 'font13'] },
			{ text: 'CEL: 315 762 1254', style: ['marginRight', 'bold', 'font13'] },
		],
		styles: styles,
	};

	const nameFile = uuidv4();
	const nameFileInfo = 'info-cards.json';

	let pdfDoc = printer.createPdfKitDocument(contentCard);
	pdfDoc.pipe(fs.createWriteStream(join(__dirname, `../public/pdf/${nameFile}.pdf`)));
	pdfDoc.end();

	let lineFile = `{"fecha": "${new Date().toLocaleDateString()}", "hora": "${new Date().toLocaleTimeString()}", "tipo_carta": "Referencia personal", "url": "http://${
		process.env.HOST
	}/public/pdf/${nameFile}.pdf"}`;

	fs.appendFile(`${join(__dirname, `../public/${nameFileInfo}`)}`, `${lineFile}\n`, (err) => {
		if (err) throw err;
		console.log(`Se agrego la informacion de la carta al archivo ${nameFileInfo}`);
	});

	res.status(200).json({
		success: true,
		message: 'Carta generada exitosamente',
		data: { url: `http://${process.env.HOST}/public/pdf/${nameFile}.pdf` },
	});
};

module.exports = cardsCtrl;
