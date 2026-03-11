function myButLast(list) {
  if (!Array.isArray(list) || list.length < 2) {
    throw new Error('List must be an array with at least two elements');
  }

  return list[list.length - 2];
}

module.exports = myButLast;
