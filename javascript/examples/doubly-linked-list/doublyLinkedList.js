class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  append(value) {
    const node = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return this;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length += 1;

    return this;
  }

  prepend(value) {
    const node = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return this;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length += 1;

    return this;
  }

  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  insertAfter(targetValue, newValue) {
    const targetNode = this.find(targetValue);

    if (!targetNode) {
      return false;
    }

    const newNode = new DoublyLinkedListNode(newValue);
    const nextNode = targetNode.next;

    newNode.prev = targetNode;
    newNode.next = nextNode;
    targetNode.next = newNode;

    if (nextNode) {
      nextNode.prev = newNode;
    } else {
      this.tail = newNode;
    }

    this.length += 1;
    return true;
  }

  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      return null;
    }

    if (nodeToRemove.prev) {
      nodeToRemove.prev.next = nodeToRemove.next;
    } else {
      this.head = nodeToRemove.next;
    }

    if (nodeToRemove.next) {
      nodeToRemove.next.prev = nodeToRemove.prev;
    } else {
      this.tail = nodeToRemove.prev;
    }

    this.length -= 1;
    return nodeToRemove.value;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }

    const value = this.head.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length -= 1;
    return value;
  }

  removeLast() {
    if (!this.tail) {
      return null;
    }

    const value = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length -= 1;
    return value;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  toArray() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  toReverseArray() {
    const values = [];
    let current = this.tail;

    while (current) {
      values.push(current.value);
      current = current.prev;
    }

    return values;
  }
}

module.exports = DoublyLinkedList;
