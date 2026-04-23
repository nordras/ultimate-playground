// Determine the prime factors of a given positive integer.
function primeFactors(number) {
  if (!Number.isInteger(number) || number < 2) {
    throw new Error('number must be an integer greater than 1');
  }

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

module.exports = primeFactors;
