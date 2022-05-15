# slice()

## 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

### slice()

```javascript
arr.slice([begin[, end]])
```

- 파라미터

  - begin : optional
    - 0을 시작으로 하는 추출 시작점에 대한 인덱스를 의미
    - 음수 인덱스는 배열의 끝에서부터의 길이
    - begin이 undefined인 경우에는, 0번 인덱스부터 slice
    - begin이 배열의 길이보다 큰 경우에는, 빈 배열을 반환
  - end : optional
    - 추출을 종료 할 0 기준 인덱스
    - slice 는 end 인덱스를 제외하고 추출
    - end가 생략되면 slice()는 배열의 끝까지(arr.length) 추출
    - end 값이 배열의 길이보다 크다면, silce()는 배열의 끝까지(arr.length) 추출

- return 값

  - 추출한 요소를 포함한 새로운 배열

- 설명

  - slice()는 원본을 대체하지 않고 원본 배열에서 요소의 얕은 복사본을 반환

- example

  ```javascript
  const animals = ["ant", "bison", "camel", "duck", "elephant"];

  console.log(animals.slice(2));
  // expected output: Array ["camel", "duck", "elephant"]

  console.log(animals.slice(2, 4));
  // expected output: Array ["camel", "duck"]

  console.log(animals.slice(1, 5));
  // expected output: Array ["bison", "camel", "duck", "elephant"]

  console.log(animals.slice(-2));
  // expected output: Array ["duck", "elephant"]

  console.log(animals.slice(2, -1));
  // expected output: Array ["camel", "duck"]

  console.log(animals.slice());
  // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
  ```
