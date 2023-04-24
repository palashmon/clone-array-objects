function cloneArrayObjects(arrayInput = []) {
  if (!Array.isArray(arrayInput)) {
    throw new TypeError(`Expected an array, got ${typeof arrayInput}`);
  }

  return arrayInput.map((object) => {
    if (typeof object !== "object" || object === null) {
      throw new TypeError(`Expected an object, got ${typeof object}`);
    }

    return { ...object };
  });
}

export default cloneArrayObjects;
