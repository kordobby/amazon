# 배열 내장함수

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## forEach
* 기존에 우리가 배웠던 for 문을 대체
* [ 예시 ]
```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
```

```javascript
for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}
```
* forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줌
* 함수의 파라미터 hero는 각 원소를 가리킴
* 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 부르며, 함수를 등록해주면, forEach 가 실행됨
```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach( hero => {
  console.log(hero);
});
```

## map
* 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어짐

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];
```

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

console.log(squared);
```

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];

array.forEach(n => {
  squared.push(n * n);
});

console.log(squared);
```

* map 함수의 파라미터로는 변화를 주는 함수를 전달해줌 (변화함수)
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
const squared = array.map(square);
// const squared = array.map( (value) => value * value );
console.log(squared);
```

## indexOf
* 원하는 항목이 몇번째 원소인지 찾아주는 함수

```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
```

```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index); // 2
```

## findIndex
* 배열 안에 있는 값이 숫자, 문자열, 또는 불리언이라면 찾고자하는 항목이 몇번째 원소인지 알아내려면 indexOf 를 사용
* 배열 안에 있는 값이 객체이거나, 배열이라면 indexOf 로 찾을 수 없음

```javascript
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];
```
*  만약 id 가 3 인 객체가 몇번째인지 찾으러면, findIndex 함수에 검사하고자 하는 조건을 반환하는 함수를 넣어서 찾을 수 있음
```javascript
const index = todos.findIndex(todo => todo.id === 3);
console.log(index); // 2
```

## find
* findIndex 랑 비슷한데, 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환

```javascript
const todo = todos.find(todo => todo.id === 3);
console.log(todo); // {id: 3, text: "객체와 배열 배우기", done: true}
```

## filter
* 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듦
* filter 함수에 넣는 파라미터는 조건을 검사하는 함수를 넣어주며, 이 함수의 파라미터로 각 원소의 값을 받아옴
```javascript
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);
/*
 [
  {
    id: 4,
    text: '배열 내장 함수 배우기',
    done: false
  }
];
 */
```
* 이렇게도 작성 가능
: `filter` 에 넣어준 함수에서 `true` 를 반환하면 새로운 배열에 따로 추출을 해주는데, 만약 `todo.done` 값이 `false` 라면, `!false` 가 되고 이 값은 `true` 이기 때문에 이전의 `todo.done === false` 와 똑같이 작동
```javascript
const tasksNotDone = todos.filter(todo => !todo.done);
```

## splice
* 배열에서 특정 항목을 제거할 때 사용
* 첫번째 파라미터는 어떤 인덱스부터 지울지를 의
* 두번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미

```javascript
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers); // [10, 20, 40]
```

## slice
* 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열은 건들이지 않는다는 것
* slice 에는 두개의 파라미터를 넣게 되는데 첫번째 파라미터는 어디서부터 자를지, 그리고 두번째 파라미터는 어디까지 자를지 를 의미

```javascript
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]
```

## shift 와 pop
* shift 는 첫번째 원소를 배열에서 추출  (추출하는 과정에서 배열에서 해당 원소는 사라짐)
```javascript
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value); // 10
console.log(numbers); // [20, 30, 40]
```

* pop 은 push 의 반대
<br/> : push 는 배열의 맨 마지막에 새 항목을 추가하고, pop 은 맨 마지막 항목을 추출

```javascript
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value); // 40
console.log(numbers); // [10, 20, 30]
```
## unshift
* unshift 는 shift 의 반대
* 배열의 맨 앞에 새 원소를 추가

```javascript
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers); // [5, 10, 20, 30, 40]
```

## concat
* 여러개의 배열을 하나의 배열로 합쳐줌
* concat 함수는 arr1 과 arr2 에 변화를 주지 않음
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated); // [1, 2, 3, 4, 5, 6]
```

## join
* join 은 배열 안의 값들을 문자열 형태로 합침
```javascript
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
```

## reduce
* 잘 사용 할 줄 알면 정말 유용한 내장 함수

### 사용 예시
* 주어진 배열에 대하여 총합을 구해야 하는 상황이 왔다고 가정,
```javascript
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});
console.log(sum); // 15
```

```javascript
array.reduce((accumulator, current) => accumulator + current, 0);
// 첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수
// 두번째 파라미터는 reduce 함수에서 사용 할 초깃값
```

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = array.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);
```
* reduce 를 사용해서 평균도 계산 할 수 있음
   * 가장 마지막 숫자를 더하고 나서 배열의 length 로 나누어주어야 함

```javascript
const numbers = [1, 2, 3, 4, 5];
                      // 콜백함수 , 초깃값, 현재 처리중인 항목의 index, 현재 처리하고 있는 배열 자신
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum);
```
