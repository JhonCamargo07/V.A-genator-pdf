const fs = require('fs');
const { join } = require('path');
const utils = require('../utils/utils');
const { v4: uuidv4 } = require('uuid');

const fonts = require('../utils/fonts');
const styles = require('../utils/styles');

const PdfPrinter = require('pdfmake');
const printer = new PdfPrinter(fonts);

const modelPersonal = require('./Personal');

exports.generatePersonalCard = () => {
	modelPersonal.Pesonal('hOla', '', '', '', '', '', '', '', '', '');
	const fecha = new Date();
	const namePeopleCertifier = 'AMPARO CARDENAS VILLAMIL';
	const namePeopleCertified = 'JHON ALEXANDER CAMARGO CADENA';
	let contentCard = {
		content: [
			{ text: 'CERTIFICACI\u00d3N PERSONAL', style: ['header', 'bold'] },
			{
				text: [
					`Por medio de la presente, yo `,
					{ text: `${namePeopleCertifier} `, style: 'bold' },
					`identificada con c\u00e9dula de ciudadan\u00eda No. 36.542.666 de N\u00e1taga (Huila), certifico que conozco desde hace 18 a\u00f1os al se\u00f1or `,
					{ text: `${namePeopleCertified}`, style: 'bold' },
					` identificado con c\u00e9dula de ciudadan\u00eda `,
					{ text: `No. 2.101.010.101 de Bogot\u00e1, `, style: 'bold' },
					,
					`es una persona honrada, trabajadora, perseverante y cumplidora de su deber.`,
				],
				style: ['parrafo', 'superMargin'],
			},
			{
				text: 'Por tal motivo doy fe.',
				style: ['parrafo', 'marginTop'],
			},
			{
				text: `Se expide en Bogot\u00e1, a los ${fecha.getDate()} d\u00edas del mes de ${utils.getNameMonth(
					fecha.getMonth()
				)} de ${fecha.getFullYear()}.`,
				style: ['parrafo', 'marginTop'],
			},
			{ text: 'Att:', style: ['marginFirma', 'bold'] },
			{
				text: `${utils.getUnderscoreForSignature(namePeopleCertifier.length)}`,
				style: ['marginRight', 'bold', 'font13'],
			},
			{ text: `${namePeopleCertifier}`, style: ['marginRight', 'bold', 'font13'] },
			{ text: 'C.C: N° 36.542.666 de Nátaga (Huila)', style: ['marginRight', 'bold', 'font13'] },
			{ text: 'CEL: 315 762 1254', style: ['marginRight', 'bold', 'font13'] },
		],
		styles: styles,
	};

	const nameFile = uuidv4();

	let pdfDoc = printer.createPdfKitDocument(contentCard);
	pdfDoc.pipe(fs.createWriteStream(join(__dirname, `../public/pdf/${nameFile}.pdf`)));
	pdfDoc.end();

	return nameFile;
};
