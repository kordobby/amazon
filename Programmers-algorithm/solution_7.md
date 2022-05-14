# Programmes algorithm #7

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 음양 더하기

https://programmers.co.kr/learn/courses/30/lessons/76501

### 문제 설명

어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

### 제한 조건

- absolutes의 길이는 1 이상 1,000 이하입니다.
  - absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
- signs의 길이는 absolutes의 길이와 같습니다.
  - signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

### 입출력 예

- absolutes = [4,7,12], signs = [true,false,true], result = 9
  - signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
  - 따라서 세 수의 합인 9를 return 해야 합니다.

### 풀이 과정

- 풀이 계획

  - 접근

    1. 문제 조건 정리
       - absolute 는 숫자의 배열
       - signs 는 true와 false의 배열
    2. for문을 이용해 array의 길이만큼 요소를 확인
       ```javascript
        for(let i = 0; i <absolutes.length; i++)
       ```
    3. signs의 값에 따라 양수와 음수가 결정되므로 이에 따른 조건을 설정
       ```javascript
       signs[i] == 1; /* true */
       ```
    4. 각 조건에 따른 결과값을 구하는 식 작성
       ```javascript
       result += absolutes[i]; /* 양수 */
       /* absolutes[i] = [ 1, 2, 3 ]
           result += absolutes[i]
           result = 0 + 1 
           result = 1 + 2
           result = 3 + 3 */
       result -= absolutes[i]; /* 음수 */
       /* absolutes[i] = [ 1, 2, 3 ]
           result -= absolutes[i]
           result = 0 - 1 
           result = -1 - 2
           result = -3 - 3 */
       ```
    5. 계획한 것들 조합하기
       ```javascript
       for (let i = 0; i < absolutes.length; i++) {
         if (signs[i] == 1) {
           result += absolutes[i];
         } else {
           result -= absolutes[i];
         }
       }
       ```

- 문제 답안

```javascript
function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == 1) {
      result += absolutes[i];
    } else {
      result -= absolutes[i];
    }
  }
  return result;
}
```

### 공부 내용

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
