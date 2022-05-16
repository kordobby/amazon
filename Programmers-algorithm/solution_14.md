# Programmes algorithm #14

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 나누어 떨어지는 숫자 배열

https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

### 문제 설명

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

### 제한 조건

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

### 입출력 예
- arr = [5, 9, 7, 10], divisor = 5, return = [5, 10]
### 풀이 과정

- 문제 풀이

```javascript
function solution(arr, divisor) {
    var answer = [];
    /* 나머지가 0으로 떨어지는 요소를 찾아서 answer array에 push */
    for (i=0; i<arr.length; i++) {     
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    } /
    /* 나머지가 0으로 떨어지는 요소 배열의 길이가 0인 경우 -1 push */
    if (answer.length == 0) {
        answer.push(-1);
    }
    
    answer.sort((a,b) => a - b); // 배열 오름차순 정렬
    return answer;
}
```
### 다른 풀이 방법
```javascript
function solution(arr, divisor) {
  let answer = arr.filter((v) => {v % divisor === 0});
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
  // answer.length => false, [-1]
}
```


### 공부 내용

- https://choice91.tistory.com/45