module.exports = (arrayInput = []) => {
	if (!Array.isArray(arrayInput)) {
		throw new TypeError(`Expected an array, got ${typeof arrayInput}`);
	}
	return arrayInput.map(obj => ({...obj}));
};
