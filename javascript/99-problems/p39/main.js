// Goldbach's conjecture: every positive even number greater than 2 is the sum of two prime numbers.
// Find the two prime numbers that sum up to a given even integer.
// Example: goldbach(28) => [5, 23]
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
  if (!Number.isInteger(number) || number <= 2 || number % 2 !== 0) {
    throw new Error('number must be an even integer greater than 2');
  }

  for (let p = 2; p < number; p += 1) {
    if (isPrime(p) && isPrime(number - p)) {
      return [p, number - p];
    }
  }

  return null;
}

module.exports = goldbach;
