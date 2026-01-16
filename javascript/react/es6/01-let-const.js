export function demonLetConst() {
  console.log('1. LET and CONST:');

  function demonLet() {
    let x = 10;
    if (true) {
      let x = 20;
      console.log('Inside block:', x); // 20
    }
    console.log('Outside block:', x); // 10
  }
  demonLet();

  const PI = 3.14159;
  console.log('Constant PI:', PI);
  // PI = 3.14; // Error: Assignment to constant variable

  console.log('\n');
}
