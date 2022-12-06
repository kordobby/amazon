# fetch().then()

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## fetch 함수의 실행 원리

* fetch 함수로 리퀘스트를 보내고, 리스폰스를 받아서 그 내용을 출력 

```javascript
fetch('https://www.google.com')
  // fetch 의 콜백 함수 : response를 받아온 후에야 함수가 작동
  // .then : fetch 함수가 return하는 promise 객체의 메서드로 콜백을 등록해줌
  .then((response) => response.text())
  // response : 관련된 각종 부가 정보들과, 실제 내용을 함께 갖고 있는 하나의 객체(object)가 넘어옴
  // text 메소드의 리턴값이 리스폰스의 실제 내용이 되며 다음 콜백함수에 result 파라미터로 넘어감
  // 현재 페이지를 그리고 있는 html, Javascript 코드를 서버에서 받아온 내용들
  .then((result) => { console.log(result); });
```

### 실행원리
1. fetch 함수는 어떤 객체를 리턴 (Promise 객체)
2. 이 객체의 then 메소드로, '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있음
3. 이렇게 등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 이때 이전 콜백의 리턴값을 이후 콜백이 넘겨받아서 사용할 수 있음

### fetch 함수와 비동기 실행
```javascript
console.log('start!');
fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); });
console.log('end!');
```
```javascript
// console log
'start!'
'end!'
[ { "data" : ... }]
```
```javascript
// console log
'start!'
'end!'
[ { "data" : ... }]
```
* 왜 이렇게 실행이 될까?

```javascript
// console log
console.log('start!'); // 1. console.log 실행
fetch('https://www.google.com') // 2. fetch 함수가 request 를 보냄
  .then((response) => response.text()) // 3. Promise 객체의 then 메서드가 콜백함수 등록
  .then((result) => { console.log(result); }); // 4. 마찬가지로 콜백함수 등록
console.log('end!'); // 5. console.log 실행
// 6. 이후 서버에서 response 도착 후에 콜백함수가 실행됨
// 7. response의 내용 출력
```
![img](/Images/fetch.png)

### 동기 실행과 비동기 실행?
* 동기 실행
   * 한번 시작한 작업은 다 처리하고 나서야, 다음 코드로 넘어가는, 우리에게 익숙한 방식의 실행
* 비동기 실행
   * 특정 작업을 시작(request 보내기)하고 완벽하게 다 처리(response를 받아서 처리)하기 전에, 실행 흐름이 바로 다음 코드로 넘어가고, 나중에 콜백이 실행되는 것
   * 보통 '비동기 실행'이 '동기 실행'에 비해, 동일한 작업을 더 빠른 시간 내에 처리할 수 있기 때문에 사용됨 (시간을 낭비를 줄임!)

* 알아둬야하는 비동기 실행 함수들
1. setTimeout 함수 : 특정 함수의 실행을 원하는 시간만큼 뒤로 미루기 위해 사용하는 함수
2. setInterval 함수 : 특정 콜백을 일정한 시간 간격으로 실행하도록 등록하는 함수
3. addEventListener 메소드 

### fetch 함수가 리턴하는 Promise 객체
```javascript
fetch('https://www.google.com') 
// 서버에 request 요청 => response 받아옴
// return => Promise obj ( 위 작업의 결과를 저장하고 있음 )
// request 작업의 성공여부는 Promise 를 확인하면 알 수 있음 
  .then((response) => response.text()) 
  .then((result) => { console.log(result); }); 
```
* Promise 객체의 3가지 상태
   * pending : 진행중
   * fulfilled : 성공
   * rejected : 실패
```javascript
fetch('https://www.google.com') 
// 1. 제일 처음 fetch 가 return 한 Promise obj.는 pending 상태 (작업 진행중)
// 2. 만약 네트워크가 끊겨서 response가 안되었다면 rejected 상태
    // 2-1. 만약 실패하게 된다면 실패 이유가 Promise 객체에 저장 (작업 실패 정보)
// 3. 이후에 response를 정상적으로  받으면 fulfilled 상태
    // 3-1. 만약 작업이 성공해서 fulfilled 상태가 되면, 객체는 그 작업의 성공 결과도 함께 저장
  .then((response) => response.text()) 
    // 3-2. 위의 response 가 작업에 대한 성공 결과 (작업 성공 결과)
  .then((result) => { console.log(result); }); 
```

### fetch 함수를 사용한 코드를 다시 해석해보자
```javascript
fetch('https://www.google.com') 
  .then((response) => response.text()) 
  // Promise obj. 가 fulfilled 상태가 되었을 때, 첫 번째 콜백의 파라미터로 response 가 넘어옴
  // 여기서 response 를 javascript 객체로 만든 결과가 넘어옴
  .then((result) => { console.log(result); });
```

