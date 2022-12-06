# Programmes algorithm #2

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 두 정수 사이의 합

### 문제 설명

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

### 제한 조건

- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.

### 예시

- 입출력 예

```
a = 3, b = 5, return = 12
a = 5, b = 3, return = 12
a = 3, b = 3, return = 3
```

### 풀이 과정

- 풀이 계획

  - a 가 b 보다 작거나 같은 경우과 b가 a보다 큰 경우를 나눔
  - a 와 b 사잇값을 하나의 리스트에 담아 모두 더하는 식을 작성
    ```javascript
    if (a <= b) {
      for (let i = a; i <= b; i++) {
        answer += i;
      }
    }
    ```

- 문제 답안

  ```javascript
  function solution(a, b) {
    var answer = 0;

    if (a <= b) {
      for (let i = a; i <= b; i++) {
        answer += i;
      }
    } else if (b < a) {
      for (let i = b; i <= a; i++) {
        answer += i;
      }
    }
    return answer;
  }
  ```

### 공부 내용
