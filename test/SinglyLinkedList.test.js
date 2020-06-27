import SinglyLinkedList from '../src/SinglyLinkedList';

describe('Singly Linked List', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new SinglyLinkedList();
  });

  it('append(item)', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    expect(linkedList.getNodeAt(0).data).toBe(1);
    expect(linkedList.getNodeAt(1).data).toBe(2);
    expect(linkedList.getNodeAt(2).data).toBe(3);
    expect(linkedList.getNodeAt(3).data).toBe(4);
    expect(linkedList.getNodeAt(4).data).toBe(5);
  });

  it('remove(item)', () => {
    expect(() => linkedList.remove(0)).not.toThrow();
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.getNodeAt(0).data).toBe(1);
    linkedList.remove(1);
    expect(linkedList.getNodeAt(0).data).toBe(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    linkedList.append(6);
    linkedList.append(7);
    linkedList.remove(4);
    linkedList.remove(2);
    linkedList.remove(7);
    expect(linkedList.getNodeAt(0).data).toBe(3);
    expect(linkedList.getNodeAt(1).data).toBe(5);
    expect(linkedList.getNodeAt(2).data).toBe(6);
    expect(linkedList.size()).toBe(3);
  });

  it('getNodeAt(item)', () => {
    expect(linkedList.getNodeAt(0)).toBeUndefined();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.getNodeAt(1).data).toBe(2);
    expect(linkedList.getNodeAt(5)).toBeUndefined();
  });

  it('contains(item)', () => {
    expect(linkedList.contains(0)).toBe(false);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.contains(2)).toBe(true);
    expect(linkedList.contains(4)).toBe(false);
  });

  it('indexOf(item)', () => {
    expect(linkedList.indexOf(0)).toBe(-1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.indexOf(1)).toBe(0);
    expect(linkedList.indexOf(2)).toBe(1);
    expect(linkedList.indexOf(3)).toBe(2);
    expect(linkedList.indexOf(4)).toBe(-1);
  });

  it('size()', () => {
    expect(linkedList.size()).toBe(0);
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.size()).toBe(2);
    linkedList.remove(1);
    linkedList.remove(2);
    expect(linkedList.size()).toBe(0);
  });
});
