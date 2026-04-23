function lsort(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!list.every(Array.isArray)) {
    throw new Error('lsort expects an array of arrays');
  }

  return [...list].sort((first, second) => first.length - second.length);
}

module.exports = lsort;
