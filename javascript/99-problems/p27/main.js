// Group the elements of a set into disjoint subsets.
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

  const [head, ...tail] = list;
  const withHead = combinations(count - 1, tail).map((subset) => [head, ...subset]);
  const withoutHead = combinations(count, tail);

  return withHead.concat(withoutHead);
}

function removeElements(source, selected) {
  const remaining = [...source];

  selected.forEach((item) => {
    const index = remaining.indexOf(item);
    if (index >= 0) {
      remaining.splice(index, 1);
    }
  });

  return remaining;
}

function group(sizes, list) {
  if (!Array.isArray(sizes) || sizes.length === 0) {
    throw new Error('sizes must be a non-empty array');
  }

  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  const totalSize = sizes.reduce((total, size) => {
    if (!Number.isInteger(size) || size < 0) {
      throw new Error('sizes must contain non-negative integers');
    }

    return total + size;
  }, 0);

  if (totalSize !== list.length) {
    throw new Error('The sum of sizes must match the list length');
  }

  function buildGroups(remainingSizes, remainingItems) {
    if (remainingSizes.length === 0) {
      return [[]];
    }

    const [currentSize, ...restSizes] = remainingSizes;
    const currentCombinations = combinations(currentSize, remainingItems);

    return currentCombinations.flatMap((currentGroup) => {
      const nextItems = removeElements(remainingItems, currentGroup);
      return buildGroups(restSizes, nextItems).map((otherGroups) => [currentGroup, ...otherGroups]);
    });
  }

  return buildGroups(sizes, list);
}

module.exports = group;
