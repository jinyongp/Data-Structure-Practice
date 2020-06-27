import Stack from '../src/Stack';

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('push(item)', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toEqual(2);
  });

  it('pop(item)', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  it('peek() ', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBeUndefined();
  });

  it('size()', () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
    stack.pop();
    stack.pop();
    expect(stack.size()).toBe(0);
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  it('isEmpty()', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});
