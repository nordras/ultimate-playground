export function StringMethods() {
  console.log('19. NEW STRING METHODS:');
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

  const str = 'Hello World';

  console.log('startsWith("Hello"):', str.startsWith('Hello'));
  console.log('endsWith("World"):', str.endsWith('World'));
  console.log('includes("lo"):', str.includes('lo'));
  console.log('repeat(3):', 'Ha'.repeat(3));

  // String padding
  console.log('padStart(15, "*"):', str.padStart(15, '*'));
  console.log('padEnd(15, "*"):', str.padEnd(15, '*'));

  console.log('\n');
}

StringMethods();