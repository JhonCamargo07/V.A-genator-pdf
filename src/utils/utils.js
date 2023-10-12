const fs = require('fs');
const qr = require('qr-image');
const { join } = require('path');
const { v4: uuidv4 } = require('uuid');

const utils = {};

utils.getNameMonth = (numMonth) => {
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

utils.getUnderscoreForSignature = (lengthNombre) => {
	let underscoreForSignature = ' ________';
	for (let i = 0; i <= lengthNombre; i++) {
		underscoreForSignature += '_';
	}
	return underscoreForSignature;
};

utils.createFileInfoIfNotExists = (nameFileInfo) => {
	const pathFileInfo = utils.getPathFileInfo(nameFileInfo);
	if (!fs.existsSync(pathFileInfo)) {
		fs.appendFile(pathFileInfo, `[]`, (err) => {
			if (err) throw err;
		});
	}
};

utils.getFileNameInfo = () => {
	const nameFileInfo = 'info-cards.json';
	utils.createFileInfoIfNotExists(nameFileInfo);
	return nameFileInfo;
};

utils.getPathFileInfo = (nameFileInfo) => {
	return join(__dirname, `../public/${nameFileInfo}`);
};

utils.writeToInfoFile = (data) => {
	const nameFileInfo = utils.getFileNameInfo();
	const pathFileInfo = utils.getPathFileInfo(nameFileInfo);

	let fileContent = fs.readFileSync(pathFileInfo, 'utf8');
	let fileJson = JSON.parse(fileContent);

	fileJson.push(data);

	fileContent = JSON.stringify(fileJson, null, 4);
	fs.writeFileSync(pathFileInfo, fileContent, 'utf8');
};

utils.deleteElementFromInfoFile = (idElementToDeleted) => {
	const nameFileInfo = utils.getFileNameInfo();
	const pathFileInfo = utils.getPathFileInfo(nameFileInfo);

	let fileContent = fs.readFileSync(pathFileInfo, 'utf8');
	let fileJson = JSON.parse(fileContent);

	fileJson = fileJson.filter((item) => item.id !== idElementToDeleted);

	fileContent = JSON.stringify(fileJson, null, 4);
	fs.writeFileSync(pathFileInfo, fileContent, 'utf8');
};

utils.deleteFile = async (urlFileToDeleted) => {
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

utils.deleteAllFiles = async (folderPath) => {
	const filesNeverToBeDeleted = ['firma.png', 'header.png'];

	return new Promise((resolve, reject) => {
		fs.readdir(join(__dirname, folderPath), (err, filesAtFolder) => {
			if (err) resolve(false);

			let allFilesDeleted = true;

			filesAtFolder.forEach((fileToDeleted) => {
				if (filesNeverToBeDeleted.includes(fileToDeleted)) return;

				allFilesDeleted = utils.deleteFile(`${folderPath}${fileToDeleted}`);
			});
			resolve(allFilesDeleted);
		});
	});
};

utils.formatPhoneNumber = (num) => {
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

utils.firstLetterOfEachWordUpperCase = (cadena) => {
	if (cadena === undefined) {
		return;
	}
	cadena = cadena.toLowerCase();
	return cadena.replace(/\b\w/g, (l) => l.toUpperCase());
};

utils.firstChartUpperCase = (cadena) => {
	if (cadena === undefined) {
		return;
	}
	cadena = cadena.toLowerCase();
	return cadena.replace(/\w/, (l) => l.toUpperCase());
};

utils.getDateNow = () => {
	const date = new Date();
	let currentDay = date.getDate();
	if (currentDay < 9) currentDay = '0' + currentDay;
	return currentDay;
};

utils.createPdf = (printer, contentCard) => {
	const nameFile = uuidv4();
	let pdfDoc = printer.createPdfKitDocument(contentCard);
	pdfDoc.pipe(fs.createWriteStream(join(__dirname, `../public/pdf/${nameFile}.pdf`)));
	pdfDoc.end();
	return nameFile;
};

utils.createQrImage = (nameCard) => {
	const qrImg = qr.imageSync(`http://${process.env.HOST}/public/pdf/${nameCard}.pdf`, {
		type: 'png',
	});
	fs.writeFileSync(`${join(__dirname, '../public/img/' + nameCard)}.png`, qrImg);
};

module.exports = utils;
