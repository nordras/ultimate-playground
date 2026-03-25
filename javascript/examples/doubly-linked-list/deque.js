const DoublyLinkedList = require('./doublyLinkedList');

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  pushBack(value) {
    this.list.append(value);
  }

  pushFront(value) {
    this.list.prepend(value);
  }

  popBack() {
    return this.list.removeLast();
  }

  popFront() {
    return this.list.removeFirst();
  }

  toArray() {
    return this.list.toArray();
  }
}

const deque = new Deque();

deque.pushBack(10);
deque.pushBack(20);
deque.pushFront(5);

console.log('Deque:', deque.toArray());
console.log('popFront:', deque.popFront());
console.log('popBack:', deque.popBack());
console.log('Deque after pops:', deque.toArray());
