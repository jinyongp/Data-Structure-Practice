import Node from './Node';

/**
 * rear -> | <- front     => front === rear -> null
 * rear -> |1| <- front   => front === rear -> { item: 1, next: null }
 * rear -> |2|1| <- front => front !== rear ||>front: { item: 2, next: { item: 1, next: null } }
 *                                          ||>rear: {item: 1, next: null }
 * rear -> |2| <- front   => front === rear -> { item: 2, next: null }
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
   * front: { item: 1, next: null }
   * rear : { item: 1, next: null }
   *
   * rear -> |2|1| <- front   => front !== rear -> front: 1, rear: 2
   *
   * front: { item: 1, next: { item: 2, next: null } }
   * rear : { item: 2, next: null }
   *
   * rear -> |3|2|1| <- front => front !== rear -> front: 1, rear: 3
   *
   * front: { item: 1, next: { item: 2, next: { item: 3, next: null } } }
   * rear : { item: 3, next: null }
   */
  add(item) {
    const node = new Node(item);
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
   * front: { item: 1, next: null }
   * rear : { item: 3, next: { item: 2, next: { item: 1, next: null } } }
   *
   * rear -> |3|2| <- front => front !== rear -> front: 2, rear: 3
   * rear -> |3| <- front => front !== rear -> front: 3, rear: 3
   */
  remove() {
    if (!this.front) return undefined;
    const { data } = this.front;
    this.front = this.front.next;
    this._size -= 1;
    return data;
  }

  peek() {
    if (!this.front) return undefined;
    return this.front.data;
  }

  isEmpty() {
    return !this.front;
  }

  size() {
    return this._size;
  }
}

export default Queue;
