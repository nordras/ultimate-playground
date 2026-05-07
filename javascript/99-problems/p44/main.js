// An n-bit Gray code is a sequence of n-bit strings constructed according to certain rules.
// Find the construction rules and generate the N-bit Gray code.
// Example: grayCode(1) => ['0', '1']
// Example: grayCode(2) => ['00', '01', '11', '10']
// Example: grayCode(3) => ['000', '001', '011', '010', '110', '111', '101', '100']
function grayCode(n) {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error('n must be a positive integer');
  }

  if (n === 1) {
    return ['0', '1'];
  }

  const smaller = grayCode(n - 1);

  const firstHalf = smaller.map((code) => '0' + code);
  const secondHalf = [...smaller].reverse().map((code) => '1' + code);

  return firstHalf.concat(secondHalf);
}

module.exports = grayCode;
