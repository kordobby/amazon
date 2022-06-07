# Named Function Expression (기명 함수 표현식)

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## Named Function Expression (기명 함수 표현식)
* 이름이 있는 함수 표현식
* 함수 표현식으로 함수가 할당된 변수에는 자동으로 name이라는 프로퍼티를 가지게 됨

```javascript
const sayHi = function () {
  console.log('Hi');
};

console.log(sayHi.name); // sayHi
```

* 이름이 없는 함수를 변수에 할당할 때는 변수의 name 프로퍼티는 변수 이름 그 자체를 문자열로 가지게 됨
* 함수에 이름을 붙여주게 되면, name 속성은 함수 이름을 문자열로 갖게 됨

```javascript
const sayHi = function printHiInConsole() {
  console.log('Hi');
};

console.log(sayHi.name); // printHiInConsole
```
* 이 함수 이름은 함수 내부에서 함수 자체를 가리킬 때 사용할 수 있고 함수를 외부에서 함수를 호출할 때 사용할 수는 없음

```javascript
const sayHi = function printHiInConsole() {
  console.log('Hi');
};

printHiInConsole(); // ReferenceError
```

* 기명 함수 표현식은 일반적으로 함수 내부에서 함수 자체를 가리킬 때 사용됨
```javascript
let countdown = function(n) {
  console.log(n);

  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
};

countdown(5);
```

* 재귀 함수(Recursive function)
   * 자기 자신을 부르는 함수
   * 아규먼트로 숫자 값을 전달하고 전달받은 그 값이 0이 될 때까지 하나씩 값을 줄이면서 자기 자신을 호출하는 countdown이라는 함수를 함수 표현식으로 작성
   * 만약 이 함수를 복사하려고 다른 변수에 똑같이 담았다가, countdown 변수에 담긴 값이 변하게 되면 문제가 발생

```javascript
let countdown = function(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
};

let myFunction = countdown;

countdown = null;

myFunction(5); // TypeError
```
* 마지막 줄에서 myFunction 함수를 호출했을 때, 함수가 실행되긴 하지만, 6번줄 동작을 수행할 때 호출하려는 countdown 함수가 이미 12번에서 null 값으로 변경되었기 때문에 함수가 아니라는 TypeError가 발생
* 이런 상황을 방지하기 위해서 함수 내부에서 함수 자신을 사용하려고 하면 함수표현식에서는 반드시 기명 함수 표현식을 사용하는 것이 좋음

```javascript
let countdown = function printCountdown(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    printCountdown(n - 1);
  }
};

let myFunction = countdown;

countdown = null;

myFunction(5); // 정상적으로 동작
```


## 결론 : 함수 표현식을 작성할 때, 함수에 이름을 지정할 수 있다는 점과 특히 이렇게 함수 내에서 함수를 가리켜야 할 때는 꼭 함수 이름을 작성해주는 것이 안전!
