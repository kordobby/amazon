# Programmes algorithm #9

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 핸드폰 번호 가리기

https://programmers.co.kr/learn/courses/30/lessons/12948

### 문제 설명

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 \*으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

### 제한 조건

- phone_number는 길이 4 이상, 20이하인 문자열입니다.

### 입출력 예

- phone_number = "01033334444", return = "**\*\*\***4444"

### 풀이 과정

- 풀이 계획

  - 접근

    1. 전화번호의 앞 부분과 뒷 부분을 별개로 만들어줄 함수 생각

       - slice() 함수를 이용하자

       ```javascript
       /* arr.slice([begin[, end]]) */
       /* 음수 인덱스는 배열의 끝에서부터의 길이 */
       phone_number.slice(-4);
       ```

    2. " _ " 로 번호를 가릴 부분을 바꿔주는 것 보다 그 수만큼 " _ " 을 생성하는 것이 식이 간단해질 것이라고 생각하고 " \* "을 만들어줄 식을 작성

       ```javascript
       "*".repeat(phone_number.length - 4);
       ```

    3. 계획한 것들 조합하기
       ```javascript
       "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
       ```

- 문제 답안

```javascript
function solution(phone_number) {
       let answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    return answer;
```

### 공부 내용

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
