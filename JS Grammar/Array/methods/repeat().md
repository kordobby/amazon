# repeat()

## 배열이 특정 요소를 포함하고 있는지 판별

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

### repeat()

```javascript
str.repeat(count);
```

- 파라미터

  - count
    - 문자열을 반복할 횟수. 0과 양의 무한대 사이의 정수([0, +∞))

- return 값

  - 현재 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열

- 예외

  - RangeError: 반복 횟수는 양의 정수여야 함
  - RangeError: 반복 횟수는 무한대보다 작아야 하며, 최대 문자열 크기를 넘어선 안됨

- example

  ```javascript
  "abc".repeat(-1); // RangeError
  "abc".repeat(0); // ''
  "abc".repeat(1); // 'abc'
  "abc".repeat(2); // 'abcabc'
  "abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
  "abc".repeat(1 / 0); // RangeError

  ({ toString: () => "abc", repeat: String.prototype.repeat }.repeat(2));
  // 'abcabc' (repeat() is a generic method)
  ```
