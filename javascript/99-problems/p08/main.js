function compress(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (list.length === 0) {
    return [];
  }

  return list.slice(1).reduce((compressedList, item) => {
    if (item !== compressedList[compressedList.length - 1]) {
      compressedList.push(item);
    }

    return compressedList;
  }, [list[0]]);
}

module.exports = compress;