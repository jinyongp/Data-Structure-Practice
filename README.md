# Data Structure Practice <!-- omit in TOC -->

JavaScript로 자료구조를 구현한 코드의 저장소입니다.

---

## Table of Contents <!-- omit in TOC -->

- [Stack](#stack)
  - [Properties of Stack](#properties-of-stack)
  - [Methods of Stack](#methods-of-stack)
  - [Time Complexity of Stack](#time-complexity-of-stack)
- [Queue](#queue)
  - [Properties of Queue](#properties-of-queue)
  - [Methods of Queue](#methods-of-queue)
  - [Time Complexity of Queue](#time-complexity-of-queue)
- [Singly Linked List](#singly-linked-list)
  - [Properties of Singly Linked List](#properties-of-singly-linked-list)
  - [Methods of Singly Linked List](#methods-of-singly-linked-list)
  - [Time Complexity of Singly Linked List](#time-complexity-of-singly-linked-list)

---

## Stack

- 선입후출(FILO, First In Last Out)의 구조를 가짐
- 거꾸로 정렬된 데이터를 꺼낼 때 유용하다.

### Properties of Stack

- `top`: 최상단의 Node를 가리킨다.

### Methods of Stack

- [x] `push(item)`: 아이템 쌓기
- [x] `pop()`: 아이템 꺼내기
- [x] `peek()`: 맨 상단 아이템 확인
- [x] `isEmpty()`: 스택이 비었는지 확인
- [x] `size()`: 스택에 있는 아이템의 갯수

### Time Complexity of Stack

  | Access | Insertion | Deletion |
  | :----: | :-------: | :------: |
  |  O(n)  |   O(1)    |   O(1)   |

---

## Queue

- 선입선출(FIFO, First In First Out)의 구조를 가짐
- 제대로 정렬된 데이터를 꺼낼 때 유용하다.

### Properties of Queue

- `front`: 가장 앞의 Node의 주소를 가리킨다.
- `rear`: 가장 뒤의 Node의 주소를 가리킨다.

### Methods of Queue

- [x] `add(item)`: 아이템 추가
- [x] `remove()`: 아이템 제거
- [x] `peek()`: 맨 앞의 아이템 확인
- [x] `isEmpty()`: 큐가 비어있는 확인
- [x] `size()`: 큐에 있는 아이템의 갯수

### Time Complexity of Queue

  | Access | Insertion | Deletion |
  | :----: | :-------: | :------: |
  |  O(n)  |   O(1)    |   O(1)   |

---

## Singly Linked List

- value와 next 포인터를 가진 Node의 연결로 이루어진 단방향 연결 리스트
- 배열과 달리 메모리 공간을 효율적으로 사용한다.

### Properties of Singly Linked List

### Methods of Singly Linked List

- [x] `append(item)`: 연결 리스트의 끝에 아이템 추가
- [x] `remove(item)`: 아이템 삭제
- [x] `getNodeAt(index)`: 해당 인덱스의 Node를 반환
- [x] `contains(item)`: 아이템의 존재 여부 확인
- [x] `indexOf(item)`: Node의 인덱스를 반환. 없을 경우 -1 반환
- [x] `size()`: 연결 리스트에 있는 아이템의 갯수

### Time Complexity of Singly Linked List

  | Access | Insertion |  Deletion   |
  | :----: | :-------: | :---------: |
  |  O(n)  |   O(1)    | O(1) / O(n) |

>삭제의 경우, 이전 Node의 정보를 인자에 포함한다면 `O(1)`의 시간복잡도를 가진다. 반면에 값만 주어진다면, 연결리스트에서 순회하며 해당 값을 찾아야 하므로 `O(n)`의 시간 복잡도를 가진다.

---
