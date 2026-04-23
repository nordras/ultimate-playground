// Determine the greatest common divisor of two positive integer numbers.
function gcd(first, second) {
  if (!Number.isInteger(first) || !Number.isInteger(second)) {
    throw new Error('Both numbers must be integers');
  }

  let a = Math.abs(first);
  let b = Math.abs(second);

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

module.exports = gcd;
