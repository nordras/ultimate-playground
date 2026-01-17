export function demonstrateArrayMethods() {
  console.log('11. ARRAY METHODS:');
  // https://dev.to/bobbyhalljr/exploring-es6-javascript-array-methods-1886

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // map
  const doubled = numbers.map(n => n * 2);
  console.log('Doubled:', doubled);

  // filter
  const evens = numbers.filter(n => n % 2 === 0);
  console.log('Even numbers:', evens);

  // reduce
  const total = numbers.reduce((acc, n) => acc + n, 0);
  console.log('Sum of all numbers:', total);

  // find
  const foundNumber = numbers.find(n => n > 5);
  console.log('First number > 5:', foundNumber);

  // findIndex
  const foundIndex = numbers.findIndex(n => n > 5);
  console.log('Index of first number > 5:', foundIndex);

  // some
  const hasEven = numbers.some(n => n % 2 === 0);
  console.log('Has even numbers:', hasEven);

  // every
  const allPositive = numbers.every(n => n > 0);
  console.log('All positive:', allPositive);

  // includes
  console.log('Includes 5:', numbers.includes(5));

  // Method chaining
  const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);
  console.log('Chained result (even numbers, doubled, summed):', result);
}
