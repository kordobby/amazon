# new 연산자와 생성자 함수

## 생성자 함수
* 'new' 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있음

### 생성자 함수
* 생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없음
* 생성자 함수는 아래 두 관례를 따름
   1. 함수 이름의 첫 글자는 대문자로 시작
   2. 반드시 'new' 연산자를 붙여 실행
```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("보라");

alert(user.name); // 보라
alert(user.isAdmin); // false
```
* new User(...)를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작

   1. 빈 객체를 만들어 this에 할당
   2. 함수 본문을 실행. this에 새로운 프로퍼티를 추가해 this를 수정.
   3. this를 반환

```javascript
function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
}

let user = {
  name: "보라",
  isAdmin: false
};


```
