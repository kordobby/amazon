# OOP

## 객체 지향 프로그래밍

### OOP?
#### Object Oriented Programming - 객체 지향 프로그래밍
: 컴퓨터 프로그래밍의 패러다임 중 하나로 프로그램을 객체(obj) 단위로 나누고, 이를 상호작용하도록 작성하는 방법. 여기서 객체는 어떤 역할을 수행하는 함수와 변수의 묶음의 개념으로 봄

## 📚 객체지향 프로그래밍의 요소
* 객체지향 프로그래밍은
   * 캡슐화(Encapsulation)
   * 상속(Inheritance)
   * 추상화(Abstraction)
   * 다형성(Polymorphism) 의 요소를 가지고 있고 각각의 의미는 다음과 같다.

### 캡슐화(Encapsulation)
* 외부에 따로 속성이나 기능을 하나로 묶어 객체로 정의하고 객체 안에서 정의된 속성은 해당 객체에서만 접근이 가능
* 이는 클래스(class)라는 개념으로 구현
* 클래스는 객체지향을 지원하는 언어가 제공

  #### * 정보의 은닉(Infomation Hiding)
  * 캡슐화의 개념에는 "은닉화"의 특징도 포함하고 있으며 이는 프로그램의 세부적인 구현을 외부로 드러나지 않도록 감추는 것
  * 외부로의 노출을 최소화 하여 모듈간의 결합도를 떨어뜨려(Loose Coupling)유지보수가 용이한 코드를 만들 수 있음

### 상속(InHeritance)
* 상속은 부모객체의 특징을 물려받는 것
* 부모가 가진 속성이나 메서드를 그 자식이 부모의 속성이나 메서드를 상속받아 가질 수 있음
* 상속을 사용하여 프로그램의 복잡도를 줄여주고 불필요한 코드를 제거할 수 있음
* 오버라이딩(Overriding): 상속받은 자식의 기능의 일부분을 변경해야 할 경우 해당하는 기능을 다시 정의하게 되는 작업

### 추상화(Abstraction)
* 추상화는 복잡한것들을 어떤 객체의 이름으로 추상화 시켜서 내부 메서드의 구현이 어떤지 몰라도 사용가자 사용하기 쉽게 만드는 것
   * 예를 들어 자동차의 엔진이 어떻게 돌아가고 연료가 어떻게 사용되는지 이해하지 않아도 우리는 "핸들"과 "브레이크", "엑셀 페달" 같이 추상화 되어있는 도구(객체)를 사용하기만 하면 되는 것

### 다형성(Polymorphism)
* 객체의 변수나 메서드가 상황에 따라 다른 의미로 해석될 수 있는 것을 말함
* 상속에서 언급했던 오버라이딩(Overriding)기법을 사용하여 자식 클래스의 메서드가 부모 클래스의 메서드와 다르게 동작하거나 변수가 다른 값으로 지정될 수 있음
   * 포유류의 범주(부모 클래스)에 있는 강아지(자식 클래스)나 고양이(자식 클래스)가 소리를 낼 때(같은 메서드) '멍멍', '야옹' 하는 것과 같이 다르게 소리를 내는 것과 같음

## 📒 Javascript에서 OOP
* Javascript는 흔히 프로토타입 기반 언어(prototype-based language)라 불림 </br>
=> 모든 객체들이 메서드와 속성을 상속받기위해 프로토타입 객체(protype object)를 가진다는 의미
* 프로토타입 체인(prototype chain)이라 부르며 다른 객체에 정의된 메서드와 속성을 한 객체에서 사용할 수 있는 원리

### 프로토타입(Prototype)
* JS에는 객체의 인스턴스와 프로토타입간에 연결이 구성되며 이 연결을 따라 프로토타입 체인을 타고 올라가며 속성과 메서드를 탐색
* 보통 객체(Ordinary Object)에는 [[prototype]]으로 표현되는 프로토타입 객체에 대한 링크는 내부 속성으로 정의되어 있음
* 많은 브라우저들이 __proto__ 속성을 통해 특정 객체의 프로토 타입 객체에 접근할 수 있도록 구현되어 있음

```javascript
var myArray = new Array(); // === [] <- 객체초기자 또는 리터럴이라고 한다
var myObj = new Object(); // === {}
 
console.log(typeof myArray); // object
console.log(myArray.__proto__.__proto__ === myObj.__proto__); // true
```
* 위 결과에서 배열또한 객체이며 배열의 prototype의 원형은 Object로 부터 파생된 것
* 한편 constructor 는 원본 생성자 함수 자신(Array())을 가리킴

![img](/Images/data-algorithm/proto.png)
* 함수(function)객체에는 prototype 속성이 있으며 이 또한 하나의 객체이며 프로토타입 체인을 통해 상속하고자 하는 속성과 메서드를 담아두는 역할로 사용되는 객체

