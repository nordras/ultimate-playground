function rotate(list, n) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!Number.isInteger(n)) {
    throw new Error('n must be an integer');
  }

  if (list.length === 0) {
    return [];
  }

  const offset = ((n % list.length) + list.length) % list.length;

  return list.slice(offset).concat(list.slice(0, offset));
}

module.exports = rotate;
