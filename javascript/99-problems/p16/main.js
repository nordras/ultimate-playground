function dropEvery(list, n) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!Number.isInteger(n) || n < 1) {
    throw new Error('n must be a positive integer');
  }

  return list.filter((_, index) => (index + 1) % n !== 0);
}

module.exports = dropEvery;
