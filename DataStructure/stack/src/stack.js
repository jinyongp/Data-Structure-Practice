class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    return this.top;
  }

  push(element) {
    this.top += 1;
    this.storage[this.top] = element;
  }

  pop() {
    if (this.top > 0) {
      const temp = this.storage[this.top];
      delete this.storage[this.top];
      this.top -= 1;
      return temp;
    }
    return undefined;
  }
}

export default Stack;
