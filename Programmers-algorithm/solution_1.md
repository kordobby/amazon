# Programmes algorithm #1

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 직사각형 별찍기

### 문제 설명

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

### 제한 조건

- n과 m은 각각 1000 이하인 자연수입니다.

### 예시

- 입력

```
5 3
```

- 출력

```
*****
*****
*****
```

### 풀이 과정

- 풀이 계획

  - 열 : 행 = a : b
  - " \* " 을 이용한 행 만들기

    ```javascript
    // i = [0, ... , a-1]
    for (let k = 0; k < a; ++k) {
      // string * 를 i 만큼 더해주기
      star += "*"; // ex) if a = 3, ***
    }
    ```

  - " \* " 을 이용한 열 만들기

    ```javascript
    // i = [0, ... , b-1]
    for (let i = 0; i < b; ++i) {
      // i 만큼 줄 바꿈 처리
      star += "\n";
    }
    ```

  - 열을 만든 후 줄바꿈 처리를 통해 행 만들어지게 이중 for문 만들기

    ```javascript
    // i = [0, ... , b-1]
    for (let i = 0; i < b; ++i) {
      // 2. i 만큼 열을 만드는 for문을 반복하고 줄 바꿈 처리
      for (let k = 0; k < a; ++k) {
        // 1. string * 를 k 만큼 더해주며 열 만들기
        star += "*";
      }
      star += "\n";
    }
    ```

- 문제 답안

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let star = "";

  // 열 반복문
    for(let i = 0; i < b; ++i){
      // 행 반복문
      for(let k = 0; k < a; ++k) {
      star += "*";
  }
  star += "\n";
}
```

### 공부 내용

- for 문
- += 할당
- 줄바꿈 처리 (\n)
