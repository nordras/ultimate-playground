function flatten(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  return list.reduce((flatList, item) => {
    if (Array.isArray(item)) {
      return flatList.concat(flatten(item));
    }

    return flatList.concat(item);
  }, []);
}

module.exports = flatten;