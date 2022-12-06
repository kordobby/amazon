# Programmes algorithm #5

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 문자열을 정수로 바꾸기

https://programmers.co.kr/learn/courses/30/lessons/12925

### 문제 설명

문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

### 제한 조건

- s의 길이는 1 이상 5이하입니다.
- s의 맨앞에는 부호(+, -)가 올 수 있습니다.
- s는 부호와 숫자로만 이루어져있습니다.
- s는 "0"으로 시작하지 않습니다.

### 입출력 예

- 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
  str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

### 풀이 과정

- 풀이 계획

  - 접근 : 어렵게 생각하지 않고 간단한 함수로 바꿔주는게 없을까?
  - parseInt() 함수 사용?

    ```javascript
    let num = "-8";
    parseInt(num); // -8

    typeof num; // 'string'
    typeof parseInt(num); // 'number'
    ```

- 문제 답안

```javascript
function solution(s) {
  var answer = parseInt(s);
  return answer;
}
```

### 공부 내용

- type 변환 함수?
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt
