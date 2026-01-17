export function demonstrateSet() {
  console.log('14. SET:');
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  /*
    The Set object lets you store unique values of any type, whether primitive values or object references.
  */
  // note: do not confuse Set with the set() method of Map
  // note2: Set stores unique values (great for de-duplication and membership checks), while a Map stores key-value pairs (useful for dynamic lookups where keys aren't just strings, unlike objects).

  const uniqueNumbers = new Set([1, 2, 3, 3, 4, 4, 5, 5]);
  console.log('Set from array with duplicates:', uniqueNumbers);
  console.log('Set size:', uniqueNumbers.size);

  uniqueNumbers.add(6);
  uniqueNumbers.add(6); // duplicated and will be ignored
  console.log('After adding 6 twice:', uniqueNumbers);

  console.log('Has 3:', uniqueNumbers.has(3));
  console.log('Has 10:', uniqueNumbers.has(10));

  uniqueNumbers.delete(1);
  console.log('After deleting 1:', uniqueNumbers);

  // Converti Set to Array
  const arrayFromSet = [...uniqueNumbers];
  console.log('Set to Array:', arrayFromSet);

  // Removes duplicate
  const numbersWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];
  const uniqueArray = [...new Set(numbersWithDuplicates)];
  console.log('Removing duplicates:', uniqueArray);
}
