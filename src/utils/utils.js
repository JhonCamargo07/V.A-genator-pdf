const fs = require('fs');
const { join } = require('path');

exports.getNameMonth = (numMonth) => {
	if (numMonth > 11 || numMonth < 0) {
		return 'desconocido';
	}
	months = [
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

	let fileContent = fs.readFileSync(`${pathFileInfo}`, 'utf8');

	let lines = fileContent.split('\n');

	if (lines.length <= 2) {
		fs.writeFileSync(`${pathFileInfo}`, `[\n\t\n]\n`, 'utf8');
		fileContent = fs.readFileSync(`${pathFileInfo}`, 'utf8');
		lines = fileContent.split('\n');
	}

	lines.pop();
	lines.pop();

	fileContent = lines.join('\n') + `${lines.length <= 2 ? `${lineFile}` : `,\n\t${lineFile}`}` + '\n]\n';
	fs.writeFileSync(`${pathFileInfo}`, fileContent, 'utf8');
};
