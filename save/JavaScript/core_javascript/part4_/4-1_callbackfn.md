`# Chapter 04 - 콜백 함수

### [01] 콜백함수란?

- 콜백함수 callback function
  - 다른코드의 인자로 넘겨주는 함수
  - 콜백함수를 넘겨받은 코드는 이 콜백 함수를 필요에 따라 적절한 시점에 실행
- 일종의 알람이라고 생각하자!

### [02] 제어권

### [04-2-1] 호출 시점

- 콜백함수 예제 : setInterval
  ```javascript
  var count = 0;
  var timer = setInterval(function () {
    console.log(count);
    if (++count > 4) clearInterval(timer);
  }, 300);
  // setInterval( function(){}, delayTime);
  ```
  ```javascript
  var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
  * 매개변수 : func, delay 값 반드시 전달
  * 세번째 매개변수부터는 선택적!
  ```

```javascript
var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

var timer = setInterval(cbFunc, 300);

// ==== 실행 결과 ====
// 0 (0.3 sec)
// 1 (0.6 sec)
// 2 (0.9 sec)
// 3 (1.2 sec)
// 4 (1.5 sec)
```

### [04-2-2] 인자

- 콜백함수 예제 : Array.prototype.map

```javascript
var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});
```

```javascript
Array.prototype.map(callback[, thisArg])
callback: function(currentValue, index, array);
```

- map method : 첫 번째 인자로 callback 함수를 받고, 생략 가능한 두 번째 인자로 콜백 함수 내에서 this로 인식할 대상을 특정함
- 배열의 모든 요소들을 처음부터 끝까지 하나씩 꺼내어 콜백 함수를 반복 호출하고 콜백 함수의 실행 결과들을 모아 새로운 배열을 만들어줌

```javascript
var newArr2 = [10, 20, 30].map(function (index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5;
});
console.log(newArr2);
```

### [04-2-3] this

- 이 파트는 this study 끝나고 다뤄보겠습니다.

```javascript
Array.prototype.map = function (callback, thisArg) {
  var mappedArr = [];
  for (var i = 0; i < this.length; i++) {
    var mappedValue = callback.call(thisArg || window, this[i], i, this);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};
```

### [03] 콜백 함수는 함수다

- 콜백 함수로 어떤 객체의 메서드를 전달 하더라도 메서드는 함수로 호출!

```javascript
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(this, v, i);
    // 여기서 this는, obj를 가리킴
    // => 인자로 넘어온 1, 2가 출력됨
  },
};

obj.logValues(1, 2);
// 메서드로서 호출
// => this 는 obj를 가리키고 인자로 넘어온 1, 2 출력
[4, 5, 6].forEach(obj.logValues);
// 콜백함수로서 전달 => this는 전역객체를 바라보게됨
// window { ... } 4, 0
// window { ... } 5, 1
// window { ... } 6, 2
```

### [05] 콜백 지옥과 비동기 제어

- 콜백 지옥(callback hell)은 콜백 함수를 익명 함수로 전달하는 과정이 반복되어서 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상

```javascript
setTimeout(function (name) {
  var coffeeList = name;
  console.log(coffeeList);

  setTimeout(function (name) {
    coffeeList += "," + name;
    console.log(coffeeList);

    setTimeout(function (name) {
      coffeeList += "," + name;
      console.log(coffeeList);
    });
  });
});
```

- 동기적인 코드
  - CPU 계산에 의해 즉시 처리가 가능한 대부분의 코드
- 비동기적인 코드

  - 사용자의 요청에 의해 특정 시간이 경과되지 전까지 어떤 함수의 실행을 보류 (setTimeout)
  - 사용자의 직접적인 개입이 있을 때 어떤 함수가 실행하도록 대기 (addEventListener)
  - 웹 브라우저가 아닌 별도의 대상에 무언가를 요청, 그에 대한 응답이 왔을 때 어떤 함수를 실행하도록 대기하는 등 별도의 요청, 실행 대기, 보류 등과 관련한 코드

* 콜백 지옥을 해결해보자

  - 코드의 가독성을 높여줌
  - 함수 선언과 함수 호출이 구분되어 위에서 아래로 읽어가는데 어려움이 없음

  ```javascript
  var coffeeList = "";

  var addEspresso = function (name) {
    coffeeList = name;
    console.log(coffeeList);
    setTimeout(addAmericano, 500, "아메리카노");
  };

  var addAmericano = function (name) {
    coffeeList += "," + name;
    console.log(coffeeList);
    setTimeout(addMocha, 500, "카페모카");
  };

  var addMocha = function (name) {
    coffeeList += "," + name;
    console.log(coffeeList);
    setTimeout(addLatte, 500, "카페라떼");
  };

  setTimeout(addEspresso, 500, "에스프레소");
  ```

* 일회성 함수를 전부 변수에 주는게 짱나는 독자들을 위해...

  - 비동기적인 작업을 동지억으로 보이게끔 처리해주는 장치 마련
  - async / await
  - promise / generator

  ```javascript
  new Promise (function (resolve) {
    setTimeout(function () {
      var name = '에스프레소';
      console.log(name);
      resolve(name);
    }, 500);
  }).then(function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ', 아메리카노';
        console.log(name);
        resolve(name);
      }, 500)
    })
  }).then......
  ```

