import Node from './Node';

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
   * this.top = { item: 1, next: null}
   *
   * push(2);
   *
   * this.top = { item: 2, next: { item: 1, next: null } }
   */
  push(item) {
    const node = new Node(item);
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
    const { data } = this.top;
    this.top = this.top.next;
    this._size -= 1;
    return data;
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
    return this.top.data;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return !this.top;
  }
}

export default Stack;
