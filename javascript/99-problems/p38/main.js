// Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range.
// Example: primesInRange(2, 7) => [2, 3, 5, 7]
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

function primesInRange(low, high) {
  if (!Number.isInteger(low) || !Number.isInteger(high)) {
    throw new Error('low and high must be integers');
  }

  if (low > high) {
    throw new Error('low must not be greater than high');
  }

  const result = [];

  for (let n = low; n <= high; n += 1) {
    if (isPrime(n)) {
      result.push(n);
    }
  }

  return result;
}

module.exports = primesInRange;
