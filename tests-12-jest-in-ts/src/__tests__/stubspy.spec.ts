import { createSolutionBuilder } from 'typescript';

const myObj = {
  doSomething() {
    console.log('does something');
  },
};

describe('Stub과 Spy비교하기', () => {
  // In Jest, stubs are instantiated with jest.fn() and they’re used with expect(stub).<assertionName>.
  test('jest.fn()으로 stub 생성, 실행, 그리고 검증하기', () => {
    const stub = jest.fn();
    stub();
    expect(stub).toBeCalled();
    expect(stub).toHaveBeenCalled();
  });

  // Jest spies are instantiated using jest.spyOn(obj, 'functionName'). Note: you can’t spy something that doesn’t exist on the object.
  test('jest.spyOn()으로 spy 생성, 실행, 그리고 검증하기', () => {
    const spyOnDoSomething = jest.spyOn(myObj, 'doSomething');
    myObj.doSomething();
    expect(spyOnDoSomething).toBeCalled();
    expect(spyOnDoSomething).toHaveBeenCalled();
  });

  test('jest.spyOn()으로 메소드 목킹하기', () => {
    const spyOnDoSomething = jest.spyOn(myObj, 'doSomething').mockImplementation();
    myObj.doSomething();
    expect(spyOnDoSomething).toBeCalled();
    expect(spyOnDoSomething).toHaveBeenCalled();
  });

  test('jest.spyOn()으로 메소드 리턴값 목킹하기', () => {
    const spyOnDoSomething = jest.spyOn(myObj, 'doSomething').mockReturnValue();
    myObj.doSomething();
    expect(spyOnDoSomething).toBeCalled();
    expect(spyOnDoSomething).toHaveBeenCalled();
  });
});

describe('Stub과 Spy 차이점', () => {
  let count = 0;

  // 목킹 대상
  const counter = {
    add(val) {
      count += val;
    },
    increment() {
      count += 1;
    },
    getCount() {
      return count;
    },
  };

  // 테스트 대상 1
  const app = (counter) => {
    counter.increment();
  };

  // 테스트 대상 2
  const singleAdd = (counter) => {
    counter.add(10);
  };

  // 테스트 대상 3
  const multipleAdd = (counter) => {
    counter.add(15);
    counter.add(20);
  };

  test('app() with mock counter .toHaveBeenCalledTimes(1)', () => {
    // counter의 increment를 jest.fn()으로 sub처리함
    const mockCounter = {
      increment: jest.fn(),
    };
    // 테스트 대상 호출
    app(mockCounter);
    // 호출 처리 검증
    expect(mockCounter.increment).toHaveBeenCalledTimes(1);
    // counter를 직접사용하지 않는다.
  });

  test('app() with jest.spyOn(counter) .toHaveBeenCalledTimes(1)', () => {
    // counter의 increment를 spyOn()으로 spy 처리함
    const incrementSpy = jest.spyOn(counter, 'increment');

    // 테스트 대상 호출
    app(counter);
    // 호출 처리 검증
    expect(incrementSpy).toHaveBeenCalledTimes(1);
    // counter를 직접 사용해서 결과값을 확인할 수 이
    expect(counter.getCount()).toEqual(1);
  });

  test('singleAdd > jest.fn() toHaveBeenCalledWith() single call', () => {
    // counter의 add를 jest.fn()으로 sub처리함
    const mockCounter = {
      add: jest.fn(),
    };
    // 테스트 대상 호출
    singleAdd(mockCounter);
    // 호출 처리 검증
    expect(mockCounter.add).toHaveBeenCalledWith(10);
  });

  test('singleAdd > jest.spyOn() toHaveBeenCalledWith() single call', () => {
    // counter의 add를 spyOn()으로 spy 처리함
    const addSpy = jest.spyOn(counter, 'add');
    // 테스트 대상 호출
    singleAdd(counter);
    // 호출 처리 검증
    expect(addSpy).toHaveBeenCalledWith(10);
  });

  test('multipleAdd > jest.fn() toHaveBeenCalledWith() multiple calls', () => {
    // counter의 add를 jest.fn()으로 sub처리함
    const mockCounter = {
      add: jest.fn(),
    };
    // 테스트 대상 호출
    multipleAdd(mockCounter);
    // 호출 처리 검증
    expect(mockCounter.add).toHaveBeenCalledWith(15);
    expect(mockCounter.add).toHaveBeenCalledWith(20);
  });

  test('multipleAdd > jest.fn() toHaveBeenCalledWith() multiple calls', () => {
    // counter의 add를 spyOn()으로 spy 처리함
    const addSpy = jest.spyOn(counter, 'add');
    // 테스트 대상 호출
    multipleAdd(counter);
    // 호출 처리 검증
    expect(addSpy).toHaveBeenCalledWith(15);
    expect(addSpy).toHaveBeenCalledWith(20);
  });
});
