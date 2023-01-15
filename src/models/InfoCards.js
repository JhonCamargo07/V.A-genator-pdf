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
		this.namePeopleCertifier = namePeopleCertifier ? namePeopleCertifier.toUpperCase() : undefined;

		this.phonePeopleCertifier = phonePeopleCertifier ? utils.formatPhoneNumber(phonePeopleCertifier) : undefined;

		this.documentPeopleCertifier = documentPeopleCertifier ? parseInt(documentPeopleCertifier).toLocaleString() : undefined;

		this.documentTypePeopleCertifier = documentTypePeopleCertifier ? documentTypePeopleCertifier.toLowerCase() : undefined;

		this.originDocumentPeopleCertifier = originDocumentPeopleCertifier
			? utils.firstLetterOfEachWordUpperCase(originDocumentPeopleCertifier)
			: undefined;

		this.prefixDocumentTypePeopleCertifier = prefixDocumentTypePeopleCertifier
			? prefixDocumentTypePeopleCertifier.toUpperCase()
			: undefined;

		this.isManPeopleCertifier = isManPeopleCertifier == true ?? false;

		this.namePeopleCertified = namePeopleCertified ? namePeopleCertified.toUpperCase() : undefined;

		this.phonePeopleCertified = phonePeopleCertified ? utils.formatPhoneNumber(phonePeopleCertified) : undefined;

		this.documentPeopleCertified = documentPeopleCertified ? parseInt(documentPeopleCertified).toLocaleString() : undefined;

		this.documentTypePeopleCertified = documentTypePeopleCertified ? documentTypePeopleCertified.toLowerCase() : undefined;

		this.originDocumentPeopleCertified = originDocumentPeopleCertified
			? utils.firstLetterOfEachWordUpperCase(originDocumentPeopleCertified)
			: undefined;

		this.isManPeopleCertified = isManPeopleCertified == true ?? false;

		this.addresPeopleCertified = addresPeopleCertified;

		this.homePeopleCertified = homePeopleCertified;

		this.acquaintanceTime = acquaintanceTime;
	}
}

module.exports = Personal;
