function repli(list, times) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!Number.isInteger(times) || times < 0) {
    throw new Error('times must be a non-negative integer');
  }

  return list.reduce((replicatedList, item) => {
    replicatedList.push(...Array(times).fill(item));
    return replicatedList;
  }, []);
}

module.exports = repli;
