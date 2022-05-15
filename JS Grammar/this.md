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
- 함수 내에 있는 함수에서는 this의 값은 정의된 객체가 아닌 머리객체를 참조
```javascript
  var myObject = {
    func1 : function() {
      console.log(this): // myObject가 기록됨
      var func2 = function () {
        console.log(this) // window가 기록되며, 여기서부터는 this가 계속 같음
        var func3 = function() {
          console.log(this) : // 머리 객체인 window 기록
        }();
      }();
    }
  }
```

