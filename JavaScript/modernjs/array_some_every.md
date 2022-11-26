# async / await

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

```javascript
// some & every
const numbers = [ 1, 3, 5, 7, 9 ];

// some : 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some( (value) => value > 5 );

// every : 모든 요소가 조건을 만족하는지
const everyReturn = numbers.every( (value) => value > 5 );

console.log('some:', someReturn);   // true
console.log('every:', everyReturn);    // false
```
* 동작 원리
```javascript
const numbers = [ 1, 3, 5, 7, 9 ];

// some : 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some( (value, index) => {
  console.log('some:', i);
  return value > 5;
} );

// every : 모든 요소가 조건을 만족하는지
const everyReturn = numbers.every( (value, index) => {
  console.log('every:', i);
  return value > 5;
} );


console.log('some:', someReturn);
console.log('every:', everyReturn);

// some : 0
// some : 1
// some : 2
// some : 3
// every : 0
// some : true
// every : false
```