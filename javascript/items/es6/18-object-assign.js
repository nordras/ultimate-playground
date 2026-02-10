export function demonstrateObjectAssign() {
  console.log('18. OBJECT.ASSIGN:');

  const target = { a: 1, b: 2 };
  const source1 = { b: 3, c: 4 };
  const source2 = { c: 5, d: 6 };

  const merged = Object.assign({}, target, source1, source2);
  console.log('Object.assign result:', merged);

  // Cloning
  const originalObj = { x: 1, y: 2 };
  const clonedObj = Object.assign({}, originalObj);
  console.log('Cloned object:', clonedObj);

  console.log('\n');
}
