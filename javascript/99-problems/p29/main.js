function lfsort(list) {
  if (!Array.isArray(list)) {
    throw new Error('List must be an array');
  }

  if (!list.every(Array.isArray)) {
    throw new Error('lfsort expects an array of arrays');
  }

  const lengthFrequency = list.reduce((frequencyMap, item) => {
    const size = item.length;
    frequencyMap[size] = (frequencyMap[size] || 0) + 1;
    return frequencyMap;
  }, {});

  return [...list].sort((first, second) => {
    const frequencyDiff = lengthFrequency[first.length] - lengthFrequency[second.length];

    if (frequencyDiff !== 0) {
      return frequencyDiff;
    }

    return first.length - second.length;
  });
}

module.exports = lfsort;
