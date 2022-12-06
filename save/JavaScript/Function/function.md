# function()

## 함수


### 함수를 정의하는 세 가지 방법
```javascript
// 함수 생성자 : 마지막 매개변수는 함수의 로직(몸체 코드) 부분이며, 그 외의 매개변수는 인수
var addConstructor = new Function('x','y', 'return x + y');

// 함수 선언문
function addStatement(x, y) {
  return x + y;
}

// 함수 표현식
var addExpression = function (x, y) {
  return x + y;
}

console.log(addConstructor(2,2), addStatement(2,2), addExpression(2,2));
// 4, 4, 4
```

### 함수를 호출하는 네 가지 패턴
1. 함수로서
2. 메소드로서
3. 생성자로서
4. apply() 혹은 call() 사용
```javascript
//함수 패턴
var myFunction = function() {return 'yoon'};
console.log(myFunction()); // 'yoon'

//메소드 패턴
var myObject = {myFunction: function(){return 'dobby'}}
console.lg(myObject.myFunction()); // 'dobby'

// 생성자 패턴
var Cody  = function() {
  this.living = true;
  this.age = 33;
  this.gender = 'male';
  this.getGender = function() { return this.gender;};
}

var cody = new.Cody() // Cody 생성자를 통해 호출
console.log(cody)l // cody 객체의 속성이 기록됨

//apply()와 call 패턴
var greet = {
  runGreet: function() {
    console.log(this.name,arguments[0],arguments[1]);
  }
}

var cody = {name : 'cody'}
var list = {name : 'lisa'}

// runGreet 함수가 마치 cody 객체의 메서드인 것처럼 호출
greet.runGreet.call(cody,'foo','bar'); // cody foo bar

// runGreet 함수가 마치 lisa 객체의 메서드인 것처럼 호출
greet.runGreet.apply(lisa, ['foo','bar']); // 'lisa foo bar'

// call()과 apply()의 차이점은 호출할 함수에 매개변수를 전달하는 방식
```

### 함수 객체의 기본 프로퍼티
* 함수 역시 일반적인 객체의 기능에 추가적으로, 호출됐을 때 정의된 코드를 실행하는기능을 가지고 있음
* 일반 객체와는 다르게 추가로 함수 객체만의 표준 프로퍼티가 정의되어 있음
   * 표준 프로퍼티
     1. name : 함수 이름 (익명 함수인 경우 빈 문자열)
     2. caller : 자신을 호출한 함수
     3. arguments : 함수를 호출할 때 전달된 인자값
     4. length : 함수를 작성할 때 정의한 인자 개수
     5. prototype : 이 함수가 생성자로 사용될 때 이 함수를 통해 생성된 객체의 부모역할을 하는 프로토타입 객체
     6. `__proto__` : 자신의 부모 역할을 하는 프로토타입 객체를 가리키는 [[Prototype]] ( Function.prototype )



### 익명 함수
* 이름이 없는 함수
* 대부분 다른 함수에 매개변수로서 전달되는 경우가 많음
```javascript
function(){console.log('hi');}; // 익명함수지만 실행하진 않음
// 우리가 전달할 익명 함수를 실행할 함수를 만듦

var sayHi = function(f) {
  f(); // 익명함수를 실행함
}

// 익명함수를 매개변수로서 전달
sayHi(function(){console.log('hi');}); // 'hi' 가 기록됨