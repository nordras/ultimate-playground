function randomInt(max, random) {
  return Math.floor(random() * max);
}

function rndPermu(list, random = Math.random) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (typeof random !== 'function') {
    throw new Error('random must be a function');
  }

  const result = [...list];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(index + 1, random);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

module.exports = rndPermu;