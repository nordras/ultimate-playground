export function demonstrateTemplateLiterals() {
  console.log('3. TEMPLATE LITERALS (interpolation):');

  const name = 'Ilían';
  const age = 30;
  const city = 'Vitória';

  // Old way
  console.log('Old way: My name is ' + name + ' and I am ' + age + ' years old.');

  // Template literals
  console.log(`Template literal: My name is ${name} and I am ${age} years old.`);

  // Multi-line strings
  const message = `
  Name: ${name}
  Age: ${age}
  City: ${city}
  Status: ${age >= 18 ? 'Adult' : 'Minor'}
`;
  console.log(message);
}
