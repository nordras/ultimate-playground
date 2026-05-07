// Compare the two methods of calculating Euler's totient function phi(m).
// Use the naive method (P33) and the improved method (P36) to compare efficiency.
// Example: comparePhi(10090) => { totientResult: 4032, totientTime: ..., phiResult: 4032, phiTime: ... }
function gcd(first, second) {
  let a = Math.abs(first);
  let b = Math.abs(second);

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

function totient(number) {
  if (number === 1) {
    return 1;
  }

  let count = 0;

  for (let candidate = 1; candidate < number; candidate += 1) {
    if (gcd(candidate, number) === 1) {
      count += 1;
    }
  }

  return count;
}

function primeFactorsMult(number) {
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
  if (number === 1) {
    return 1;
  }

  return primeFactorsMult(number).reduce((result, [prime, multiplicity]) => {
    return result * (prime - 1) * (prime ** (multiplicity - 1));
  }, 1);
}

function comparePhi(number) {
  if (!Number.isInteger(number) || number < 1) {
    throw new Error('number must be a positive integer');
  }

  const t0 = Date.now();
  const totientResult = totient(number);
  const totientTime = Date.now() - t0;

  const t1 = Date.now();
  const phiResult = phi(number);
  const phiTime = Date.now() - t1;

  return {
    totientResult,
    totientTime,
    phiResult,
    phiTime,
  };
}

module.exports = comparePhi;
