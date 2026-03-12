function myLength(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  return list.length;
}

module.exports = myLength;
