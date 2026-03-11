function myLast(list) {
  if (!Array.isArray(list) || list.length === 0) {
    throw new Error('List must be a non-empty array');
  }

  return list[list.length - 1];
}

module.exports = myLast;
