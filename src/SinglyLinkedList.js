import Node from './Node';

/**
 * head(null)  -> | <- tail(null)
 * head(item1) -> |item1|null| <- tail(item1)
 * head(item2) -> |item1|item2| -> |item2|null| <- tail(item1)
 * head(item3) -> |item1|item2| -> |item2|item3| -> |item3|null| <- tail(item1)
 * head(item3) -> |item1|item2| -> |item2|null| <- tail(item1)
 * head(item3) -> |item1| <- tail(item3)
 * head(null)  -> | <- tail(null)
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  append(item) {
    const node = new Node(item);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._size += 1;
  }

  remove(item) {
    let previous = null;
    let current = this.head;
    while (current) {
      if (current.data === item) {
        if (previous) {
          previous.next = current.next;
        } else {
          this.head = current.next;
        }
        this._size -= 1;
        return;
      }
      previous = current;
      current = current.next;
    }
  }

  getNodeAt(index) {
    if (index >= this.size()) return undefined;
    let current = this.head;
    while (index) {
      current = current.next;
      index -= 1;
    }
    return current || undefined;
  }

  contains(item) {
    let current = this.head;

    while (current) {
      if (current.data === item) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  indexOf(item) {
    if (!this.head) return -1;
    let current = this.head;
    for (let index = 0; index < this.size(); index += 1) {
      if (current.data === item) {
        return index;
      }
      current = current.next;
    }
    return -1;
  }

  size() {
    return this._size;
  }
}

export default SinglyLinkedList;
