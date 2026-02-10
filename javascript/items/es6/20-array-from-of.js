export function ArrayFromOf() {
  console.log('20. ARRAY.FROM AND ARRAY.OF:');
  // The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

  const arrayFromString = Array.from('Hello');
  console.log('Array.from("Hello"):', arrayFromString);

  const arrayFromSet = Array.from(new Set([1, 2, 3, 4, 5]));
  console.log('Array.from(Set):', arrayFromSet);

  const squares = Array.from([1, 2, 3, 4, 5], x => x * x);
  console.log('Array.from with map:', squares);

  // Array.of
  const arr = Array.of(1, 2, 3, 4, 5);
  console.log('Array.of(1, 2, 3, 4, 5):', arr);

}
