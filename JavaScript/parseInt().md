# parseInt()

## 문자를 숫자로 반환

### parseInt()

```javascript
parseInt(string, radix);
```

- 파라미터

  - string : 숫자로 변환할 문자열
  - radix : optional
    - string 문자열을 읽을 진법(수의 진법 체계의 진법)
    - 2 - 36의 수

- return 값

  - string을 정수로 변환한 값을 리턴
  - 만약 string의 첫 글자를 정수로 변경할 수 없으면 NaN 리턴

- example

  ```javascript
  parseInt("10"); // 10
  parseInt("-10"); // -10

  /* 소수점 제거, 정수값만 리턴 */
  parseInt("10.9"); // 10

  /* 문자열이 아닌 다른 타입은 문자열로 변환하여 처리 */
  parseInt(10); // 10

  /* 숫자가 아닌 문자 이후의 값은 무시, 이전의 숫자만 정수로 변환 */
  parseInt("10n"); // 10
  parseInt("10nnn13"); // 10

  /* 공백 허용 및 무시 */
  parseInt("      10"); // 10
  parseInt("10      "); // 10

  /* 문자열의 첫글자가 숫자가 아니면 NaN */
  parseInt("k10"); // NaN

  /* 숫자가 없음 */
  parseInt(""); // NaN
  ```
