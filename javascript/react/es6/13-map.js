export function demonstrateMap() {
  console.log('13. MAP:');
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  /*
    The Map object holds key-value pairs and remembers the original insertion order of the keys.
    Any value (both objects and primitive values) may be used as either a key or a value.
  */
  // note: do not confuse Map with the map() array method
  // note2: Set stores unique values (great for de-duplication and membership checks), while a Map stores key-value pairs (useful for dynamic lookups where keys aren't just strings, unlike objects).

  const userMap = new Map();
  userMap.set('name', 'Lara');
  userMap.set('age', 30);
  userMap.set('city', 'Serra');
  userMap.set(1, 'one');
  userMap.set(true, 'boolean key');

  console.log('Map size:', userMap.size);
  console.log('Get name:', userMap.get('name'));
  console.log('Has age:', userMap.has('age'));

  console.log('Iterating Map:');
  for (const [key, value] of userMap) {
    console.log(`  ${key} => ${value}`);
  }

  userMap.delete('city');
  console.log('After deleting city, has city:', userMap.has('city'));
}
