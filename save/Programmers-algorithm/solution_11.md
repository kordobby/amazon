# Programmes algorithm #11

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## x만큼 간격이 있는 n개의 숫자

https://programmers.co.kr/learn/courses/30/lessons/12954

### 문제 설명

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

### 제한 조건

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.
### 입출력 예

- x = 2. n = 5, answer = [2, 4, 6, 8, 10]
### 풀이 과정

- 문제 풀이

```javascript
function solution(x, n) {
    var answer = [];
    let num = 0;
    
    for (i=0; i < n; i++) {
        num = x *(i+1);   // x*1, x*2, ..., x*n 
        answer.push(num); // [x*1, x*2, ..., x*n]
    }
    return answer;
}
```
### 다른 풀이 방법
```javascript
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
```

* 위 풀이 방법의 흐름
 1. x 를 n 만큼 채운 array를 만들기
 2. arr.map() 을 이용해 각 요소에 값을 곱해주기

 ```javascript
 /* 1. x를 n만큼 채운 array 만들기 */ 
  Array(n).fill(x);  // [ x, x, x, .... , x ], length = n
 /* 2. arr.map() 을 이용해 각 요소에 index+1 곱해주기 */
  Array(n).fill(x).map((v, i) => (i +1) * v)
  // [ x, x, x, .... , x ], length = n
  // index : 0, 1, 2, 3, 4...n
  // index +1 : 1, 2, 3, 4...n+1
  ```



### 공부 내용

- https://interacting.tistory.com/151 

* https://hianna.tistory.com/399