const utils = require('./../utils/utils');

const infoFileCtrl = {};

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

module.exports = infoFileCtrl;
