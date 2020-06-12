class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(element) {
    if (this.size() === 0) {
      this.front += 1;
    }
    this.rear += 1;
    this.storage[this.rear] = element;
  }

  dequeue() {
    if (this.size() !== 0) {
      const temp = this.storage[this.front];
      delete this.storage[this.front];
      if (this.front === this.rear) {
        this.front = 0;
        this.rear = 0;
      } else {
        this.front += 1;
      }
      return temp;
    }
    return undefined;
  }
}

export default Queue;
