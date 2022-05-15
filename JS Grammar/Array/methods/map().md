# map()
<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## map() 메서드

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

### map()
* map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

### 구문
```javascript
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```
#### 파라미터
- callback : 새로운 배열 요소를 생성하는 함수
   - currentValue : 처리할 현재 요소
   - index : (optional) 처리할 현재 요소의 인덱스
   - array : (optional) map()을 호출할 배열
   - thisArg : (optional) callback을 실행할 때 this로 사용되는 값

#### 반환 값
- 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열

### 설명
- map은 callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듦
- callback 함수는 배열 값이 들어있는 인덱스에 대해서만 호출됨
- 값이 삭제되거나 아직 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않음

* call back 함수는 호출될 때
   * 대상 요소의 값
   * 그 요소의 인덱스
   * map을 호출한 원본 배열 3개의 인수를 전달받음

* thisArg 매개변수가 map에 전달된 경우 callback 함수의 this값으로 사용됨
*  그 외의 경우 undefined값이 this 값으로 사용됨
* callback 함수에서 최종적으로 볼 수 있는 this 값은  함수 내 this를 정하는 일반적인 규칙에 따라 결정됨


   
