# TDD - jest

참고: https://velog.io/@sssssssssy/TDD-Jest
참고할 사이트 : Mock - https://www.daleseo.com/jest-fn-spy-on/

## 프론트엔드 테스트

- 테스트의 궁극적 목표 : 애플리케이션의 안정성과 유지 보수성 향상

### 좋은 테스트란?

1. 모든 테스트는 독립적으로 실행
2. 테스트의 결과는 일관성이 있어야 함
3. 내부 구현에 종속된 테스트는 지양
4. 테스트는 단순하고 이해하기 쉽게
5. 유지보수가 가능한 테스트 작성

#### '사용자 관점' 에서 최대한 사용자가 직접 사용하는 것 처럼 시나리오 작성 & 검증

- 테스트의 종류
  - 단위 테스트
  - 통합 테스트
  - E2E 테스트 (??????????????????)

## TDD (Test Driven Dev) 테스트 주도 개발

- 테스트코드를 먼저 작성하고 그 테스트를 통과시킬 수 있는 최소한의 코드로 개발 진행
- 테스트 통과 시 다음 테스트 작성, 계속해서 테스트 통과시키며 개발해나가는 방식
- TDD 방식으로 개발하기 위해서는 구현 사항에 대해 명확하게 이해하고 이해한 내용을 토대로 구현단위를 쪼개어 개발

## JEST

### : javascript test framework

```bash
npm install --save-dev jest
```

### test(), it()

- `.test` 확장자로 끝나는 파일들에 한해 자동으로 테스트 실행
- 아래와 같은 두가지 방식으로 테스트 작성
  `test()` 함수는 `it()` 함수의 별칭이며 기능은 동일

```javascript
test('원하는 테스트 이름', () => {
  test Fn
  expect()
})

it('원하는 테스트 이름', () => {
  test Fn
  expect()
});
```

### describe()

- 만약 같은 종류의 테스트라 한단될 때는, 묶어쓸 수 있음

```javascript
// 묶어서 test
describe("login", () => {
  it("", () => {});
  it("", () => {});
});
```

### matcher

- 값이 특정 조건을 만족하는지 검증할 수 있는 일종의 집합
- jest 에서는 `expect()` 함수를 사용해 `matcher` 실행 가능

```javascript
toBe(); // 정확한 값 유추 시 사용
toEqual(); // 객체 일치여부 확인 시 사용
toStrictEqual(); // 객체 일치여부 확인 시 사용(권장)

toHaveBeenCalled(); // 함수가 호출되었는지 검증
toHaveBeenCalledWith(); // 함수에 어떠한 인자가 넘어가 실행되었는지 함께 검증
toHaveBeenCalledTimes(); // 함수가 몇 번 호출되었는지 정확히 검증

toThrow(); // 특정 상황에서 에러 발생하는지 테스트
```

```javascript
expect(foo.setBar).toHaveBeenCalled();
```

### Setup

- `beforeEach` : file 또는 scope 내의 모든 테스트가 실행되기 전에 `beforeEach` 함수 내에 작성한 함수가 우선적으로 실행됨
- `afterEach` : `beforeEach` 와는 반대로 테스트 실행이 완료될 때마다 실행됨

### test double

- 외부 interface, API 를 통해 데이터를 받아오는 부분 같은 경우, 대체할 객체를 만들거나 API 자체를 흉내내는 모듈이 필요 => 이러한 개념을 모킹이라 하며 용도에 따른 개념들이 있음

  - Stub(스텁)

    - 더미 객체가 실제로 동작하는 것 처럼 만들어놓은 것
    - 호출될 시에 미리 준비되어 있는 결과를 반환함

    ```javascript
    const stub = jest.fn((value) => 20 + value);
    // or
    const stub = jest.fn().mockImplementation((value) => 20 + value);

    it(
      ("",
      () => {
        console.log(stub(2)); // 22
      })
    );
    ```

    - 목(Mock)
      - 실제 객체와 동일한 동작을 하도록 만들어진 모의 객체
      - 네트워크 통신에 필요한 Axios 라이브러리를 대체하는 `jest-mock-axios` 와 같은 라이브러리가 Mock 의 대표적 예시

### error test

- error 발생 상황 만들고 발생여부 확인

```javascript
  it('error test', () => { // 예상하는 에러에 대한 검증 테스트 코드
    expect(() =? {
      userInfo.password(1234); // expect 안에서 콜백으로 예상하는 에러 생성
    }).toThrow('throw error') // 에러 발생 시 에러 던지도록 작성
  })
```

- 비동기 데이터 처리일 경우,

```javascript
it("return", () => {
  return promiseData().then((data) => {
    // 비동기 수행하고 그 안에서 확인한다면 프로미스 자체를 리턴
    expect(data).toEqual({ data: "dummy" });
  });
});

it("async - await", async () => {
  // await 사용할 때는 async 같이
  const dummy = await promiseData();
  expect(data).toEqual({ data: "dummy" });
});
```

+++ 컴포넌트를 나눔에 있어서, stateless component 를 쪼개고 구성해나가는 최고의 방법은 무엇일까요??????????
+++ 내 궁금증..... 프론트에서의 테스트코드는 과연 효율적인가......
