function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function removeAt(list, k) {
  const removed = list[k - 1];
  const remainingList = list.filter((_, index) => index !== k - 1);

  return {
    removed,
    list: remainingList,
  };
}

function randomInt(max, random) {
  return Math.floor(random() * max);
}

function lotto(count, max, random = Math.random) {
  if (!Number.isInteger(count) || count < 0) {
    throw new Error('count must be a non-negative integer');
  }

  if (!Number.isInteger(max) || max < 1) {
    throw new Error('max must be a positive integer');
  }

  if (count > max) {
    throw new Error('count must not exceed max');
  }

  if (typeof random !== 'function') {
    throw new Error('random must be a function');
  }

  const numbers = range(1, max);
  const selected = [];

  for (let index = 0; index < count; index += 1) {
    const position = randomInt(numbers.length, random) + 1;
    const { removed, list: remaining } = removeAt(numbers, position);
    selected.push(removed);
    numbers.splice(0, numbers.length, ...remaining);
  }

  return selected;
}

module.exports = lotto;