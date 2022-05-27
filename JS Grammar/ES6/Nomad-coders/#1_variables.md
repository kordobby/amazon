# Let and Const
<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## #1.0 Let and Const

### var
* let과 const 이전에 우리는 var 를 사용해서 변수를 선언했지...
```javascript
var name = "Yoon";
name = "Dobby";

// 다른 개발자의 파일에서 name을 쓰고 있을 수도 있음
// name은 SUPER 흔하니까!
// 그럼 value 가 변해서 혼란이 일어날 수 있겠지?
```

* variable이 변하는 것을 막기 위한 엔진이 필요해!
### const
```javascript
const name = "Yoon";
name = "Dobby"; // => [ERROR] "name" is read-only
```
* const는 잠겨있거나 우리가 원하는 것처럼 read-Only는 아님
   * const를 사용했더라도 obj 안의 값을 바꿀 수 있음
```javascript
const person = {
  name : "Dobby"
};

person.name = "Yoon";
```

### let
* 변수 선언 이후에도 값을 바꿀 수 있음
```javascript
let yoon = "yes";
yoon = "nononononononon";
```

* 제발 const 부터 사용하고 꼭 바꿔야할 때만 let으로 바꿔
* Never var 

</br>


## #1.1 Dead Zone 


### temporal dead zone
- let과 함께 소개되는 개념
```javascript
var myName = "yoon";
console.log(myName)l // yoon
```
```javascript
console.log(myName); // undefined
var myName = "yoon";
```
```javascript
console.log(myName); // error :: myName is not defined
// 이런 에러가 나는 이유는? JS 가 hoisting이란 것을 해주기 때문
```

* 호이스팅
   *  자바스크립트가 프로그램을 실행하기 전에 이것들을 어딘가로 이동시키는 것
```javascript
// 1. 이렇게 작성이 되어있다면, JS가 hoisting을 해서,
console.log(myName); // undefined
var myName = "yoon";
```
```javascript
// 2. Behind the scenes :: 아래처럼 코드가 조정되어 돌아가게됨
var myName ;
console.log(myName); // undefined
myName = "yoon";
// 그러니까 error 없이 defined가 출력되는 것
```
  * 만약 let를 사용했다면?
```javascript
console.log(myName); // error :: myName is not defined
let myName = "yoon";  // this part is DEAD => we call this 'temporal DEAD ZONE'
// let을 사용하면 JS는 hoist하지 않게되고(변수 선언을 top으로 보내지 않음), 
// myName은 정의되지 않았기 떄문에 에러가 발생
// 자바스크립트는 우리가 바보같은 짓을 하는 것을 허락하지 않아...
```

</br>


## #1.2 Block Scope 

### block scope
* let과 const의 장점은 block scope가 있기 때문

### scope?
* scope는 bubble 이라고 생각하면 되는데, 이 버블이 variable 들이 접근 가능한지 아닌지를 감지해줌
```javascript
if(true) {
  const hello = "hi";
}
console.log(hello);  // error => hello is not defined
```
```javascript
if(true) {
  let hello = "hi";
}
console.log(hello);  // error => hello is not defined
```
* 위 예시를 봤을 때 오류가 발생한 이유는 let이 {} 사이에서 사용되었기 때문에 괄호 밖에서는 존재하지 않음
* var 를 사용한다면?
   * var를 쓰면 block-scope이 없음. 그러니까 아래 예시가 잘 굴러감
   * if 나 while, for 구문 안에서 var로 변수를 만들 수 있음
    => 왜냐면 var는 block scope을 가지지 않고 function scope을 가지기 때문
```javascript
if(true) {
  var hello = "hi";
}
console.log(hello);  // hi
// look at that BullShit
```
* function scope? var가 function 안에서 접근할 수 있다는 뜻
</br>=> 다른 function에서 변수를 접근하게 하는 것은 막을 수 있지만 if, for, while을 쓰면 전역에서 사용이 가능하게됨 

```javascript
function a () {
  var hello = "hi";
}

console.log(hello); // error => hello is not defined
```

### let과 const의 block scope

* 블록 안에서 무언가를 선언하면 밖으로 나가지 않게 보호됨

```javascript
if (true) {
  let hello = "hi";
}
let hello = "bye";
console.log(hello); // bye
```
* 만약 let으로 선언한 변수를 밖으로 꺼내면, 안에서도 그 값을 사용할 수 있음
```javascript
let hello = "hi";
if (true) {
  console.log(hello);  // hi
}
console.log(hello);  // hi
```
* 블록은 괄호 두개 {}, 이 버블들은 내부에서 외부로만 접근 가능
* 외부에서는 안ㄴ에 있는 어떤 것들에도 접근할 수 없음
* 항해 들어오면 못나가는 느낌인걸까...
```javascript
let hello = "hi";
if (true) {
  console.log(hello);  // hi
  const a = "a";
}
console.log(a);  // error :: a is not defined
```
```javascript
let hello;
if (true) {
  hello = "lalala";
}
console.log(hello); // lalala
// 이건 let 이 선언한 hello가 밖에 있기 떄문에
// 버블 내부에서 외부의 hello에 접근해 "lalala"라는 값을 부여한 것
```
```javascript
let hello;
if (true) {
  /////////////////// 2. 여기 버블로는 접근 가능 (안에서 밖이니꽈)   3. 그런데 여기서는
  if (true) {
       /////////////////// 1. 이 안의 버블에서    4. 여기로 접근못해
  }
}
console.log(hello); // lalala
// 이건 let 이 선언한 hello가 밖에 있기 떄문에
// 버블 내부에서 외부의 hello에 접근해 "lalala"라는 값을 부여한 것
```

## #1.3 The future of 'var'

### var은 미래가 없어.. 쓰지마.. 지금 var 안지우고 있는건 이미 많이 써놔서 못지울 뿐잉게..