class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * isEmpty(): true | push(1);        | push(2);        | push(3);        | pop(): 3
 * | |             | | |             | | |             | |3| <- this.top | | |             |
 * | |             | | |             | |2| <- this.top | |2|             | |2| <- this.top |
 * | |             | |1| <- this.top | |1|             | |1|             | |1|             |
 * |-| <- this.top | |-|             | |-|             | |-|             | |-|             |
 */

class Stack {
  constructor() {
    this.top = 0;
    this._size = 0;
  }

  /**
   * push(1);        | push(2);        |
   * | |             | | |             |
   * | |             | |2| <- this.top |
   * |1| <- this.top | |1|             |
   * |-|             | |-|             |
   *
   * this.top = null
   *
   * push(1);
   *
   * this.top = { value: 1, next: null}
   *
   * push(2);
   *
   * this.top = { value: 2, next: { value: 1, next: null } }
   */
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this._size += 1;
  }

  /**
   * push(3);        | pop(): 3
   * |3| <- this.top | | |             |
   * |2|             | |2| <- this.top |
   * |1|             | |1|             |
   * |-|             | |-|             |
   */
  pop() {
    if (!this.top) return undefined;
    const { value } = this.top;
    this.top = this.top.next;
    this._size -= 1;
    return value;
  }

  /**
   * peek(): 3       |                 |
   * |3| <- this.top | |3| <- this.top |
   * |2|             | |2|             |
   * |1|             | |1|             |
   * |-|             | |-|             |
   */
  peek() {
    if (!this.top) return undefined;
    return this.top.value;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return !this.top;
  }
}

export default Stack;
