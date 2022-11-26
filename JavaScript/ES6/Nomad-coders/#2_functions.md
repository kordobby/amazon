# Functions
<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## #2.0 Arrow Functions

### arrow functions
* JS에서 함수의 모습을 개선시킨 것
* var 처럼 let과 const의 대체가 되는 개념은 아님. 그저 보기 좋게 만들었을 뿐

#### 일반적인 함수 표현식(기본문법)
```javascript
const hello = function nameOf(arg) {
  //...
}
```

#### 일반적인 함수 표현식
```javascript
const names = ['yoon', 'dobby', 'ron'];
//map 은 모든 아이템에게 함수를 적용시키는 함수
const hearts = names.map(function(item) {
                            return item + "💖";
              });

console.log(hearts); // [ 'yoon💖', 'dobby💖', 'ron💖' ]
```

#### 화살표 함수 표현 (1) - return 이 있을 때
```javascript
const names = ['yoon', 'dobby', 'ron'];

const hearts = names.map( item => {return item + "💖";});

console.log(hearts); // [ 'yoon💖', 'dobby💖', 'ron💖' ]
```
#### 화살표 함수 표현 (2) - return 을 생략할 때
```javascript
const names = ['yoon', 'dobby', 'ron'];

const hearts = names.map( item => ( item + "💖"));
// return 을 지울때는 {} 와 ; 을 지우고 () 를 이용해 감싸주면 됨!
console.log(hearts); // [ 'yoon💖', 'dobby💖', 'ron💖' ]
```

#### 화살표 함수 표현 (3) - 인자가 2개 이상일 때
```javascript
const names = ['yoon', 'dobby', 'ron'];

const hearts = names.map( (item, index ) => ( item + "💖" + index));
// 인자가 2개 이상일 때는 () 로 감싸서 표현
console.log(hearts); // [ 'yoon💖0', 'dobby💖1', 'ron💖2' ]
```

#### 화살표 함수 표현 (4) - 인자가 없을 때
```javascript
const names = ['yoon', 'dobby', 'ron'];

const hearts = names.map( () => ( "💖" ));
// 인자가 2개 이상일 때는 () 로 감싸서 표현
console.log(hearts); // [ '💖', '💖', '💖' ]
```

## #2.1 'this' in Arrow Functions

### arrow functions

```html
<div>
  <button>hello</button>
</div>
```

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function(){
  console.log(this); // <button>hello</button>
  console.log("i have been clicked");
  });