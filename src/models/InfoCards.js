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
		this.namePeopleCertifier = namePeopleCertifier ? namePeopleCertifier.toUpperCase() : '';

		this.phonePeopleCertifier = phonePeopleCertifier ? utils.formatPhoneNumber(phonePeopleCertifier) : '';

		this.documentPeopleCertifier = documentPeopleCertifier ? parseInt(documentPeopleCertifier).toLocaleString() : '';

		this.documentTypePeopleCertifier = documentTypePeopleCertifier ? documentTypePeopleCertifier.toLowerCase() : '';

		this.originDocumentPeopleCertifier = originDocumentPeopleCertifier
			? utils.firstLetterOfEachWordUpperCase(originDocumentPeopleCertifier)
			: '';

		this.prefixDocumentTypePeopleCertifier = prefixDocumentTypePeopleCertifier
			? prefixDocumentTypePeopleCertifier.toUpperCase()
			: '';

		this.isManPeopleCertifier = isManPeopleCertifier == true ?? false;

		this.namePeopleCertified = namePeopleCertified ? namePeopleCertified.toUpperCase() : '';

		this.phonePeopleCertified = phonePeopleCertified ? utils.formatPhoneNumber(phonePeopleCertified) : '';

		this.documentPeopleCertified = documentPeopleCertified ? parseInt(documentPeopleCertified).toLocaleString() : '';

		this.documentTypePeopleCertified = documentTypePeopleCertified ? documentTypePeopleCertified.toLowerCase() : '';

		this.originDocumentPeopleCertified = originDocumentPeopleCertified
			? utils.firstLetterOfEachWordUpperCase(originDocumentPeopleCertified)
			: '';

		this.isManPeopleCertified = isManPeopleCertified == true ?? false;

		this.addresPeopleCertified = addresPeopleCertified;

		this.homePeopleCertified = homePeopleCertified;

		this.acquaintanceTime = acquaintanceTime;
	}
}

module.exports = Personal;
