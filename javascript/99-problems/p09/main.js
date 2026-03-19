function pack(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  return list.reduce((packedList, item) => {
    const lastGroup = packedList[packedList.length - 1];

    if (!lastGroup || lastGroup[0] !== item) {
      packedList.push([item]);
      return packedList;
    }

    lastGroup.push(item);
    return packedList;
  }, []);
}

module.exports = pack;