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

function coprime(first, second) {
  if (!Number.isInteger(first) || !Number.isInteger(second)) {
    throw new Error('Both numbers must be integers');
  }

  return gcd(first, second) === 1;
}

module.exports = coprime;