###  Promise Chaining
1. promise 객체를 리턴하는 경우
```javascript
fetch('https://www.google.com')  // [ promise(fetch) : fulfilled ]
  .then((response) => response.text()) // [ promise(then) : pending ]
     // [ promise(call back) : fulfilled ]  =>  *[ promise(then) : pending => fulfilled, 작업성공결과 저장 ]
     // [ promise(call back) : rejected ]  =>  *[ promise(then) : pending => rejected, 작업 실패내용 저장 ]
```
2. promise 객체가 아닌 값을 리턴하는 경우
```javascript
fetch('https://www.google.com')  // [ promise(fetch) : fulfilled ]
  .then((response) => response.text()) // *[ promise(then) : pending ]
     // 콜백에서 숫자, 문자열, 일반 객체 등을 return 한다면? =>  *[ promise(then) : pending => fulfilled, 콜백의 return 값을 작업성공결과에 저장 ]
     // 
```


* Promise Chaining 이해해보기
```javascript
fetch('https://www.google.com')             // [promise] => [fulfilled : 작업성공결과 저장 ]
  .then((response) => response.text())      // [promise]    => [fulfilled : 작업성공결과 저장 ]
  .then((result) => {                       // [promise]
    const users = JSON.parse(result);
    return users[0];                        // 일반객체가 return    => [fulfilled : users[0] 객체를 저장 ]  
  })
  .then((user) => {                         // [promise]
    console.log(user);
    const { address } = user;
    return address;                         // 일반객체가 return    => [fulfilled : address 객체를 저장 ] 
  })
  .then((address) => {                      // [promise]
    console.log(address);
    const { geo } = address;
    return geo;                             // 일반객체가 return    => [fulfilled : geo 객체를 저장 ]                    
  })
  .then((geo) => {                          // [promise]
    console.log(geo);
    const { lat } = geo;
    return lat;
  })
  .then((lat) => {                          // [promise]
    console.log(lat);       
  })
```

### text, json 메서드도 Promise 객체를 리턴

#### 1. text 메서드
* fetch 함수로 리스폰스를 잘 받으면, response 객체의 text 메소드가 일을함
<br/> => fulfilled 상태이면서 리스폰스의 바디에 있는 내용을 string 타입으로 변환한 값을 '작업 성공 결과'로 가진 Promise 객체를 리턴

* 이 때, 작업 성공 결과는 string 타입
* 그 값이 만약 JSON 데이터라면 JSON 객체의 parse 메소드로 Deserialize 시행 `(JSON.parse(result);)`
   * `JSON.parse()` : JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성

#### 2. json 메서드
* fetch 함수로 리스폰스를 잘 받으면, response 객체의 json 메소드가 일을함
<br/> => fulfilled 상태이면서, 리스폰스의 바디에 있는 JSON 데이터를 JS 객체로 Deserialize해서 생겨난 객체를 '작업 성공 결과'로 가진 Promise 객체를 리턴
* 만약 리스폰스의 바디에 있는 내용이 JSON 타입이 아니라면 에러가 발생하고 Promise 객체는 rejected 상태가 되면서 그 '작업 실패 정보'를 갖게됨

```javascript
fetch('https://www.google.com')  // [ promise(fetch) : fulfilled ]
  .then((response) => response.text()) // [ promise(then) : pending ]
     // [ promise(call back) : fulfilled ]  =>  *[ promise(then) : pending => fulfilled, 작업성공결과 저장 ]
     // 콜백에서 리턴한 Promise 객체로부터 새로운 Chain이 시작된다.
     // response 객체의 text 메소드 또는 json 메소드 이후에 등장하는 then 메소드부터는 string 타입의 값이나 자바스크립트 객체를 갖고 바로 원하는 작업을 할 수 있음
```

## React - fetch 사용하기

### fetch 함수
* 자바스크립트를 사용하면 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 할 수 있음
   * 주문전송
   * 사용자 정보 읽기
   * 서버에서 최신 변경문 가져오기 등등
* 위의 모든 것들은 페이지 새로고침 없이도 가능!

### Basic Use
* fetch() 기본문법
    ```javascript
    let promise = fetch(url, [options])
    // url :접근하고자 하는 URL
    // options : 선택 매개변수, method나 header 등 지정 가능
    ```
    ```javascript
    fetch('url')
      .then(response => response.json())
      .then(response => data.filter(item => item.isRequired));
    ```

## then 메소드 완벽하게 이해하기
```javascript
const successCallback = function () { };
const errorCallback = function () { };

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then(successCallback, errorCallback); // Promise-B
```
1. fetch 함수의 작업이 성공해서 Promise-A 객체가 fulfilled 상태가 된 경우
<br/> : then 메소드 안의 "첫 번째" 콜백인 successCallback이 실행

