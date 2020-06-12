/* eslint-disable no-underscore-dangle */
import Node from './node';

/**
 * 연결 리스트는 크기가 동적인 자료구조로, 노드의 연결로 이루어진 자료구조이다.
 * 연결 리스트의 각 노드는 인덱스를 가지지 않는다.
 * 특정 데이터를 연결 리스트에서 검색하고자 할 경우, 처음부터 전체 연결 리스트를 훑어야 하므로 O(n)의 복잡도를 필요로 함
 *
 * 시간 복잡도: 추가 = O(1), 삭제 = O(1), 탐색 = O(n)
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  // 주어진 값을 연결 리스트의 끝에 추가합니다.
  // 추가 삭제 O(1)
  addToTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.head === this.tail) {
      this.head.next = newNode;
      this.tail = newNode;
    }
    if (this.head !== this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size += 1;
  }

  // 주어진 값을 찾아서 연결을 해제(삭제)합니다
  remove(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this._size -= 1;
      return;
    }
    let pre = this.head;
    let currentNode = this.head.next;
    for (; currentNode; pre = currentNode, currentNode = currentNode.next) {
      if (currentNode.value === value) {
        pre.next = currentNode.next;
        if (currentNode === this.tail) {
          this.tail = pre;
        }
        this._size -= 1;
        return;
      }
    }
  }

  // 주어진 인덱스의 노드를 찾아서 반환합니다. 값이 아니라 노드를 반환해야 하는 것에 주의하세요. 해당 인덱스에 노드가 없다면 undefined를 반환합니다.
  getNodeAt(index) {
    let node = this.head;
    for (let i = 0; i < index; i += 1) {
      if (!node) {
        return undefined;
      }
      node = node.next;
    }
    return node;
  }

  // 연결리스트에 주어진 값을 가지는 노드의 존재 여부를 반환합니다.
  contains(value) {
    let node = this.head;
    for (let i = 0; i < this._size; i += 1) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  // 주어진 값의 인덱스를 반환합니다. 없을 경우 -1을 반환합니다.
  indexOf(value) {
    let node = this.head;
    for (let i = 0; i < this._size; i += 1) {
      if (node.value === value) {
        return i;
      }
      node = node.next;
    }
    return -1;
  }

  size() {
    return this._size;
  }
}

export default LinkedList;
