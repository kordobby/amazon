# Object
<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 객체 / 프로퍼티 / 메서드

### 객체란?

- JS 는 객체(object) 기반의 스크립트 언어로 JS를 이루는 거의 모든 것이 객체임
- 원시 값 (string, number, boolean, symbol, null, undefined)을 제외한 나머지 값들 (함수, 배열, 정규표현식 등)은 모두 객체
- JS의 객체는 Key 와 value로 구성된 프로퍼티들의 집합
   - 프로퍼티의 값으로 JS에서 사용하는 모든 값을 사용할 수 있음
- JS의 함수는 일급 객체이므로 값으로 취급 가능
- 프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메서드라 부름

```javascript
  * object
    - property // data를 의미 (key : value)
    - method // data를 참조하고 조작할 수 있는 동작을 의미
  * object 는 property 와 method의 집합
    - data와 data에 관련된 동작을 모두 포함할 수 있어 data와 동작을 하나의 단위로 구조화할 수 있어 유용
```
- JS의 객체는 객체지향의 상속을 구현하기 위해 "prototype"이라 불리는 객체의 프로퍼티와 메서드를 상속받을 수 잇음


### 프로퍼티 
```javascript
  var yoon = {
    name : 'dobby',
    age : 20
  };
```
- 객체는 프로퍼티의 집합 !
   - 프로퍼티 : name : 'dobby', age : 20
   - 프로퍼티 key : name, age
   - 프로퍼티 value : dobby, 20

- 프로퍼티 : 프로퍼티 key(이름) + value 값으로 구성
- 프로퍼티 key는 프로퍼티를 식별하기 위한 식별자(identifier)
- 프로퍼티 key의 명명 규칙과 value로 사용할 수 있는 값
   - key : 빈 문자열을 포함하는 모든 문자열 또는 symbol rkqt
   - value : 모든 값

### 메서드
- 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메서드라 부름
- 메서드는 객체에 제한되어있는 함수를 의미!

```javascript
var circle = {
  radius: 5,
  getDiameter : function() {
    return 2 * this.radius;
  }
};
```
- 프로퍼티 ? radius : 5
- 메서드 ? getDiameter: function()
