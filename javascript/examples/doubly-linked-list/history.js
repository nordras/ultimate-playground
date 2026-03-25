const DoublyLinkedList = require('./doublyLinkedList');

class History {
  constructor() {
    this.list = new DoublyLinkedList();
    this.current = null;
  }

  visit(state) {
    if (this.current && this.current.next) {
      this.list.tail = this.current;
      this.current.next.prev = null;
      this.current.next = null;
      this.list.length = this.list.toArray().length;
    }

    this.list.append(state);
    this.current = this.list.tail;
  }

  undo() {
    if (!this.current || !this.current.prev) {
      return this.current ? this.current.value : null;
    }

    this.current = this.current.prev;
    return this.current.value;
  }

  redo() {
    if (!this.current || !this.current.next) {
      return this.current ? this.current.value : null;
    }

    this.current = this.current.next;
    return this.current.value;
  }

  getCurrent() {
    return this.current ? this.current.value : null;
  }
}

const history = new History();

history.visit('Home');
history.visit('Profile');
history.visit('Settings');

console.log('Current:', history.getCurrent());
console.log('Undo ->', history.undo());
console.log('Undo ->', history.undo());
console.log('Redo ->', history.redo());

history.visit('Help');
console.log('Current after new visit:', history.getCurrent());
console.log('Redo after new visit:', history.redo());