2. fetch 함수의 작업이 실패해서 Promise-A 객체가 rejected 상태가 된 경우
<br/> : then 메소드 안의 "두 번째" 콜백인 errorCallback이 실행

* Promise-B는, 실행된 successCallback 또는 errorCallback에서 무엇을 리턴하느냐에 따라
   * 상태(fulfilled or rejected)
   * 결과(작업 성공 결과 or 작업 실패 정보)가 결정

## 1. 실행된 콜백이 어떤 값을 리턴하는 경우
* successCallback이 실행되든, errorCallback이 실행되든, 실행된 콜백에서 어떤 값을 리턴하는 경우 그 값의 종류에 따라 2가지 경우로 다시 나눔
   * Promise 객체인 경우
   * Promise 객체 이외의 경우

### 1-1. Promise 객체를 리턴하는 경우
```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => { console.log(result) });
```
* `(response) ⇒ response.json()` 이 콜백은 Promise 객체를 리턴하는 코드로, response 객체의 json 메서드가 Promise 객체를 리턴
* 콜백에서 Promise 객체를 리턴하는 경우, 그 콜백을 등록한 then 메서드가 리턴했던 Promise 객체가 콜백이 리턴한 Promise 객체의 상태와 결과를 똑같이 따라갖게 됨
* 이후로는 콜백에서 리턴한 Promise 객체로부터 다시 Promise Chain이 쭉 이어져 나감

### 1-2. Promise 객체 이외의 값을 리턴하는 경우
```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json(), (error) => 'Try again!')
  .then((result) => { console.log(result) });
```
* fetch 함수의 작업이 실패해서 두 번째 콜백인 `(error) ⇒ 'Try again!` 이 실행
* 두 번째 콜백은 문자열을 리턴하며 이렇게 하면, 해당 콜백을 등록한 then 메서드가 리턴했던 Promise가 fulfilled 상태가 되고, 그 작업 결과로 'Try again' 문자열을 가짐 

## 2. 실행된 콜백이 아무 값도 리턴하지 않는 경우

```javascript
// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json(), (error) => { alert('Try again!'); })
  .then((result) => { console.log(result) });
```
*  콜백이 무언가를 리턴하는 게 아니라 이 코드에서처럼 단순히 alert 함수만 실행하고 끝난다고 했을 때, 결과적으로 이 콜백은 아무런 값도 리턴하지 않은 것과 같음
* JS 에서는 함수가 아무것도 리턴하지 않으면 undefined를 리턴한 것으로 간주
* 규칙에 따라 then 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고, 그 작업 성공 결과로 undefined를 갖게됨

## 3. 실행된 콜백 내부에서 에러가 발생했을 때
* 콜백이 실행되다 에러가 발생하는 경우,
```javascript
const promise = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { throw new Error('test'); });
```
* 콜백이 실행되다가 에러가 발생한다면, then 메소드가 리턴했던 Promise 객체는 rejected 상태가 되고, 작업 실패 정보로 해당 에러 객체를 갖게 됨

![img](/Images/rejected.png)

* [[PromiseState]] : Promise 객체의 상태를 나타내는 내부 슬롯
* [[PromiseResult]] : Promise 객체의 결과(성공 결과 또는 실패 정보)를 나타내는 내부 슬롯
* 내부 슬롯? =? JS 실행 엔진에서 내부적으로 관리하는 속성
* 위를 보면, 현재 Promise 객체가 rejected 상태이고, 발생한 Error 객체를 그 작업 실패 정보로 갖고 있음
*  콜백 실행 중에 에러가 발생하면, then 메소드가 리턴한 Promise 객체는 rejected 상태가 되고, 그 작업 실패 정보로 해당 Error 객체를 갖게 됨

## 4. 아무런 콜백도 실행되지 않을 때
```javascript
// Internet Disconnected

fetch('https://www.google.com') // Promise-1
  .then((response) => response.text()) // Promise-2
  .then((result) => { console.log(result) }, (error) => { alert(error) }); 
```
* 인터넷을 끊고 나서 위 코드를 실행했다고 가정
*  fetch 함수가 리턴한 Promise-1 객체는 rejected 상태가 되기 때문에, 첫 번째 then 메소드의 두 번재 콜백이 실행되어야함
* 첫 번째 then 메서드의 두 번째 콜백이 실행되어야하는데 없기 때문에, then 메소드가 리턴했던 Promise-2 객체는, 이전 Promise 객체와 동일한 상태와 결과를 갖게 됨
* Promise-2 객체는 Promise-1 객체처럼 rejected 상태가 되고, 똑같은 작업 실패 정보를 갖게됨
* rejected 상태가 된 Promise-2의 then 메소드에는 이제 두 번째 콜백이 존재하기 때문에 그 두 번째 콜백이 실행
* 결론 : 아무런 콜백도 실행되지 않는 경우에는 그 이전 Promise 객체의 상태와 결과가 그대로 이어짐

