function encode(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  return list.reduce((encodedList, item) => {
    const lastEntry = encodedList[encodedList.length - 1];

    if (!lastEntry || lastEntry[1] !== item) {
      encodedList.push([1, item]);
      return encodedList;
    }

    lastEntry[0] += 1;
    return encodedList;
  }, []);
}

module.exports = encode;