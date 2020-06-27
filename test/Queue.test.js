import Queue from '../src/Queue';

describe('Queue', () => {
  it('Check All Methods of Queue.', () => {
    const queue = new Queue();

    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);

    expect(queue.remove()).toBeUndefined();
    expect(queue.peek()).toBeUndefined();

    queue.add(1);
    queue.add(2);

    expect(queue.size()).toBe(2);
    expect(queue.isEmpty()).toBe(false);

    queue.add(3);
    queue.add(4);

    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(2);
    expect(queue.peek()).toBe(3);
    expect(queue.remove()).toBe(3);
    expect(queue.remove()).toBe(4);

    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.remove()).toBeUndefined();
  });
});
