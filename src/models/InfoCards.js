const utils = require('./../utils/utils');
class Personal {
	constructor(
		namePeopleCertifier,
		phonePeopleCertifier,
		documentPeopleCertifier,
		documentTypePeopleCertifier,
		originDocumentPeopleCertifier,
		prefixDocumentTypePeopleCertifier,
		isManPeopleCertifier,
		namePeopleCertified,
		phonePeopleCertified,
		documentPeopleCertified,
		documentTypePeopleCertified,
		originDocumentPeopleCertified,
		isManPeopleCertified,
		addresPeopleCertified,
		homePeopleCertified,
		acquaintanceTime
	) {
		this.namePeopleCertifier = namePeopleCertifier != undefined ? namePeopleCertifier.toUpperCase() : undefined;

		this.phonePeopleCertifier = phonePeopleCertifier != undefined ? utils.formatPhoneNumber(phonePeopleCertifier) : undefined;

		this.documentPeopleCertifier =
			documentPeopleCertifier != undefined ? parseInt(documentPeopleCertifier).toLocaleString('es-CO') : undefined;

		this.documentTypePeopleCertifier =
			documentTypePeopleCertifier != undefined ? documentTypePeopleCertifier.toLowerCase() : undefined;

		this.originDocumentPeopleCertifier = originDocumentPeopleCertifier
			? utils.firstLetterOfEachWordUpperCase(originDocumentPeopleCertifier)
			: undefined;

		this.prefixDocumentTypePeopleCertifier = prefixDocumentTypePeopleCertifier
			? prefixDocumentTypePeopleCertifier.toUpperCase()
			: undefined;

		this.isManPeopleCertifier = isManPeopleCertifier ?? false;

		this.namePeopleCertified = namePeopleCertified != undefined ? namePeopleCertified.toUpperCase() : undefined;

		this.phonePeopleCertified = phonePeopleCertified != undefined ? utils.formatPhoneNumber(phonePeopleCertified) : undefined;

		this.documentPeopleCertified =
			documentPeopleCertified != undefined ? parseInt(documentPeopleCertified).toLocaleString('es-CO') : undefined;

		this.documentTypePeopleCertified =
			documentTypePeopleCertified != undefined ? documentTypePeopleCertified.toLowerCase() : undefined;

		this.originDocumentPeopleCertified = originDocumentPeopleCertified
			? utils.firstLetterOfEachWordUpperCase(originDocumentPeopleCertified)
			: undefined;

		this.isManPeopleCertified = isManPeopleCertified ?? false;

		this.addresPeopleCertified = addresPeopleCertified;

		this.homePeopleCertified = homePeopleCertified;

		this.acquaintanceTime = acquaintanceTime;
	}
}

module.exports = Personal;
