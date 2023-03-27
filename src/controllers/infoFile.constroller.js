const utils = require('./../utils/utils');

const infoFileCtrl = {};

/**
 * Este método es para eliminar un archivo de la carpeta pdf y img, se debe enviar por el body el id del archivo a eliminar
 * @param {*} req
 * @param {*} res
 * @returns json con la respuesta de la solicitud ("success" = true | false)
 */
infoFileCtrl.deleteCard = async (req, res) => {
	if (!req.body.idFile)
		return res
			.status(200)
			.json({ success: false, message: 'Debe proporcionar la información del archivo que desea eliminar' });

	const { idFile } = req.body;

	const urlFiles = '../public/';

	utils.deleteElementFromInfoFile(idFile);

	const isPdfDeleted = await utils.deleteFile(`${urlFiles}pdf/${idFile}.pdf`);
	const isImgDeleted = await utils.deleteFile(`${urlFiles}img/${idFile}.png`);

	if (!isPdfDeleted || !isImgDeleted)
		return res.status(200).json({ success: false, message: 'El archivo no se pudo eliminar porque no existe' });

	return res.status(200).json({ success: false, message: 'El archivo fue eliminado con exito' });
};

/**
 * Este método es para eliminar todos los archivos de la carpeta pdf y img, así como tambien el registro del .json
 * @param {*} req
 * @param {*} res
 * @returns json con la respuesta de la solicitud ("success" = true | false)
 */
infoFileCtrl.deleteAllCards = async (req, res) => {
	if (!req.body.pass)
		return res
			.status(401)
			.json({ success: false, message: 'Debe confirmar la contrase\u00f1a para realizar esta acci\u00f3n' });

	const { pass } = req.body;

	if (pass != process.env.PASS) {
		return res.status(401).json({ success: false, message: 'Las credenciales son incorrectas' });
	}

	const urlFiles = '../public/';

	const isJsonDeleted = await utils.deleteFile(`${urlFiles}${utils.getFileNameInfo()}`);

	const isPdfsDeleted = await utils.deleteAllFiles(`${urlFiles}pdf/`);
	const isImgsDeleted = await utils.deleteAllFiles(`${urlFiles}img/`);

	utils.getFileNameInfo();

	console.log({ isJsonDeleted, isImgsDeleted, isPdfsDeleted });

	if (!isPdfsDeleted || !isImgsDeleted || !isJsonDeleted)
		return res.status(200).json({ success: false, message: 'Algunos archivos no pudieron ser eliminados' });

	return res.status(200).json({ success: false, message: 'Todos los archivos fueron eliminados con exito' });
};

module.exports = infoFileCtrl;
