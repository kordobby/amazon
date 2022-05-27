# async / await

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

```javascript
// fetch('url')
//    .then((response) => response.text())
//    .then((result) => { console.log(result); });



// async : asynchronous (비동기) => 함수 안에 비동기적으로 실행될 부분이 있다는 표현
async function fetchAndPrint() {
  const response = await fetch('url');
  // await + promise 객체를 만드는 코드 => await 뒤의 코드를 실행 => 해당 코드에서 리턴하는 Promise 객체가 fulfilled or rejected 가 될 때 까지 기다림
  // Promise 객체가 fulfilled 상태가 되면, 작업 성공 결과를 추출해서 return
  const result = await response.text();
  // response 객체의 .text() 메서드는 Promise 를 리턴
  // await는 Promise 객체가 fulfilled 상태가 되면, 작업 성공 결과를 추출해서 return
  console.log(result);
}

fetchAndPrint();
```

## 동기 실행 코드처럼 생긴 비동기 실행 코드
```javascript
/* fetch('https://www.google.com')
    .then((response) => response.text())
    .then((result) => { console.log(result); }); */

async function fetchAndPrint() {
  console.log(2);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(7);
  const result = await response.text();
  console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);
```

* async/await 구문 
   * 기존의 Promise 객체를 사용하는 코드(Promise Chaining)를
   * (1) 개발자가 더 편하게 작성할 수 있도록 하고,
   * (2) 코드의 가독성을 높이기 위해 도입된 일종의 syntactic sugar에 해당함
* syntactic sugar ? => 기존 문법을 더 편하게 사용할 수 있도록 하는 문법적 장치
* async/await 구문이 Promise 객체를 우리에게 이미 익숙한 동기 실행 코드 방식으로 다룰 수 있게 해주는 문법

```javascript
async function fetchAndPrint() {
  console.log(2);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(7);
  const result = await response.text();
  console.log(result);
}

/* function fetchAndPrint() {
  console.log(2);
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(7);
      return response.text();
    })
    .then((result) => { console.log(result); });
} */

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);

// 1
// 2
// 3
// 4
// 5
// 6
// undefined
// 7
// response array
```

### async/await 구문의 실행 원리 복습
1. async 함수 안의 코드가 실행되다가 await을 만나면, 일단 await 뒤의 코드가 실행되고, 코드의 실행 흐름이 async 함수 바깥으로 나가서 나머지 코드를 다 실행
2. 그 이후로는, await 뒤에 있던 Promise 객체가 fulfilled 상태가 되기를 기다림
3. 기다리던 Promise 객체가 fulfilled 상태가 되면 await이 Promise 객체의 작업 성공 결과를 리턴


```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const lastUser = users[users.length - 1];
    return lastUser.id;
  })
  .then((id) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))
  .then((response) => response.json())
  .then((posts) => {
    const lastPost = posts[posts.length - 1];
    console.log(lastPost);
  });
```

[ 실습 혼자 연습한 것 ]
```javascript
// fetch("https://jsonplaceholder.typicode.com/users")    // promise
async function getTheLastPostOfTheLastUser() {
  const usersJSON = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await usersJSON.json();
  const lastUser = users[users.length - 1];
  const { id } = lastUser;
  const postsJSON = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const posts = await postsJSON.json();
  const lastPost = posts[posts.length - 1];
  return lastPost;
}

getTheLastPostOfTheLastUser().then((lastPost) => {
  console.log(lastPost);
});
```

[ 답안 ]
```javascript
async function getTheLastPostOfTheLastUser() {
  const usersJSON = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await usersJSON.json();
  const lastUser = users[users.length - 1];
  const { id } = lastUser;
  const postsJSON = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const posts = await postsJSON.json();
  const lastPost = posts[posts.length - 1];
  return lastPost;
}

getTheLastPostOfTheLastUser().then((lastPost) => {
  console.log(lastPost);
});
```

## 2. catch문과 finally문



## 3. async 함수가 리턴하는 Promise 객체
* async 함수는 그 안에서 리턴하는 값에 따라 그에 맞는 Promise 객체를 리턴

### 3-1. 어떤 값을 리턴하는 경우
1. Promise 객체를 리턴하는 경우
*  해당 Promise 객체와 동일한 상태와 작업 성공 결과(또는 작업 실패 정보)를 가진 Promise 객체를 리턴
  ( 그냥 해당 Promise 객체를 리턴하는 것과 같음 )

```javascript
async function fetchAndPrint() {
  return new Promise((resolve, reject)=> {
    setTimeout(() => { resolve('abc'); }, 4000);
  });
}

fetchAndPrint();
// Promise
// [[PromiseState]] : "pending"     => 4초 뒤 "fulfilled"
// [[PromiseResult]] : undefined
```
2. Promise 객체 이외의 값을 리턴하는 경우
* async 함수 내부에서 Promise 객체 이외에 숫자나 문자열, 일반 객체 등을 리턴하는 경우에는, fulfilled 상태이면서, 리턴된 값을 작업 성공 결과로 가진 Promise 객체를 리턴
```javascript
async function fetchAndPrint() {
  return 3;
}

fetchAndPrint();

// Promise
// [[PromiseState]] : "fulfilled"
// [[PromiseResult]] : 3
```

### 3-2. 아무 값도 리턴하지 않는 경우
* fulfilled 상태이면서, undefined를 작업 성공 결과로 가진 Promise 객체가 리턴
```javascript
async function fetchAndPrint() {
  console.log('Hello Programming!');
}

fetchAndPrint();

// Promise
// [[PromiseState]] : "fulfilled"
// [[PromiseResult]] : undefined
```

### 3-3. async 함수 내부에서 에러가 발생했을 때
* async 함수 안에서 에러가 발생하면, rejected 상태이면서, 해당 에러 객체를 작업 실패 정보로 가진 Promise 객체가 리턴
```javascript
async function fetchAndPrint() {
  throw new Error('Fail');
}

fetchAndPrint();

// Promise
// [[PromiseState]] : "rejected"
// [[PromiseResult]] : Error : fail at fetchAndPrint ...
```
