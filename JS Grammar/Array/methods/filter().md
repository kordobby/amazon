# filter()

## 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

### filter()

```javascript
arr.filter(callback(element[, index[, array]])[, thisArg])
```

- 파라미터

  - callback
    - 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버림
    - 다음 세 가지 매개변수를 받음
  - element
    - 처리할 현재 요소
  - index :: optional
    - 처리할 현재 요소의 인덱스
  - array :: optional
    - filter를 호출한 배열
  - thisArg :: optional
    - callback을 실행할 때 this로 사용하는 값

- return 값

  - 테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환

- 설명

  - filter()는 배열 내 각 요소에 대해 한 번 제공된 callback 함수를 호출해, callback이 true로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열을 생성
  - callback은 할당된 값이 있는 배열의 인덱스에 대해서만 호출
  - 삭제됐거나 값이 할당된 적이 없는 인덱스에 대해서는 호출되지 않음
  - callback 테스트를 통과하지 못한 배열 요소는 그냥 건너뛰며 새로운 배열에 포함되지 않음

  - callback은 다음 세 인수와 함께 호출
    1.  요소값
    2.  요소 인덱스
    3.  순회(traverse)되는 배열 객체

- example

  ```javascript
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];

  const result = words.filter((word) => word.length > 6);

  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]
  ```
