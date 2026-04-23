function primeFactorsMult(number) {
  if (!Number.isInteger(number) || number < 2) {
    throw new Error('number must be an integer greater than 1');
  }

  const factors = [];
  let remainder = number;
  let divisor = 2;

  while (remainder > 1) {
    let multiplicity = 0;

    while (remainder % divisor === 0) {
      multiplicity += 1;
      remainder /= divisor;
    }

    if (multiplicity > 0) {
      factors.push([divisor, multiplicity]);
    }

    divisor += divisor === 2 ? 1 : 2;

    if (divisor * divisor > remainder && remainder > 1) {
      factors.push([remainder, 1]);
      break;
    }
  }

  return factors;
}

function phi(number) {
  if (!Number.isInteger(number) || number < 1) {
    throw new Error('number must be a positive integer');
  }

  if (number === 1) {
    return 1;
  }

  return primeFactorsMult(number).reduce((result, [prime, multiplicity]) => {
    return result * (prime - 1) * (prime ** (multiplicity - 1));
  }, 1);
}

module.exports = phi;
