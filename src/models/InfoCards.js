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
		this.namePeopleCertifier = namePeopleCertifier.toUpperCase();
		this.phonePeopleCertifier = utils.formatPhoneNumber(phonePeopleCertifier);
		this.documentPeopleCertifier = parseInt(documentPeopleCertifier).toLocaleString();
		this.documentTypePeopleCertifier = documentTypePeopleCertifier.toLowerCase();
		this.originDocumentPeopleCertifier = utils.firstLetterOfEachWordUpperCase(originDocumentPeopleCertifier);
		this.prefixDocumentTypePeopleCertifier = prefixDocumentTypePeopleCertifier.toUpperCase();
		this.isManPeopleCertifier = isManPeopleCertifier == true ?? false;

		this.namePeopleCertified = namePeopleCertified.toUpperCase();
		this.phonePeopleCertified = utils.formatPhoneNumber(phonePeopleCertified);
		this.documentPeopleCertified = parseInt(documentPeopleCertified).toLocaleString();
		this.documentTypePeopleCertified = documentTypePeopleCertified.toLowerCase();
		this.originDocumentPeopleCertified = utils.firstLetterOfEachWordUpperCase(originDocumentPeopleCertified);
		this.isManPeopleCertified = isManPeopleCertified == true ?? false;
		this.addresPeopleCertified = addresPeopleCertified;
		this.homePeopleCertified = homePeopleCertified;

		this.acquaintanceTime = acquaintanceTime;
	}
}

module.exports = Personal;
