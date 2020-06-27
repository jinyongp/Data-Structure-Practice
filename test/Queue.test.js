import Queue from '../src/Queue';

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it('add(item)', () => {
    queue.add(1);
    queue.add(2);
    expect(queue.size()).toEqual(2);
  });

  it('remove(item)', () => {
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(2);
    expect(queue.remove()).toBe(3);
    expect(queue.remove()).toBeUndefined();
  });

  it('peek() ', () => {
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toBe(1);
    expect(queue.remove()).toBe(1);
    queue.remove();
    expect(queue.peek()).toBeUndefined();
  });

  it('size()', () => {
    expect(queue.size()).toBe(0);
    queue.add(1);
    queue.add(2);
    expect(queue.size()).toBe(2);
    queue.remove();
    queue.remove();
    expect(queue.size()).toBe(0);
    queue.remove();
    expect(queue.size()).toBe(0);
  });

  it('isEmpty()', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.add(1);
    expect(queue.isEmpty()).toBe(false);
    queue.remove();
    expect(queue.isEmpty()).toBe(true);
  });
});
