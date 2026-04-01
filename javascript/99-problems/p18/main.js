function slice(list, start, end) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start || end > list.length) {
    throw new Error('start and end must be valid 1-based indices within the list');
  }

  return list.slice(start - 1, end);
}

module.exports = slice;
