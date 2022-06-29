# Chapter 02 - 실행 컨텍스트

### [03] Lexical Environment

- 실행 컨텍스트를 생성할 때 VariableEnvironment에 정보를 먼저 담은 다음, 이를 그대로 복사해서 LexicalEnvironment를 만들고, 이후에는 LexicalEnvironment를 주로 활용
- VariableEnvironment와 LexicalEnvironment의 내부는 environmentRecord와 outerEnvironmentReference로 구성돼있음

### [03-1] environmentRecord & 호이스팅

- environmentRecord
  - 현재 컨텍스트와 관련된 코드의 식별자 정보들이 저장됨
  - 매개변수의 이름, 함수 선언, 변수명 등이 담김

#### [1] 호이스팅 규칙

- 매개변수와 변수에 대한 호이스팅

```javascript
* 매개변수와 변수에 대한 호이스팅(1)
 - 원본코드
function a(x) {
  // 수집 대상 1(매개변수)
  console.log(x); // (1)
  var x; // 수집 대상2(변수 선언)
  console.log(x); // (2)
  var x = 2; // 수집 대상3(변수 선언)
  console.log(x); // (3)
}
a(1);
```

```javascript
* 매개변수와 변수에 대한 호이스팅(2)
 - 매개변수를 변수 선언/할당과 같다고 간주해서 변환한 상태
function a() {
  var x = 1;
  console.log(x); // (1)
  var x;
  console.log(x); // (2)
  var x = 2;
  console.log(x); // (3)
}
a();
```

```javascript
* 매개변수와 변수에 대한 호이스팅(3)
 - 호이스팅을 마친 상태
function a() {
  var x; // 변수 x를 선언, 메모리에서 저장할 공간 확보
  var x; // 이미 있으니 skip
  var x; // 이미 있으니 skip

  x = 1; // x에 1을 할당
  console.log(x); // x에 할당된 1을 출력
  console.log(x); // x에 할당된 1을 출력
  x = 2;  // x에 2를 재할당
  console.log(x); // x에 할당된 2을 출력
}
a(1);
```

- 함수 선언의 호이스팅

```javascript
* 함수 선언 호이스팅 - 원본 코드

function a() {
  console.log(b); // (1)
  var b = "bbb"; // 수집 대상 1 (변수 선언)
  console.log(b); // (2)
  function b() {} // 수집 대상 2 (함수 선언)
  console.log(b); // (3)
}
a();
```

```javascript
* 함수 선언 호이스팅 - 호이스팅 마친 상태

function a() {
  var b; // 수집 대상 1. 변수는 선언부만 끌어올림
  function b() {} // 수집 대상 2. 함수 선언은 전체를 끌어올림

  console.log(b); // (1)
  b = "bbb"; // 변수의 할당부는 원래 자리에 남겨둠
  console.log(b); // (2)
  console.log(b); // (3)
}
a();
```

```javascript
* 함수 선언 호이스팅 - 함수 선언문을 함수 표현식으로 바꾼 코드

function a() {
  var b; // 변수 b를 선언, 메모리에 저장할 공간 확보
  var b = function b() {}; // 바뀐 부분
  // 다시 변수 b를 선언하고 함수 b를 선언된 변수 b에 할당
  // => 함수는 별도의 메모리에 담기고 그 함수가 저장된 주솟값을 b와 연결된 공간에 저장
  console.log(b); // (1) ----> 변수 b에 할당된 함수 b를 출력
  b = "bbb"; // 변수 b에, "bbb" 주솟값으로 덮어씀
  console.log(b); // (2) ----> "bbb"
  console.log(b); // (3) ----> "bbb"
}
a();
```
