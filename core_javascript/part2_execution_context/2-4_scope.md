# Chapter 02 - 실행 컨텍스트

### [03] Lexical Environment

### [03-2] 스코프, 스코프 체인, outerEnvironmentReference

- scope?
  - 식별자에 대한 유효범위
  - 어떤 경계 A의 외부에서 선언한 변수는 A의 외부뿐 아니라 A의 내부에서도 접근이 가능
  - 반면, A의 내부에서 선언한 변수는 오직 A의 내부에서만 접근 가능
  - 이러한 '식별자의 유효범위'를 안에서 밖으로 차례로 검색해나가는 것을 scope-chain이라 함
  - 그리고 이것을 가능케 하는것이 outerEnvironmentReference

#### [1] 스코프 체인

- outerEnvironmentReference 는 현재 호출된 함수가 선언될 당시의 LexicalEnvironment를 참조
- 여러 scope에서 동일한 식별자를 선언한 경우, 무조건 스코프 체인 상에서 가장 먼저 발견된 식별자에서만 접근이 가능함

```javascript
var a = 1; // [1] ------> 전역 scope에 있는 변수 a에 1을 할당
var outer = function () {
  // [1] ------> 전역 scope에 있는 outer에 함수를 할당
  // [3] ------> outer 실행 context의 environmentRecord에 inner 식별자 저장
  var inner = function () {
    // [6] ------> outer scope에 있는 변수 inner에 함수를 할당
    console.log(a); // [7] -------> 식별자 a에 접근, 현재 활성화 상태인 inner context의 environmentRecord에서 a를 검색, 할당된 값이 없으므로 undefined 출력
    var a = 3; // inner scope에 있는 변수 a에 3을 할당, 함수 실행 종료
  };
  inner(); // [5] ------> inner() 함수 호출, outer 실행 context 잠시 중단, inner 실행 활성화
  console.log(a); // [8] ------> 식별자 a에 접근, a = 1;, 함수 실행 종료
};
outer(); // [2] ------> outer 함수 호출, 전역 context의 코드는 잠시중단, outer 실행 컨텍스트 활성화
console.log(a); // [9] ------> 식별자 a에 접근, 현재 활성화 상태인 전역 context의 environmentRecord에서 a를 검색, a 출력하고 종료
```

- 실행 컨텍스트 생성 -> variableEnv에 정보 담기 -> 이것을 복사해서 LexicalEnv 생성, 이를 활용
- 실행 컨텍스트

  - v.e
    - environmentRecord
    - outerEnvironmentReference
  - l.e
    - environmentRecord
    - outerEnvironmentReference

- 실행 컨텍스트 : 전역 context -> outer() -> inner()
  - 전역 context
    - e : a, outer()
  - outer()
    - e : inner()
    - o : global L.E
  - inner()
    - e : a
    - o : outer L.E

#### 전역 변수와 지역변수

- 전역 변수 : 전역 scope에서 선언한 변수
- 지역 변수 : 함수 내부에서 선언한 변수
