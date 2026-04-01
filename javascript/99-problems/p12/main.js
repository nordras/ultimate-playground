function decode(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  return list.reduce((decodedList, item) => {
    if (Array.isArray(item)) {
      const [count, value] = item;

      if (!Number.isInteger(count) || count < 1) {
        throw new Error('Encoded entries must use a positive integer count');
      }

      decodedList.push(...Array(count).fill(value));
      return decodedList;
    }

    decodedList.push(item);
    return decodedList;
  }, []);
}

module.exports = decode;
