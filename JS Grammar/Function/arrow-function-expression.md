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


###  화살표 함수의 기본문법
```javascript
// 일반 함수
var foo = function () { console.log("foo") }; // foo

// 화살표 함수
var bar = () => console.log("bar"); // bar
```

```javascript
// 매개변수가 없는 경우
var foo = () => console.log('bar');
foo(); // bar

// 매개변수가 하나인 경우
var foo = x => x;
foo('bar'); // bar

// 매개변수가 여려개인 경우
var foo = (a, b) => a + b; // 간단하게 한줄로 표현할 땐 "{}" 없이 값이 반환됩니다.
foo(1, 2); // 3

var foo = (a, b) => { return a + b }; 
foo(1, 2); // 3

var foo = (a, b) => { a + b }; // "{}"를 사용했는데 return이 없을 때 
foo(1, 2); // undefined

var foo = (a, b) => { // 여러줄 썼을 때
	var c = 3;
	return a + b + c;
}
foo(1, 2, 3) // 6
/*
"{}"를 사용하면 값을 반환할 때 return을 사용해야합니다.
"{}"를 사용하지 않으면 undefied를 반환합니다.
"{}"을 사용할 때는 여러줄을 썼을 때 사용합니다.
*/

// 객체를 반환할 때
var foo = () => ( { a: 1, b: 2, c: 3 } );
foo(); // { a: 1, b: 2, c: 3 };
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

### 일반 함수의 this
* 일반 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정
* 화살표 함수의 this 언제나 상위 스코프의 this를 가리킴
* 화살표 함수는 call, apply, bind 메소드를 사용하여 this를 변경할 수 없음

### 화살표 함수를 사용해서는 안되는 경우
* 화살표 함수로 메소드를 정의하는 것은 피해야함
```javascript
// Bad
const person = {
  name: 'Lee',
  sayHi: () => console.log(`Hi ${this.name}`)
};

person.sayHi(); // Hi undefined
```
* 메소드로 정의한 화살표 함수 내부의 this는 메소드를 소유한 객체, 즉 메소드를 호출한 객체를 가리키지 않고 상위 컨택스트인 전역 객체 window를 가리킴
* 굳이 짧게 간다면 메소드를 위한 단축 표기법인 ES6의 축약 메소드 표현을 사용

```javascript
// Good
const person = {
  name: 'Lee',
  sayHi() { // === sayHi: function() {
    console.log(`Hi ${this.name}`);
  }
};

person.sayHi(); // Hi Lee
```
### prototype
* 화살표 함수로 정의된 메소드를 prototype에 할당하는 경우도 동일한 문제가 발생
```javascript
// Bad
const person = {
  name: 'Lee',
};

Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);

person.sayHi(); // Hi undefined
```
* prototype에 메소드를 할당하는 경우, 일반 함수를 할당
```javascript
// Good
const person = {
  name: 'Lee',
};

Object.prototype.sayHi = function() {
  console.log(`Hi ${this.name}`);
};

person.sayHi(); // Hi Lee
```

### 생성자 함수
* 화살표 함수는 생성자 함수로 사용할 수 없음
* 생성자 함수는 prototype 프로퍼티를 가지며 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor를 사용
* 하지만 화살표 함수는 prototype 프로퍼티를 가지고 있지 않음
```javascript
const Foo = () => {};
// 화살표 함수는 prototype 프로퍼티가 없다

console.log(Foo.hasOwnProperty('prototype')); // false

const foo = new Foo(); // TypeError: Foo is not a constructor
````
### addEventListener 함수의 콜백 함수
* addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 상위 컨택스트인 전역 객체 window를 가리킴
```javascript
// Bad
var button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log(this === window); // => true
  this.innerHTML = 'Clicked button';
});
````
* 따라서 addEventListener 함수의 콜백 함수 내에서 this를 사용하는 경우, function 키워드로 정의한 일반 함수를 사용해야함
* 일반 함수로 정의된 addEventListener 함수의 콜백 함수 내부의 this는 이벤트 리스너에 바인딩된 요소(currentTarget)를 가리킴

```javascript
// Good
var button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this === button); // => true
  this.innerHTML = 'Clicked button';
});
```
