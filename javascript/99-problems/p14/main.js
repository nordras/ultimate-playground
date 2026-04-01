function dupli(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  return list.reduce((duplicatedList, item) => {
    duplicatedList.push(item, item);
    return duplicatedList;
  }, []);
}

module.exports = dupli;
