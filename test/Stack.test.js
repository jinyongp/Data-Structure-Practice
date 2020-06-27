import Stack from '../src/Stack';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('맨 처음 생성했을 시 stack은 비어있어야 한다.', () => {
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('아이템을 추가하면 그에 맞는 사이즈를 반환해야 한다.', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
  });

  it('아이템을 꺼냈을 때 가장 상단의 아이템을 가져와야 한다.', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.size()).toBe(0);
  });

  it('빈 스택에서 아이템을 꺼내면 undefined를 반환해야 한다.', () => {
    expect(stack.pop()).toBeUndefined();
  });

  it('아이템이 없을 때 꺼내도 size는 0을 유지해야 한다.', () => {
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  it('아이템을 꺼내는 순서는 선입후출이어야 한다.', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  it('스택의 가장 상단의 아이템을 확인만 할 수 있고 제거되면 안된다.', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
  });

  it('빈 스택의 최상단 아이템을 확인하려고 하면 undefined를 반환해야 한다.', () => {
    expect(stack.peek()).toBeUndefined();
  });
});
