# 산술 연산자

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 산술 연산자 ( +, -, \*, /)

### % (나머지)

- 이항 연산자
- 두 피연산자를 나눴을 때의 나머지를 반환
  ```javascript
  12 % 5; // 2
  ```

### ++ (증가)

- 단항 연산자 : 피연산자에 1을 더함
- a++ : 피연산자에 1을 증가시키며 a++ 자체는 바로 증가되지 않음
- ++a : 피연산자에 1을 증가시키며 동시에 ++a의 값도 1 증가

  ```javascript
  let b = 3;
  b++; // 3
  b; // 4

  let a = 3;
  ++a; // 3
  a; // 3
  ```

### -- (감소)

- 단항 연산자 : 피연산자에 1을 뺌
- a-- : 피연산자에 1을 감소시키며 a-- 자체는 바로 감소되지 않음
- --a : 피연산자에 1을 감소시키며 동시에 --a의 값도 1 감소

  ```javascript
  let y = 3;
  y--; // 3
  y; // 2

  let x = 3;
  --x; // 2
  x; // 2
  ```

### - (단항 부정)

- 단항 연산자 : 피연산자의 부호를 반대로 바꾼 값을 반환
  ```javascript
  let a = 3;
  -a; // -3
  ```

### \*\* (거듭 제곱)

- base^exponent, 즉 base를 exponent로 거듭제곱한 결과를 반환
  ```javascript
  2 ** 3; // 8
  10 ** -1; // 0.1
  ```