```javascript
var Human = function(name, age){
  this.name = name;
  this.age = age;
}

// Human 함수의 prototype 에 sleep 이라는 함수를 정의
Human.prototype.sleep = function(){
  console.log('zzz...');
}

var sim = new Human('sim', 25);
var jimmy = new Human('jimmy', 28);

// sim 과 jimmy 의 생성자(constructor)는 Human 함수이다
console.log(sim.constructor.name); //  Human
console.log(jimmy.constructor.name); // Human

// Human 객체에 선언한 sleep 함수 호출
sim.sleep(); // zzz...

// Human 에 toString 메서드를 만들지 않았지만
// 프로토타입 체인을통해 Human의 원형 Object 의 prototype 에 정의된
// toString 메서드를 사용할 수 있다.
sim.toString(); // "[object Object]"
```
![img](/Images/data-algorithm/proto3.png)
![img](/Images/data-algorithm/proto1.png)
### ES6전 객체 지향 패턴
* Class 키워드가 없던 ES6 전 JS는 인스턴스(instance)를 만드는 작업은 다음과 같이 할 수 있음

#### Functional Instantiation
* 함수를 사용하여 클래스를 만들고 인스턴스를 생성하는 방법
```javascript
var Car = function(name, brand){
  var instance = {};
  instance.name = name;
  instance.brand = brand;
  instance.handle = 1;
  instance.wheel = 4;
  instance.state = 'parking';
  
  instance.acceleration = function(){
   this.state = 'accelerating';
  }
  
  instance.parking = function(){
    this.state = 'parking';
  }
  
  return instance;
}
```
* 또는 클로저 모듈 패턴을 사용하여 다음과 같이 사용
```javascript
function Car(name, brand){
  let carName = name;
  let carBrand = brand;
  let state = 'parking';
  return {
  	getName:function(){
    	return carName;
    },
    getBrand:function(){
    	return carBrand;
    },
    getState:function(){
  		return state;
    },
    acceleration:function(){
        state = 'accelerating';
    },
    parking:function(){
        state = 'parking';
    }
  }
}
```

#### Pseudoclassical
* JS의 프로토타입을 이용하여 만드는 방법
* 이 방법을 사용하여 객체지향의 상속을 구현 할 수 있음
* 야매로 class 개념을 흉내내는 방식?
```javascript
function Car(name, brand){
  this.name = name;
  this.brand = brand;
  this.handle = 1;
  this.wheel = 4;
  this.state = 'parking';
}

Car.prototype.acceleration = function(){
	this.state = 'accelerating';
}

Car.prototype.parking = function(){
	this.state = 'parking';
}

function Truck(name, brand){
    // apply 메서드를 사용하여 Car 클래스에 있는 모든 요소를 상속받는다.
    // 다만 apply 를 사용하여 모든 요소를 가져왔을 뿐 prototype은 변경되지 않은 상태
    Car.apply(this, arguments);
	this.name = name;
    this.brand = brand;
  	// 이전에 없던 새 요소 추가
    this.size = 'big';
    this.storage = [];
}

// Truck의 prototype을 Object.create() 메서드를 사용하여 
// Car의 prototype을 상속, 그러나 constructor는 아직 Car인 상태
Truck.prototype = Object.create(Car.prototype);

// Truck 의 생성자(constructor)가 Truck임을 명시해 준다.
Truck.prototype.constructor = Truck;

// Truck 의 메서드 추가
Truck.prototype.loadBoxes = function(box){
	this.storage.push(box);
}

// Car 의 acceleration 메서드를 오버라이딩(overriding)
Truck.prototype.acceleration = function(){
	this.state = 'accelerating...!!!';
}
```
* 위 코드 작성 후 실행시킨 결과
![img](/Images/data-algorithm/oop.png)

### ES6후 class 키워드
* ES6에서는 class키워드를 사용하여 위 코드보다 간단하게 작성할 수 있음
```javascript
class Car {
  constructor(name, brand){
    this.name = name;
    this.brand = brand;
    this.handle = 1;
    this.wheel = 4;
  	this.state = 'parking'
  }
  
  acceleration(){
    this.state = 'accelerating';
  }
  
  parking(){
    this.state = 'parking';
  }
}

class Truck extends Car {
  constructor(name, brand){
    // super 메서드를 통해 Car의
    super();
    this.name = name;
    this.brand = brand;
  }
  
  // Truck 의 메서드 추가
  loadBoxes(box){
	this.storage.push(box);
  }

  // Car 의 acceleration 메서드를 오버라이딩(overriding)
  acceleration(){
    // 만약 Car의 acceleration 를 실행시킨 후 다른 동작을 하려면 
    // super.acceleration(); 을 사용한다
    this.state = 'accelerating...!!!';
  }
  
}
```
참고 : https://velog.io/@jimmy0417/JS-OOP-%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D
