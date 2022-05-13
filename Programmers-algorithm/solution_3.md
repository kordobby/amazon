# Programmes algorithm #2

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 가운데 글자 가져오기

### 문제 설명

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

### 제한 조건

- s는 길이가 1 이상, 100이하인 스트링입니다.

### 예시

- 입출력 예

  ```
  s = "abcde" , return "c"
  s = "qwer" , return "we"
  ```

### 풀이 과정

- 풀이 계획

  - 문제 확인 : 문자의 길이가 홀수냐 짝수냐에 따라 출력이 달라짐
  - 문자의 길이를 구하고 이를 활용한 조건을 만들자
    ```javascript
    // 기준으로 사용할 조건 생성
    s.length % 2 === 1; // 문자의 길이가 홀수인 경우
    ```
  - 단어의 중간에 있는 문자를 빼오는 방법?
    ```javascript
    let s = "abced";
    s.length; // 5
    s[0]; // a
    s[4]; // e
    ```
  - 특정 위치에 있는 조건 작성

    ```
    * legnth 가 홀수일 경우
      length = 5 일 때, 가져올 문자는 s[2]
      length = 7 일 때, 가져올 문자는 s[3]
     ========================================
      length = n 일 때, 가져올 문자는 s[(n-1)/2]

     * 이것을 참고해서 코드를 작성하면,
     answer = s[(s.length - 1) / 2];
    ```

    ```
    * legnth 가 짝수일 경우
      length = 4 일 때, 가져올 문자는 s[1], s[2]
      length = 6 일 때, 가져올 문자는 s[2], s[3]
     ========================================
      length = m 일 때,
      가져올 문자는 s[ n/2 - 1] + s[n/2]

     * 이것을 참고해서 코드를 작성하면,
     answer = s[s.length / 2 - 1] + s[s.length / 2];
    ```

- 문제 답안

  ```javascript
  function solution(s) {
    var answer = "";

    if (s.length % 2 === 1) {
      answer = s[(s.length - 1) / 2];
    } else {
      answer = s[s.length / 2 - 1] + s[s.length / 2];
    }

    return answer;
  }
  ```

### 공부 내용
