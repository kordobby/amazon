# Programmes algorithm #2

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 짝수와 홀수

### 문제 설명

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

### 제한 조건

- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

### 예시

- 입출력 예

```
num = 3, return = "Odd"
num = 4, return = "Even"
```

### 풀이 과정

- 풀이 계획

  - num 이 짝수인 경우와 홀수 인 경우의 출력 결과를 다르게 하기 위해 if-else 를 활용하기로 계획
  - 짝수인 경우를 기준으로 잡고 num 의 짝수를 구하는 식 작성
    ```javascript
    num % 2 === 0;
    // 짝수는 2로 나누면 나머지가 없음!
    // (%) 는 좌측 피연산자를 우측 피연산자로 나눴을 때의 나머지를 구함
    ```
  - 위 조건을 활용한 if 문 작성
    ```javascript
    // num 이 짝수일 경우, answer = "Even"
    if (num % 2 === 0) {
      answer = "Even";
    } else {
      // num 이 짝수일 경우, answer = "Odd"
      answer = "Odd";
    }
    ```

- 문제 답안

  ```javascript
  function solution(num) {
    var answer = "";
    if (num % 2 === 0) {
      answer = "Even";
    } else {
      answer = "Odd";
    }
    return answer;
  }
  ```

### 공부 내용

- 나머지 구하기 (%)
