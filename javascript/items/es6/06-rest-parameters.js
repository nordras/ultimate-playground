export function demonstrateRestParameters() {
  console.log('6. REST PARAMETERS:');
  // The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  console.log('sum(1, 2, 3):', sum(1, 2, 3));
  console.log('sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10):', sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

  function createProfile(name, age, ...interests) {
    return {
      name,
      age,
      interests
    };
  }

  const profile = createProfile('Dayane', 28, 'volei', 'travel', 'play with children', 'photography');
  console.log('Profile:', profile);

  console.log('\n');
}
