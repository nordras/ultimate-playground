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
  return gcd(first, second) === 1;
}

function totient(number) {
  if (!Number.isInteger(number) || number < 1) {
    throw new Error('number must be a positive integer');
  }

  let total = 0;

  for (let candidate = 1; candidate < number; candidate += 1) {
    if (coprime(candidate, number)) {
      total += 1;
    }
  }

  return total;
}

module.exports = totient;
