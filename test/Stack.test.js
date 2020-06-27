import Stack from '../src/Stack';

describe('Stack', () => {
  it('Check All Methods of Stack.', () => {
    const stack = new Stack();

    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);

    expect(stack.pop()).toBeUndefined();
    expect(stack.peek()).toBeUndefined();

    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
    expect(stack.isEmpty()).toBe(false);

    stack.push(3);
    stack.push(4);

    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);

    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBeUndefined();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.pop()).toBeUndefined();
  });
});
