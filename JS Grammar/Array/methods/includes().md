# includes()

## 배열이 특정 요소를 포함하고 있는지 판별

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

### includes()

```javascript
arr.includes(valueToFind[, fromIndex])
```

- 파라미터

  - valueToFind : 탐색할 요소
  - fromIndex : optional
    - 이 배열에서 searchElement 검색을 시작할 위치
    - array.length + fromIndex의 인덱스를 asc로 검색

- return 값

  - Boolean

- example

  ```javascript
  [1, 2, 3].includes(2); // true
  [1, 2, 3].includes(4); // false
  [1, 2, 3].includes(3, 3); // false
  [1, 2, 3].includes(3, -1); // true
  [1, 2, NaN].includes(NaN); // true
  ```
