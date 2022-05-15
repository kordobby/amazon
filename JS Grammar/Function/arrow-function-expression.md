# Arrow Function Expression

## 화살표 함수 표현

* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* https://poiemaweb.com/es6-arrow-function

### 화살표 함수표현?
- 전통적인 함수표현의 간편한 대안
- 몇 가지 제한점이 있고 모든 상황에 사용할 수는 없음
   - this나 super에 대한 바인딩이 없고, methods로 사용될 수 없음
   - new.target 키워드가 없음
   - 일반적으로 스코프를 지정할 때 사용하는 call, apply, bind methods를 이용할 수 없음
   - 생상자로 사용할 수 없음
   - yield를 화살표 함수 내부에서 사용할 수 없음

### 화살표 함수의 선언
- function 키워드 대신 화살표 ( => ) 를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있음

   ```javascript
    // 매개변수 지정 방법
        () => { ... } // 매개변수가 없을 경우
         a => { ... } // 매개변수가 한 개인 경우, 소괄호 생략 가능
    (a, b) => { ... } // 매개변수가 여러 개인 경우, 소괄호 생략 불가

    // 함수 몸체 지정 방법
        a => { return a * a } // single line block
        a => a * a            // 함수 몸체가 한 줄의 구문이라면 중괄호 생략 가능하며 암묵적으로 return됨. 위 표현과 동일


        () => { return { a : 1}; }
        () => ({ a : 1}) // 위 표현과 동일, return 생략 시 소괄호로 묶기

        () => {          // multi line block
          const a = 10;
          return a * a;
        };
  ```

### 화살표 함수의 호출
- 화살표 함수는 익명 함수로만 사용 가능
- 화살표 함수를 호출하기 위해서는 함수 표현식을 사용

   ```javascript
   const pow = x => x * x;
   console.log(pow(10)); // 100
  ```

- 콜백 함수로도 사용 가능하며 이 경우 일반적인 함수 표현식보다 표현이 간결
   ```javascript
   const arr = [1, 2, 3];
   const pow = arr.map(x => x * x);

   console.log(pow); // [1, 4, 9]
   ```