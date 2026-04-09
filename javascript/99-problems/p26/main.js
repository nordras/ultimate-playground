function combinations(count, list) {
  if (!Number.isInteger(count) || count < 0 || count > list.length) {
    throw new Error('count must be an integer between 0 and the list length');
  }

  if (count === 0) {
    return [[]];
  }

  if (count === list.length) {
    return [[...list]];
  }

  if (count === 1) {
    return list.map((item) => [item]);
  }

  const [head, ...tail] = list;
  const withHead = combinations(count - 1, tail).map((combination) => [head, ...combination]);
  const withoutHead = combinations(count, tail);

  return withHead.concat(withoutHead);
}

function combination(count, list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  return combinations(count, list);
}

module.exports = combination;