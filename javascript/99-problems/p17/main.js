function split(list, n) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!Number.isInteger(n) || n < 0 || n > list.length) {
    throw new Error('n must be a valid split index within the list');
  }

  return [list.slice(0, n), list.slice(n)];
}

module.exports = split;
