# If 와 '?'를 사용한 조건 처리

## 조건에 따라 다른 행동을 취해야할 때, If!

### If 문

- if 문은 괄호 안에 들어가는 조건을 평가하는데, 그 결과가 true이면 코드 블록이 실행됨
- example

  ```javascript
    let a = 5

    if ( a === 5) alert('정답입니다!);
  ```

  ```javascript
  if (a == 5) {
    alert("정답입니다!");
    alert("아주 똑똑해요!");
  }
  ```

### Boolean 형으로의 변환

- if(...) 문은 괄호 안의 표현식을 평가하고 그 결과를 불린 값으로 변환
- 숫자 0, 빈 문자열 "", null, undefined, NaN 은 불린형으로 변환 시 모두 false 로 되며 이런 값들은 'flasy(거짓 같은)' 값이라고 부름
- 이 외의 값은 불린형으로 변환시 true가 되므로 'truthy(참 같은)'값이라 부름

### else 절

- if 문엔 else 절을 붙일 수 있으며 else 뒤의 코드는 거짓일 때 실행

### else if 로 복수 조건 처리하기

- 유사하지만 약간씩 차이가 있는 조건 여러개를 처리해야할 때 사용

```javascript
if (year < 2015>) {
  alert ('hello');
} else if (year > 2015) {
  alert ('bye');
} else {
  alert ('well');
}
```

## 조건부 연산자 " ? "

### ? (물음표/조건부 연산자)

- 피연산자가 세 개로 '삼항(ternary) 연산자'로도 불림
- JS 에서 피연산자가 3개나 받는 연산자는 조건부 연산자가 유일
- 문법

  ```javascript
  let result = condition ? value 1 : value 2;
  ```

  - 평가 대상인 condition이 truthy라면 value 1, 그렇지 않으면 value 2가 반환됨

- 예시
  ```javascript
  let accessAllowed = age > 18 ? true : false;
  // 연산자 우선순위 규칙에 따라, 비교 연산 'age > 18'이 먼저 실행
  // 조건문을 괄호로 감쌀 필요가 없음
  let accessAllowed = age > 18 ? true : false;
  ```

### 다중 ' ? '

- 물음표 연산자 ? 를 여러개 연결하면 복수의 조건을 처리 가능
- example

  ```javascript
  let age = prompt("나이를 입력해주세요", 18);

  let message =
    age < 3
      ? "아기야 안녕?"
      : age < 18
      ? "안녕!"
      : age < 100
      ? "환영합니다!"
      : "나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!";

  alert(message);
  ```

### 부적절한 ' ? '

- 물음표 ? 를 if 대용으로 쓰는 경우가 종종 있음

```javascript
let company = prompt("자바스크립트는 어떤 회사가 만들었을까요?", "");

company == "Netscape" ? alert("정답입니다!") : alert("오답입니다!");
```

- 연산자 ? 를 if 문 대용으로 썼을 때 코드가 짧아질 수는 있지만 가독성이 떨어지므로 사용하지 않는 것이 좋음
- 물음표 연산자 ? 는 조건에 따라 변환 값을 달리하려는 목적으로 만들어진 것 !