## catch method

```javascript
fetch('url') 
  .then((response) => response.text())  
  .catch((error) => { console.log(error); }) 
  .then((result) => { console.log(result); }); 
```
* catch method는 then method의 첫 번째 인자로 undefined 를 넣은 것과 같음
```javascript
// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A => rejected => 작업 실패 정보 저장
  .then((response) => response.text()) // Promise-B => rejected => 작업 실패 정보 저장
  .then(undefined, (error) => { console.log(error); }) // Promise-C
  .then((result) => { console.log(result); }); // Promise-D
```

```javascript
// Internet Disconnected

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then((response) => response.text()) // Promise-B
  .then(undefined, (error) => { console.log(error); }) // Promise-C
  .then((result) => { console.log(`Quiz: ${result}`); }); // Promise-D 
```
* 자바스크립트에서는 아무 값도 리턴하지 않은 경우에는 undefined를 리턴한 것으로 간주
* catch 메소드가 리턴한 Promise 객체는 fulfilled 상태가 되면서, undefined를 작업 성공 결과로 가짐

![img](/Images/catch.png)


## catch method를 여러 개 쓰는 경우
* catch 메소드는 Promise Chain 가장 마지막에 붙임으로써, 중간에 에러가 발생해서 어느 Promise 객체가 rejected 상태가 되더라도 항상 대처할 수 있도록 해야 함
* catch 메소드를 마지막뿐만 아니라 Promise Chain 중간중간에 쓰는 경우도 존재 => 만약 중간에 에러가 발생해도 catch 메소드가 그 대안을 뒤로 넘겨줄 수 있으면 catch 메소드를 중간에 써도 됨

```javascript
fetch('https://friendbook.com/my/newsfeeds')
  .then((response) => response.json()) // -- A
  .then((result) => { // -- B
    const feeds = result;
    // 피드 데이터 가공...
    return processedFeeds; 
  })
  // **** fetch 함수의 작업이 실패하면 C 줄의 콜백이 실행
  // **** C줄의 콜백은 바로 이렇게 저장해둔 일반 뉴스 데이터를 그대로 가져오는 기능
  // **** 이렇게 되면 인터넷이 안 되는 상황에서도 나만을 위한 최적화된 뉴스피드는 못 보지만 일반적인 세상 뉴스는 사용자가 볼 수 있게 됨
  .catch((error) => { // -- C
    // 미리 저장해둔 일반 뉴스를 보여주기  
    const storedGeneralNews = getStoredGeneralNews();
    return storedGeneralNews;
  })
  .then((result) => { /* 화면에 표시 */ }) // -- D
  .catch((error) => { /* 에러 로깅 */ }); // -- E
  ```

* Promise Chain 중에서 비록 에러가 발생했다고 해도 만약 실패한 작업 대신 다른 방법을 통해서 작업을 정상적으로 끝마칠 수 있는 상황이라면 catch 메소드를 중간에 사용

## 이미 상태가 결정된 Promise 객체 만들기

### 1. fulfilled 상태의 Promise 객체 만들기
```javascript
const p = Promise.resolve('success');
```
* Promise의 resolve라는 메소드를 사용하면 바로 fulfilled 상태의 Promise 객체를 만들 수 있음
* 이렇게 쓰면 fulfilled 상태이면서, 작업 성공 결과로 문자열 'success'를 가진 Promise 객체를 만들 수 있음

### 2. rejected 상태의 Promise 객체 만들기
```javascript
const p = Promise.reject(new Error('fail'));
```
* Promise의 reject라는 메소드를 사용하면 바로 rejected 상태의 Promise 객체를 만들 수 있음
* 이렇게 쓰면 rejected 상태이면서, 작업 실패 정보로, fail이라는 메시지를 가진 Error 객체를 가진 Promise 객체를 만들 수 있음







======= 밑에는 아직 정리중 =========
1. [ api.js ] 파일 생성

```javascript
export async function getReviews() {   // 비동기 함수
  const response = await fetch('url')  // 1. async, await 키워드 => 네트워크 request 를 기다렸다가,
  const body = await response.json();  // 2. response에서 json 함수를 호출하고
  return body; // 3. json 변환이 끝나면 body를 return
}
```

2. 데이터를 받아올 함수 작성
```javascript
import { useState } from 'react';
import ReviewList from './ReviewList';
import { getReviews } from '../api';  // response data를 받아옴

function App() {
  const [order, setOrder] = useState('createdAt');
  // [ 정렬 ] 정렬할 item 초깃값은 빈 배열로 지정
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');

  const handleBestClick = () => setOrder('rating');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  // response data를 받아오는 버튼에 연결되는 함수
  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
```
