import Node from './Node';

/**
 * rear -> | <- front     => front === rear -> null
 * rear -> |1| <- front   => front === rear -> { value: 1, next: null }
 * rear -> |2|1| <- front => front !== rear ||>front: { value: 2, next: { value: 1, next: null } }
 *                                          ||>rear: {value: 1, next: null }
 * rear -> |2| <- front   => front === rear -> { value: 2, next: null }
 * rear -> | <- front     => front === rear -> null
 */
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this._size = 0;
  }

  /**
   * rear -> | <- front       => front === rear -> null
   * rear -> |1| <- front     => front === rear -> 1
   *
   * front: { value: 1, next: null }
   * rear : { value: 1, next: null }
   *
   * rear -> |2|1| <- front   => front !== rear -> front: 1, rear: 2
   *
   * front: { value: 1, next: { value: 2, next: null } }
   * rear : { value: 2, next: null }
   *
   * rear -> |3|2|1| <- front => front !== rear -> front: 1, rear: 3
   *
   * front: { value: 1, next: { value: 2, next: { value: 3, next: null } } }
   * rear : { value: 3, next: null }
   */
  add(value) {
    const node = new Node(value);
    if (this.rear) {
      this.rear.next = node;
    }
    this.rear = node;
    if (!this.front) {
      this.front = this.rear;
    }
    this._size += 1;
  }

  /**
   * rear -> |3|2|1| <- front => front !== rear -> front: 1, rear: 3
   *
   * front: { value: 1, next: null }
   * rear : { value: 3, next: { value: 2, next: { value: 1, next: null } } }
   *
   * rear -> |3|2| <- front => front !== rear -> front: 2, rear: 3
   * rear -> |3| <- front => front !== rear -> front: 3, rear: 3
   */
  remove() {
    if (!this.front) return undefined;
    const { value } = this.front;
    this.front = this.front.next;
    this._size -= 1;
    return value;
  }

  peek() {
    if (!this.front) return undefined;
    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }

  size() {
    return this._size;
  }
}

export default Queue;
