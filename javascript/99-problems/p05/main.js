function myReverse(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  return [...list].reverse();
}

module.exports = myReverse;
