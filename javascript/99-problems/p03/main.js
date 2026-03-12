function elementAt(list, k) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!Number.isInteger(k) || k < 1 || k > list.length) {
    throw new Error('k must be a valid 1-based index within the list');
  }

  return list[k - 1];
}

module.exports = elementAt;
