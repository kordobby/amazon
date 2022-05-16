# Prototype-chain

## prototype

### 프로토 타입이란?
* 자바스크립트 코드의 대부분은 객체 구조를 띄고 있고, 이 객체들은 Object 라고 하는 대빵 생성자 함수의 instance 객체들임
* 함수, 배열 등 우리가 만드는 객체 하나 하나들이 다 Object 생성자 함수의 instance 객체

* 모든 함수는 생성되는 순간 prototype 이라고 불리우는 객체를 속성으로 가짐</br>
 => 단, 살표 함수는 이 prototype 객체가 생기지 않음
* 생성자 함수 역시 Object.prototype 이라는 원형 객체를 가지고 있으며, 이 prototype 은 해당 객체가 가지는 모든 메소드 함수들을 담고 있음
* 우리가 아무 메소드도 정의하지 않는다면, 항상 디폴트로 가지는 것은 2 가지
```javascript
#1. constructor
#2. __proto__
```
* 생성자 함수의 경우, constructor 는 자기 자신이 되고, 인스턴스 객체의 경우 constructor 는 자신의 생성자 함수를 바라봄
* 인스턴스 객체들은 `__proto__` 라는 속성을 통해 자신의 생성자 함수의 prototype 객체로 연결 </br>

![img](/Images/data-algorithm/protochain.png)

* 위 예시를 봤을 때, 
1) `object`라는 엄마 함수가 존재하고,
2) 내가 만든 임의의 greetings 라는 Object는
3) `__proto__` 를 통해 엄마 함수의 prototype에 연결됨

### 🙋🏻‍♀️ 프로토타입 체인이란?
* 이름에서 짐작할 수 있듯이 프로토타입들이 줄줄이 엮여있다는 뜻</br>

![img](/Images/data-algorithm/greeting.png)

* 위 예시를 봤을 때, greetings 라는 객체에 hasOwnProperty 라는 메소드를 할당한 적이 없지만, 그 메소드를 사용할 수 있음. How?
1) 내가 객체의 어떤 속성에 접근하고자 할 때, 자바스크립트는 그 속성이 객체 자체 내에 있는지 (즉, own property로 있는지) 먼저 탐색
2) 없다면, `__proto__` 를 타고 올라가서 생성자 함수의 prototype 내에 그 속성이 있는지 탐색
* 위의 예시의 경우, greetings 는 hasOwnProperty를 정의한 적 없지만, Object.prototype 은 Object.prototype.hasOwnProperty 라는 속성을 갖고 있으므로 우리는 답을 얻을 수 있음
* 자바스크립트는 우리가 원하는 속성이 있는지 __proto__ 를 타고 올라가면서 상위 객체들의 prototype 을 모두 탐색하며, 만약 최종적으로 null 을 만나서 탐색이 종료될 때까지 그 속성을 찾지 못한다면, undefined 를 반환

### 🙋🏻‍♀️ 추가 예시
```javascript
const iAmFunc = function() {
	this.color = "brown";
  	this.habitat = "mountain"; 
}

const iAmObj = new iAmFunc(); 
const iAmObj2 = new iAmFunc(); 
console.log(iAmObj); // {color: "brown", habitat: "mountain"}
console.log(iAmObj2); // {color: "brown", habitat: "mountain"}
```
* iAmFunc 라는 생성자 함수를 통해 만들어진 인스턴스 객체 iAmObj, iAmObj2 는 생성자함수의 속성인 color, habitat 를 가지고 태어남. 즉 속성을 상속받은 것.

* 만약 우리가 생성자 함수에 어떤 메소드를 추가한다면, 같은 생성자 함수를 통해 만들어진 모든 instance 들은 (생성자 함수의 prototype 에 연결되어있으므로) 생성자 함수의 메소드를 다같이 공유하됨
* 단, 반드시 생성자함수의 prototype 에 추가해야만 인스턴스 객체들 역시 그 추가된 속성을 바로 사용할 수 있음

```javascript
// 프로토타입 체인을 통한 탐색 과정
iAmObj.__proto__ === iAmFunc.prototype
iAmObj.__proto__.__proto__ === Object.prototype
iAmObj.__proto__.__proto__.__proto__ === null 
// null 은 정의상 __proto__가 없으므로 여기가 프로토타입의 끝이다. 

// 아래와 같이 생성자 함수와 인스턴스 객체 각각에 name 이라는 속성을 추가해보자.
iAmFunc.prototype.name = "bear"; 
iAmObj.name = "rabbit"

console.log(iAmObj.name)  // "rabbit" 
// name 이라는 자체 속성이 있는가? 그렇다. 답은 "rabbit".

console.log(iAmObj2.name) // "bear". 
// name 이라는 자체 속성이 있는가? 아니오. 
// 그렇다면 상위 prototype 객체에 name 이라는 속성이 있는가? 그렇다. 답은 "bear".

console.log(iAmObj2.hasBaby) // undefined. 
// "hasBaby" 라는 자체 속성이 있는가? 아니오. 
// 그렇다면 상위 prototype 객체에 있는가? 아니오. 
// 쭉쭉 타고 올라가서 모든 prototype 체인을 검사하고도 못 찾았으므로 undefined.
```
* iAmObj 의 상위 프로토타입 객체도 name 이라는 속성을 가지고 있었지만, iAmObj 객체 내에 자체적으로 name 이라는 속성을 갖고 있었으므로 prototype 체인 검사를 할 필요가 없음
* 이를 prototype shadowing 이라고 한다. 이 프로토타입 쉐도잉이 함수인 경우에는 method overriding 이라고 불리움
* 자바스크립트에서는 어떤 함수든, 객체의 속성값으로 부여될 수 있으며 다른 속성값들과 동일하게 다뤄짐

```javascript
var iAmTheBoss = {
  num: 7,
  tool: function() {
  	return this.num + 3
  }
}; 

console.log(iAmTheBoss.tool()) // 10; 

// 위의 객체를 복사한 새로운 객체가 생겼다.
var hardWorker = Object.create(iAmTheBoss); 

console.log(hardWorker); // {}
console.log(hardWorker.__proto__) // { num: 7, tool: function() ... }
console.log(hardWorker.num) // 7; 
console.log(hardWorker.tool()) // 10; 

// 빈 객체였던 hardWorker 에 num 이라는 자체 속성을 부여했다. 
hardWorker.num = 0; 
console.log(hardWorker.tool()); // 3; 
```

### 🙋🏻‍♀️ 함수, 배열도 다 객체일까?
* 모두 Object.prototype 의 인스턴스 객체들이며, Array.prototype, Function.prototype 에 정의된 메소드들이 있기 때문에 우리가 만드는 배열, 함수에서 그 내장 메소드들을 상속받아 사용해 올 수 있었던 것

```javascript
var obj = { a: ‘apple’ }
// obj —> Object.prototype —> null 

var arr = [‘banana’, ‘cinnamon’ ]
// arr —> Array.prototype —> Object.prototype —> null

function func() { return ‘yo’ }
// func —> Function.prototype —> Object.prototype —> null
```


*참고 : https://velog.io/@minjae-mj/Prototype-Chain
