const fs = require('fs');
const { join } = require('path');
const utils = require('../utils/utils');
const { v4: uuidv4 } = require('uuid');

const fonts = require('../utils/fonts');
const styles = require('../utils/styles');

const PdfPrinter = require('pdfmake');
const printer = new PdfPrinter(fonts);

const Personal = require('./Personal');

exports.generatePersonalCard = (personalCard) => {
	const values1 = ['honesta', 'bondadosa', 'solidaria', 'honrada', 'de confianza', 'amigable', 'sociable'];
	const values2 = ['trabajadora', 'aut\u00f3noma', 'leal', 'organizada', 'emp\u00e1tica'];
	const values3 = ['responsable', 'respetuosa', 'perseverante', 'sincera', 'educada'];
	const values4 = ['cumplidora de su deber', 'colaboradora', 'tolerante', 'prudente', 'eficiente'];

	let identifyPeopleCertifier = 'identificado';
	if (!personalCard.isManPeopleCertifier) {
		identifyPeopleCertifier = 'identificada';
	}

	let prefixPeopleCertified = 'al se\u00f1or';
	let identifyPeopleCertified = 'identificado';
	if (!personalCard.isManPeopleCertified) {
		prefixPeopleCertified = 'a la se\u00f1ora';
		identifyPeopleCertified = 'identificada';
	}

	personalCard.originDocumentPeopleCertified =
		personalCard.originDocumentPeopleCertified === undefined ? '' : ' de ' + personalCard.originDocumentPeopleCertified;

	personalCard.originDocumentPeopleCertifier =
		personalCard.originDocumentPeopleCertifier === undefined ? '' : ' de ' + personalCard.originDocumentPeopleCertifier;

	const fecha = new Date();
	let contentCard = {
		content: [
			{ text: 'CERTIFICACI\u00d3N PERSONAL', style: ['header', 'bold'] },
			{
				text: [
					`Por medio de la presente, yo `,
					{ text: `${personalCard.namePeopleCertifier} `, style: 'bold' },
					`${identifyPeopleCertifier} con ${personalCard.documentTypePeopleCertifier} `,
					{
						text: `No. ${personalCard.documentPeopleCertifier}${personalCard.originDocumentPeopleCertifier}, `,
						style: 'bold',
					},
					`certifico que conozco desde hace ${personalCard.acquaintanceTime} a\u00f1os ${prefixPeopleCertified} `,
					{ text: `${personalCard.namePeopleCertified} `, style: 'bold' },
					`${identifyPeopleCertified} con ${personalCard.documentTypePeopleCertified} `,
					{
						text: `No. ${personalCard.documentPeopleCertified}${personalCard.originDocumentPeopleCertified}, `,
						style: 'bold',
					},
					,
					` es una persona ${values1[Math.floor(Math.random() * values1.length)]}, ${
						values2[Math.floor(Math.random() * values2.length)]
					}, ${values3[Math.floor(Math.random() * values3.length)]} y ${
						values4[Math.floor(Math.random() * values4.length)]
					}.`,
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
				text: `${utils.getUnderscoreForSignature(personalCard.namePeopleCertifier.length)}`,
				style: ['marginRight', 'bold', 'font13'],
			},
			{ text: `${personalCard.namePeopleCertifier}`, style: ['marginRight', 'bold', 'font13'] },
			{
				text: `${personalCard.prefixDocumentTypePeopleCertifier}: No. ${personalCard.documentPeopleCertifier}${personalCard.originDocumentPeopleCertifier}`,
				style: ['marginRight', 'bold', 'font13'],
			},
			{ text: `CEL: ${personalCard.phonePeopleCertifier}`, style: ['marginRight', 'bold', 'font13'] },
		],
		styles: styles,
	};

	const nameFile = uuidv4();

	let pdfDoc = printer.createPdfKitDocument(contentCard);
	pdfDoc.pipe(fs.createWriteStream(join(__dirname, `../public/pdf/${nameFile}.pdf`)));
	pdfDoc.end();

	return nameFile;
};
