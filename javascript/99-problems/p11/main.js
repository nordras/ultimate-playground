function encodeModified(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  return list.reduce((encodedList, item) => {
    const lastEntry = encodedList[encodedList.length - 1];

    if (lastEntry === item) {
      encodedList[encodedList.length - 1] = [2, item];
      return encodedList;
    }

    if (Array.isArray(lastEntry) && lastEntry[1] === item) {
      lastEntry[0] += 1;
      return encodedList;
    }

    encodedList.push(item);
    return encodedList;
  }, []);
}

module.exports = encodeModified;