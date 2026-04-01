function removeAt(list, k) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!Number.isInteger(k) || k < 1 || k > list.length) {
    throw new Error('k must be a valid 1-based index within the list');
  }

  const removed = list[k - 1];
  const remainingList = list.filter((_, index) => index !== k - 1);

  return {
    removed,
    list: remainingList,
  };
}

module.exports = removeAt;
