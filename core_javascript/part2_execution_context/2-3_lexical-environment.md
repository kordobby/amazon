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
function a(x) {
  // 수집 대상 1(매개변수)
  console.log(x); // (1) -------> 1
  var x; // 수집 대상2(변수 선언)
  console.log(x); // (2) -------> 1
  var x = 2; // 수집 대상3(변수 선언)
  console.log(x); // (3) -------> 2
}
a(1);
```

```javascript
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
