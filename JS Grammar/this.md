# This part #1
<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## this 키워드

### 1. this의 사용

- 함수를 만들 때는 함수를 실행하는 객체와 연결되는 this 라는 키워드도 같이 (자동으로) 만들어짐
- this는 함수의 스코프 안에서 사용할 수 있으며 함수를 속성 또는 메서드로 포함하고 있는 객체를 참조

```javascript
var cody = {
  living : true,
  age : 23,
  gender : 'male',
  getGender : function() {return cody.gender;}
}

console.log(cody.getGender()); // 'male' 이 기록됨
```
* 이 코드에서 getGender 내부에서 점 문법을 사용해 cody 객체의 gender 프로퍼티에 접근함
* 이것을 this라는 키워드를 사용해 코드를 다시 작성하면,
```javascript
var cody = {
  living : true,
  age : 23,
  gender : 'male',
  getGender : function() {return this.gender;}
  // getDiameter : function() 은 cody의 메서드
  // 즉 this의 객체는 cody 가 되므로
  // this.gender = cody.gender 가 됨 
}

console.log(cody.getGender()); // 'male' 이 기록됨
```
### 2. this의 값은 어떻게 정해지는가
```javascript
var foo = foo;
var myObject = { foo : 'I am myObject.foo' };

var sayFoo = function() {
  console.log(this('foo'));
};

//sayFoo 함수를 myObject의 sayFoo 프로퍼티로 추가함
myObject.sayFoo = sayFoo;

myObject.sayFoo(); // 'I am myObject.foo' 가 기록됨
// 1. myObject 객체 안의 sayFoo() 함수이므로, this는 myObject를 객체로 인식
// 2. 'this'는 myObject의 'foo'를 호출

sayFoo(); // 'foo'가 기록됨
// 1. sayFoo 함수의 this는 전역객체를 인식
// 2. 전역에서 선언된 'foo'를 호출
```

### 3. 중첩된 함수의 this는 머리 객체를 참조
- 객체 내부의 메서드 내부에서 this를 호출하면 해당 객체를 가리킴
- 내부 함수는 함수 안의 일반 함수일 뿐임!
```javascript
var obj = {
    print: function() {
      console.log(this); // obj 객체
      
      var print2 = function() {
        console.log(this); // window 객체
      }
      print2();
   }
}
```
- 이 경우 메서드 내부에서 this를 정의해주면 됨!
```javascript
var obj = {
    print: function() {
      console.log(this); // obj 객체
      
      var _this = this;
      var print2 = function() {
        console.log(_this); // obj 객체
      }
      print2();
   }
}
```
### 4. call(), apply(), bind()
* JavaScript에서는 각가 다른 문맥의 this를 필요에 따라 변경할 수 있도록 함수를 제공
* call(), apply(), bind()

```javascript
var man = {
    name: 'john',
    // 1. 이것은 객체의 메소드
    hello: function() {
        // 2. 객체의 메소드 안에서 함수를 선언하는 것이니까 내부 함수
        function getName() {
            // 3. 여기서 this가 무엇을 가리키고 있을까?
            return this.name;
        }
        console.log('hello ' + getName()); // 4. 내부 함수를 출력시키고
    }
}
```

```javascript
// 1. 이것은 객체의 메소드
var man = {
    name: 'john',
    // 2. 객체의 메소드 안에서 함수를 선언하는 것이니까 내부 함수
    hello: function() {
        function getName() {
            // 3. 여기서 this가 무엇을 가리키고 있을까?
            return this.name;
        }
        // 4. 이번에는 call()을 통해 현재 문맥에서의 this(man 객체)를 바인딩해줌
        console.log('hello ' + getName.call(this));
    }
}

// 이번에는 메소드를 실행시키면 john가 뜬다!
// this가 man 객체로 바인딩 된 것을 확인할 수 있다
man.hello();
```

### 5. 콜백 함수
* 콜백함수란 간단하게 다른 함수에 매개변수로 넘겨준 함수
* 4 Example,
   * 코드를 살펴보면 checkGang, linkGang, goodGang 총 3가지 함수를 선언
   * checkGang 함수를 호출할 때 매개변수로 count에 숫자값을, 그리고 link와 good에 각각 linkGang과 goodGang함수를 전달
    * 여기서 linkGang함수와 goodGang함수가 콜백함수
    * checkGang함수가 먼저 호출되고, 매개변수로 들어온 count의 값에 따라
linkGang과 goodGang함수 둘 중 한 가지가 나중에 호출
```javascript
// 1. object 안의 setName 호출이됨
function checkGang(count, link, good) {
  count < 3 ? link() : good();
}

function linkGang() {
  console.log('1일 3깡은 기본입니다. 아래 링크를 통해 깡을 시청해주세요');
  console.log('https://youtu.be/xqFvYsy4wE4');
}

function goodGang() {
  console.log('오늘 할당량은 모두 채우셨습니다! :)')
}

checkGang(2, linkGang, goodGang);
```

* 콜백 함수에서는 this가 Window를 가리킴 - 객체 안에 메소드로 선언되어 있더라도!
* 왜 그럴까?
   * 메서드가 함수로서 호출되면서 객체와의 연결성이 사라져 this가 달라졌기 때문
  * this가 그냥 this로 불렸기 때문에 this는 user가 아닌 전역객체 (window)를 바라보게 됨


### 6. 생성자
* 함수 앞에 new 키워드가 붙이고 선언할 때, this를 해당 객체에 바인딩
```javascript
// 1. 클래스 역할을 할 함수 선언
function Man () {
    this.name = 'John';
}

// 2. 생성자로 객체 선언
var john = new Man();

// 3. this가 Man 객체를 가리키고 있어 이름이 정상적으로 출력된다
john.name; // => 'John'
```

### 7. 화살표 함수
* 단순히 함수를 축약해서 사용하는 것 뿐만이 아니라 this를 외부 스코프에서 정적으로 바인딩된 문맥(정적 컨텍스트, Lexical context)을 가진다는 특징이 있음
* 정적 컨텍스트는 함수가 실행된 위치가 아닌, 정의(defined)된 위치에서의 컨텍스트를 참조
</br> => 코드가 어디서 실행되고 그런 것 따질 필요 없이, 그냥 정의된 부분에서 가까운 외부 함수의 this만 참조
```javascript
// 1. 화살표 함수
var obj = {
    a: this, // 2. 일반적인 경우 this는 window,
    b: function() {
      console.log(this) // 3. 메소드의 경우 this는 객체
    },
    c: () => {
        console.log(this)
        // 4. 화살표 함수의 경우 정적 컨텍스트를 가짐, 함수를 호출하는 것과 this는 연관이 없음
        // 5. 따라서 화살표 함수가 정의된 obj 객체의 this를 바인딩하므로 this는 window
    }

}

obj.b() // 6. obj
obj.c() // 7. window
```

* 일반적인 방법으로 함수를 선언(function () { ... })하면, 일반적인 함수는 함수가 실행될 때 자체적으로 this를 할당 </br>
이 함수는 메소드 함수이므로 this가 메소드를 포함하는 객체로 바인딩
* 화살표 함수는 this가 없기 때문에, 부모 스코프의 this를 바인딩하는데 위의 예시에서 이는 곧 Window객체를 의미
* 메소드로 화살표 함수를 쓰면, this를 이용한 부모 객체에 접근할 수 없음

