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
		documentPeopleCertified,
		documentTypePeopleCertified,
		originDocumentPeopleCertified,
		isManPeopleCertified,
		acquaintanceTime
	) {
		this.namePeopleCertifier = namePeopleCertifier.toUpperCase();
		this.phonePeopleCertifier = utils.formatPhoneNumber(phonePeopleCertifier);
		this.documentPeopleCertifier = parseInt(documentPeopleCertifier).toLocaleString();
		this.documentTypePeopleCertifier = documentTypePeopleCertifier.toLowerCase();
		this.originDocumentPeopleCertifier = utils.firstChartUpperCase(originDocumentPeopleCertifier);
		this.prefixDocumentTypePeopleCertifier = prefixDocumentTypePeopleCertifier.toUpperCase();
		this.isManPeopleCertifier = isManPeopleCertifier == true ?? false;

		this.namePeopleCertified = namePeopleCertified.toUpperCase();
		this.documentPeopleCertified = parseInt(documentPeopleCertified).toLocaleString();
		this.documentTypePeopleCertified = documentTypePeopleCertified.toLowerCase();
		this.originDocumentPeopleCertified = utils.firstChartUpperCase(originDocumentPeopleCertified);
		this.isManPeopleCertified = isManPeopleCertified == true ?? false;

		this.acquaintanceTime = acquaintanceTime;
	}
}

module.exports = Personal;
