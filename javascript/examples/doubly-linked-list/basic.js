const DoublyLinkedList = require('./doublyLinkedList');

const list = new DoublyLinkedList();

list.append('B');
list.append('C');
list.prepend('A');
list.insertAfter('B', 'B.5');

console.log('Forward:', list.toArray());
console.log('Reverse:', list.toReverseArray());
console.log('Length:', list.length);

list.remove('B.5');
list.removeFirst();
list.removeLast();

console.log('After removals:', list.toArray());
console.log('Length:', list.length);
