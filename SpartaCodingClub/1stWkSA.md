# # React 입문주차 S.A.

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>


## 🐤 JavaScript의 자료형과 JavaScript만의 특성은 무엇일까 ?
### 느슨한 타입(loosely typed)의 동적(dynamic) 언어

1. 동적 타입
   * javascript의 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당, 재할당이 가능
   ```javascript
   let foo = 42 // number
   foo = 'bar' // string
   foo = true // boolean
   ```

2. 원시 값

* Boolean
   * 논리 요소를 나타내며 true, false 두 가지 값을 가짐

* Null 
   * null 하나의 값만 가짐

* Undefined
   * 값을 할당하지 않은 변수는 undefined 값을 가짐

* Number 
   * 부동소수점 숫자 외 +infinity, -infinity, NaN 세 개의 상징적인 값을 가짐

* BigInt
   * 임의 정밀도로 정수를 나타낼 수 있는 원시 값으로 Number의 안전한계를 넘어서는 큰 정수도 안전하게 저장하고 연산. 정수 끝에 n을 추가하거나 생성자를 호출해 생성

* String 
   * 문자열로 각각의 요소가 string의 한 자리를 차지. 첫 번째 요소부터 index 0. javascript의 문자열은 불변하지만 원본 문자열을 사용해 새로운 문자열을 생성하는 것은 가능

* Symbol
   * 고유하고 변경 불가능한 원시 값으로 객체의 속성키로 사용 가능


3. 객체
 * 식별자로 참조할 수 있는 메모리 상의 값. 함수, 배열 등

4. 동적 타입의 장단점
* 어떤 타입의 데이터 값이라도 자유롭게 할당할 수 있어 편리하지만 개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동으로 변환되는 경우가 발생


### JavaScript 형변환
1. 암시적변환
  * 예시 : + 연산자는 문자형을 우선시, 다른 연산자는 숫자령을 우선시함
  ```javascript
  number + number // number
  number + string // string
  string + string // string
  string + boolean // string
  number + boolean // number

  string * number // number
  string * string // number
  number * number // number
  string * boolean //number
  number * boolean //number
  ```

2. 명시적변환
  * 예시 : + 연산자는 문자형을 우선시, 다른 연산자는 숫자령을 우선시함
    * Number() : 정수, 실수형으로 변환
    * parseInt() : 정수형으로 변환
    * String() : 문자열로 변환
    * toString() : 문자열로 변환
    * Boolean() : 불리언 타입으로 변환

3. 연산자 공부
https://github.com/kordobby/amazon/tree/main/JS%20Grammar/Operator

4. undefined와 null의 미세한 차이
  * undefined는 변수를 선언하고 값을 할당하지 않은 상태, null은 변수를 선언하고 빈값을 할당한 상태

5. JavaScript 객체와 불변성이란 ?
* 기본형 데이터와 참조형 데이터
   * 기본형에는 바로 값을 그대로 할당, 참조형에는 값이 저장된 주소값을 할당

6. 불변 객체를 만드는 방법
* const
* Object.freeze()
* const, Object.freeze()
// 그런데 사실 100% 보호되진 않음

7. 얕은 복사와 깊은 복사
* 얕은 복사(shallow copy)
   * 데이터가 그대로 생성되는 것이 아닌 해당 데이터의 참조 값을 전달하여 데이터를 공유. 참조형.
* 깊은 복사(deep copy)
   * 독립적인 메모리에 값 자체를 할당하여 생성. 기본형

### 호이스팅과 TDZ?
   https://github.com/kordobby/amazon/blob/main/JS%20Grammar/ES6/%231_variables.md


### 실습 과제
```javascript
콘솔에 찍힐 b 값을 예상해보고, 어디에서 선언된 “b”가 몇번째 라인에서 호출한 console.log에 찍혔는지, 왜 그런지 설명.주석을 풀어보고 오류가 난다면 왜 오류가 나는 지 설명하고 오류를 수정해보세요.
```
```javascript
let b = 1;

function hi () {
const a = 1;
let b = 100;

b++;
console.log(a,b);
}

//console.log(a);

console.log(b); // let b = 1 (line : 1)
hi(); // 1, 101
console.log(b);  // let b = 1 (line : 1)
```
1. a 에 관해
* a 는 const 선언문을 이용해서 function 내부에서 선언이 되었기 때문에, function scope 내에서만 그 변수의 값이 사용됨
* function scope 내에서는 밖에 있는 변수의 값을 가져올 수 있지만 외부에서 내부로의 진입은 불가함
* 굳이 function scope 밖에서 a 의 값을 가져오고 function 도 돌리고 싶다면 아래와 같이 바꾸면 되지 않을까

```javascript
let b = 1;
const a = 1;
function hi() {
  let b = 100;
  b++;
  console.log(a, b);
}

console.log(a);
console.log(b);
hi();
console.log(b);
```


