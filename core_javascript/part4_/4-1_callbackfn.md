# Chapter 04 - 콜백 함수

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

- 당연한 소리를 하고있네;

```javascript
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(this, v, i);
  },
};

obj.logValues(1, 2);
// 메서드로서 호출
// => this 는 obj를 가리키고 인자로 넘어온 1, 2 출력
[4, 5, 6].forEach(obj.logValues);
// 콜백함수로서 전달
```
