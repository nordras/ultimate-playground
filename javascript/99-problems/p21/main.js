function insertAt(value, list, k) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!Number.isInteger(k) || k < 1 || k > list.length + 1) {
    throw new Error('k must be a valid 1-based insertion index');
  }

  return [...list.slice(0, k - 1), value, ...list.slice(k - 1)];
}

module.exports = insertAt;
