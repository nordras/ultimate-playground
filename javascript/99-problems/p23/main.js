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

function rndSelect(list, count, random = Math.random) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!Number.isInteger(count) || count < 0 || count > list.length) {
    throw new Error('count must be an integer between 0 and the list length');
  }

  if (typeof random !== 'function') {
    throw new Error('random must be a function');
  }

  const pool = [...list];
  const selected = [];

  for (let index = 0; index < count; index += 1) {
    const position = randomInt(pool.length, random) + 1;
    const { removed, list: remaining } = removeAt(pool, position);
    selected.push(removed);
    pool.splice(0, pool.length, ...remaining);
  }

  return selected;
}

module.exports = rndSelect;