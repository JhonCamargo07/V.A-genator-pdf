exports.Pesonal = (
	namePeopleCertifier,
	phonePeopleCertifier,
	documentPeopleCertifier,
	documentTypePeopleCertifier,
	originDocumentPeopleCertifier,
	namePeopleCertified,
	documentPeopleCertified,
	documentTypePeopleCertified,
	originDocumentPeopleCertified,
	acquaintanceTime
) => {
	this.namePeopleCertifier = namePeopleCertifier.toUpperCase();
	this.phonePeopleCertifier = phonePeopleCertifier;
	this.documentPeopleCertifier = documentPeopleCertifier;
	this.originDocumentPeopleCertifier = originDocumentPeopleCertifier;
	this.documentTypePeopleCertifier = documentTypePeopleCertifier;

	this.namePeopleCertified = namePeopleCertified.toUpperCase();
	this.documentPeopleCertified = documentPeopleCertified;
	this.originDocumentPeopleCertified = originDocumentPeopleCertified;
	this.documentTypePeopleCertified = documentTypePeopleCertified;

	this.acquaintanceTime = acquaintanceTime;

	this.getNamePeople = function () {
		return namePeopleCertified;
	};
};
