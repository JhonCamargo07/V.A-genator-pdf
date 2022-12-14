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

exports.getFileNameInfo = () => {
	return 'info-cards.txt';
};

exports.writeToFileInfo = (lineFile) => {
	const nameFileInfo = this.getFileNameInfo();

	fs.appendFile(`${join(__dirname, `../public/${nameFileInfo}`)}`, `${lineFile}\n`, (err) => {
		if (err) throw err;
		console.log(`Se agrego la informacion de la carta al archivo ${nameFileInfo}`);
	});
};
