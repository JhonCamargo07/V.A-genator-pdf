const fs = require('fs');
const qr = require('qr-image');
const { join } = require('path');
const { v4: uuidv4 } = require('uuid');

exports.getNameMonth = (numMonth) => {
	if (numMonth > 11 || numMonth < 0) {
		return 'desconocido';
	}
	const months = [
		'enero',
		'febrero',
		'marzo',
		'abril',
		'mayo',
		'junio',
		'julio',
		'agosto',
		'septiembre',
		'octubre',
		'noviembre',
		'diciembre',
	];
	return months[numMonth];
};

exports.getUnderscoreForSignature = (lengthNombre) => {
	let underscoreForSignature = ' ______';
	for (let i = 0; i <= lengthNombre; i++) {
		underscoreForSignature += '_';
	}
	return underscoreForSignature;
};

exports.createFileInfoIfNotExists = (nameFileInfo) => {
	const pathFileInfo = this.getPathFileInfo(nameFileInfo);
	if (!fs.existsSync(pathFileInfo)) {
		fs.appendFile(pathFileInfo, `[]`, (err) => {
			if (err) throw err;
			console.log('Se agrego las llaves');
		});
	}
};

exports.getFileNameInfo = () => {
	const nameFileInfo = 'info-cards.json';
	this.createFileInfoIfNotExists(nameFileInfo);
	return nameFileInfo;
};

exports.getPathFileInfo = (nameFileInfo) => {
	return join(__dirname, `../public/${nameFileInfo}`);
};

exports.writeToFileInfo = (lineFile) => {
	const nameFileInfo = this.getFileNameInfo();
	const pathFileInfo = this.getPathFileInfo(nameFileInfo);

	let fileContent = fs.readFileSync(pathFileInfo, 'utf8');

	let lines = fileContent.split('\n');

	if (lines.length <= 2) {
		fs.writeFileSync(pathFileInfo, `[\n\t\n]\n`, 'utf8');
		fileContent = fs.readFileSync(`${pathFileInfo}`, 'utf8');
		lines = fileContent.split('\n');
	}

	lines.pop();
	lines.pop();

	lineFile = lines.length <= 2 ? `${lineFile}` : `,\n\t${lineFile}`;

	fileContent = lines.join('\n') + `${lineFile}` + '\n]\n';
	fs.writeFileSync(pathFileInfo, fileContent, 'utf8');
};

exports.deleteElementFromInfoFile = (idElementToDeleted) => {
	const nameFileInfo = this.getFileNameInfo();
	const pathFileInfo = this.getPathFileInfo(nameFileInfo);

	let fileContent = fs.readFileSync(pathFileInfo, 'utf8');
	let fileJson = JSON.parse(fileContent);

	fileJson = fileJson.filter((item) => item.id !== idElementToDeleted);

	fileContent = JSON.stringify(fileJson, null, 4);
	fs.writeFileSync(pathFileInfo, fileContent, 'utf8');
};

exports.deleteFile = async (urlFileToDeleted) => {
	try {
		return new Promise((resolve, reject) => {
			fs.unlink(join(__dirname, urlFileToDeleted), (err) => {
				if (err) return resolve(false);
				resolve(true);
			});
		});
	} catch (error) {
		return false;
	}
};

exports.formatPhoneNumber = (num) => {
	if (num === undefined) {
		return '';
	}

	if (num.length <= 9 || num.length >= 11) {
		return num;
	}

	let finalNum = '';
	finalNum += num.substr(0, 3);
	finalNum += ' ' + num.substr(3, 3);
	finalNum += ' ' + num.substr(6, 4);
	return finalNum; // Format = 000 000 0000
};

exports.firstLetterOfEachWordUpperCase = (cadena) => {
	if (cadena === undefined) {
		return;
	}
	cadena = cadena.toLowerCase();
	return cadena.replace(/\b\w/g, (l) => l.toUpperCase());
};

exports.firstChartUpperCase = (cadena) => {
	if (cadena === undefined) {
		return;
	}
	cadena = cadena.toLowerCase();
	return cadena.replace(/\w/, (l) => l.toUpperCase());
};

exports.createPdf = (printer, contentCard) => {
	const nameFile = uuidv4();
	let pdfDoc = printer.createPdfKitDocument(contentCard);
	pdfDoc.pipe(fs.createWriteStream(join(__dirname, `../public/pdf/${nameFile}.pdf`)));
	pdfDoc.end();
	return nameFile;
};

exports.createQrImage = (nameCard) => {
	const qrImg = qr.imageSync(`http://${process.env.HOST}/public/pdf/${nameCard}.pdf`, { type: 'png' });
	fs.writeFileSync(`${join(__dirname, `../public/img/${nameCard}`)}.png`, qrImg);
};
