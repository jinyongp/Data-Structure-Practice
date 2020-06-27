# Data Structure Practice <!-- omit in TOC -->

자료구조를 구현한 코드의 저장소입니다.

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

---

## Stack

- 선입후출(FILO, First In Last Out)의 구조를 가짐
- 거꾸로 정렬된 데이터를 꺼낼 때 유용하다.

### Properties of Stack

- `top`: 최상단의 Node를 가리킨다.

### Methods of Stack

- [x] `push()`: 아이템 쌓기
- [x] `pop()`: 아이템 꺼내기
- [x] `peek()`: 맨 상단 아이템 확인
- [x] `isEmpty()`: 스택이 비었는지 확인
- [ ] `size()`: 스택에 있는 아이템의 갯수

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

- [ ] `add()`: 아이템 추가
- [ ] `remove()`: 아이템 제거
- [ ] `peek()`: 맨 앞의 아이템 확인
- [ ] `isEmpty()`: 큐가 비어있는 확인
- [ ] `size()`: 큐에 있는 아이템의 갯수

### Time Complexity of Queue

  | Access | Insertion | Deletion |
  | :----: | :-------: | :------: |
  |  O(n)  |   O(1)    |   O(1)   |

---
