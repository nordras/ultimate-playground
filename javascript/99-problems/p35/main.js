// Determine the prime factors of a given positive integer with their multiplicities.
function primeFactors(number) {
  const factors = [];
  let remainder = number;
  let divisor = 2;

  while (remainder > 1) {
    while (remainder % divisor === 0) {
      factors.push(divisor);
      remainder /= divisor;
    }

    divisor += divisor === 2 ? 1 : 2;

    if (divisor * divisor > remainder && remainder > 1) {
      factors.push(remainder);
      break;
    }
  }

  return factors;
}

function primeFactorsMult(number) {
  if (!Number.isInteger(number) || number < 2) {
    throw new Error('number must be an integer greater than 1');
  }

  const grouped = primeFactors(number).reduce((counts, factor) => {
    counts[factor] = (counts[factor] || 0) + 1;
    return counts;
  }, {});

  return Object.entries(grouped)
    .map(([factor, multiplicity]) => [Number(factor), multiplicity])
    .sort((first, second) => first[0] - second[0]);
}

module.exports = primeFactorsMult;
