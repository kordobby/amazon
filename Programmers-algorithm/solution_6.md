# Programmes algorithm #6

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 없는 숫자 더하기

https://programmers.co.kr/learn/courses/30/lessons/86051

### 문제 설명

0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

### 제한 조건

- 1 ≤ numbers의 길이 ≤ 9
  - 0 ≤ numbers의 모든 원소 ≤ 9
  - numbers의 모든 원소는 서로 다릅니다.

### 입출력 예

- numbers = [1,2,3,4,6,7,8,0], result = 14

### 풀이 과정

- 풀이 계획

  - 접근

    1.  for 문을 돌려서 0부터 9까지 데이터를 확인
        ```javascript
        for(let i=0; i<10; i++)
        ```
    2.  numbers 의 array와 일치하지 않는 요소가 true가 되도록 조건설정

        ```javascript
        if (!numbers.includes(i)) {
        }
        ```

    3.  조건에 부합하는 요소들의 합을 구하자
        ```javascript
        answer += i;
        ```
    4.  계획한 것들 조합하기
        ```javascript
        for (let i = 0; i < 10; i++) {
          if (!numbers.includes(i)) {
            answer += i;
          }
        }
        ```

- 문제 답안

```javascript
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}
```

### 공부 내용

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
