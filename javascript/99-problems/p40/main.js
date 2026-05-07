// Given a range of integers by its lower and upper limit, find a list of all even numbers and their Goldbach composition.
// An optional minPrime filter excludes compositions where the smallest prime is below the given limit.
// Example: goldbachList(9, 20) => [[10, 3, 7], [12, 5, 7], [14, 3, 11], [16, 3, 13], [18, 5, 13], [20, 3, 17]]
// Example: goldbachList(1, 2000, 50) => [[992, 73, 919], [1382, 61, 1321], [1856, 67, 1789], [1928, 61, 1867]]
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  if (number % 2 === 0) {
    return false;
  }

  const limit = Math.floor(Math.sqrt(number));

  for (let divisor = 3; divisor <= limit; divisor += 2) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

function goldbach(number) {
  for (let p = 2; p < number; p += 1) {
    if (isPrime(p) && isPrime(number - p)) {
      return [p, number - p];
    }
  }

  return null;
}

function goldbachList(low, high, minPrime = 2) {
  if (!Number.isInteger(low) || !Number.isInteger(high)) {
    throw new Error('low and high must be integers');
  }

  if (low > high) {
    throw new Error('low must not be greater than high');
  }

  if (!Number.isInteger(minPrime) || minPrime < 2) {
    throw new Error('minPrime must be an integer >= 2');
  }

  const result = [];
  const start = low % 2 === 0 ? low : low + 1;

  for (let n = start; n <= high; n += 2) {
    if (n <= 2) {
      continue;
    }

    const pair = goldbach(n);

    if (pair !== null && pair[0] >= minPrime) {
      result.push([n, pair[0], pair[1]]);
    }
  }

  return result;
}

module.exports = goldbachList;
