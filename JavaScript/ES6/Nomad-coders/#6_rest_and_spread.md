# Rest and Spread
<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 6.0 Introduction to Spread
### Spread
* spread는 기본적으로 변수를 가져와서 풀어 헤치고 전개하는 것
```javascript
 ...
```

### Unpack
* 배열 안에 있는 요소를 얻거나 합쳐보자
```javascript
const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];

console.log(friends);  // [1, 2, 3, 4]
console.log(...frends); // 1 2 3 4
// array 안에 있는 요소(element)들을 원할 때

// 두 개의 배열의 요소를 합치고 싶을 때 ?
console.log(friends + famlily); // 1,2,3,4a,b,c
console.log(friends, family); // [ 1, 2, 3, 4 ] [ 'a', 'b', 'c' ]

// How to Merge Array
console.log(...friends, ...family); // 1 2 3 4 a b c
console.log([...friends, ...family]); // [ 1, 2, 3, 4, "a", "b", "c" ]
```

### Merging objects
```javascript
const sexy = {
  name: "dobby",
  age: 20
};

const hello = {
  sexy: true,
  hello: "hello"
};

console.log({...sexy, ...hello}); // {name:"dobby", age=20, sexy = true, hello = "hello"}
```
```javascript
const sexy = {
  name: "dobby",
  age: 20
};

const hello = {
  name: "dobby",  // 중복되는 property가 있다면?
  sexy: true,
  hello: "hello"
};

console.log({...sexy, ...hello}); // {name:"dobby", age=20, sexy = true, hello = "hello"}
```

## 6.2 Spread Applications
### ADD
* 기존 데이터를 복사해서 새로운 데이터를 만들고 싶을 때 사용할 수 있는 방법
### ADD - array
```javascript
const friends = ["dobby", "yoon", "harry"];

const newFriends = [...friends, "ron"];
// const newFriends = ["ron", ...friends];  
console.log(newFriends); // ["dobby", "yoon", "harry", "ron"]
// 이건 friends 에 "ron" 을 추가한 것이 아니라, nesFriends에 추가한 것
```
### ADD - object (adding properties)
```javascript
const yoon = {
  username: "dobby"
};

console.log({ ...yoon, password: 123 }); // {username : "dobby", password : 123}
```

### 좀 더 복잡한 구성
* example
```javascript
const first = ["Mon", "Tue", "Wed"];

const weekend = ["Sat", "Sun"];

const fullWeek = [...first, "Thu", "Fri", ...weeked];

console.log(fullWeek); // ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
```
### conditional (조건부)
* 어떻게하면 obj에 property를 조건부로 추가할 수 있을까?
```javascript
const lastName = prompt("Last Name");
 // prompt() 사용자에게 입력을 요구하는 창이 뜨게하는 함수
const user = {
  username: "dobby",
  age: 20,
  lastName : lastName !== "" ? lastName : undefined
  // prompt 창에 아무것도 작성하지 않으면 lastName : undefined
};

console.log(user); // {username : "dobby", age : 20, lastName = undefined}
```
* lastName이 없을 때 key도 안보이게 하려면?
```javascript
const lastName = prompt("Last Name");

const user = {
  username: "dobby",
  age: 20,
  // 입력값이 없으면 index도 숨어있어라
  ...(lastName !== "" && { lastName })
  // lastName 이 빈 문자열이 아니면서 lastName의 value도 없을 때
  // ... 가 조건의 결과를 전개함 
};

console.log(user); // {username : "dobby", age : 20}
```

## 6.3 Intro to Rest Parameters
* parameter (매개변수) : 우리가 함수에게 전달하는 인자들을 뜻함
* 끝도 없는 parameter를 전달받는 함수 만들기

### Rest
* (recap) spread는 변수를 전개시키는 것, unpacking
* rest는 모든 값을 변수로 축소(contract) 시켜주는 것

### Contract
```javascript
const infiniteArgs = (...kimchi) => console.log(kimchi);
                                    // ["1", 2, true, "lalala", [1, 2, 3, 4]]
                    // 모든 인자들을 kimchi 에 담아주자 (...kimchi 로 축소)
infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4]);
```
### …rest 를 이용해 한개만 픽업하기
```javascript
const bestFriendMaker = () => console.log(``)

bestFriendMaker("potato", "tomato", "ron", "harry");
```
1. 첫번째 Best friend를 데려오고 싶다면?
```javascript
const bestFriendMaker = (firstOne, ... rest) => { 
                      // * firstOne 도 바꿔도 됨!
                      // rest는 마음대로 potato 라고 써도 괜찮음
  console.log(`My best friend is ${firstOne}`); // My best friend is potato
  console.log(rest); // ["tomato", "ron", "harry" ]
};
bestFriendMaker("potato", "tomato", "ron", "harry");
```

## Recap
### spread : 변수를 확장시킴
### rest : 변수를 축소시킴 
</br>
</br>
<hr/>

## 6.3 Rest + Spread + Restructure Magic
* 패스워드를 제거하고 싶을때

### basic
```javascript
const user = {
  name: "dobby",
  age: 20,
  password: 12345
};

// password를 없애고 싶다면?
user["password"] = null; 

console.log(user); // name = "dobby", age = 20, password = null
```

### let's make sexier
### deleting & cleaning object
```javascript
const user = {
  name: "dobby",
  age: 20,
  password: 12345
};
// killPassword 라는 함수를 만들고
// password 와 rest 값을 가져오고 rest만 return
// 아래 케이스는 destructuring과 rest를 같이 사용한 예
const killPassword = ({ password, ...rest }) => rest;

const cleanUser = killPassword(user);

consolelog(killPassword(user)); // {name : "dobby", age : 20}
console.log(cleanUser); // {name : "dobby", age : 20}
```
 
### setting default - 기본값 설정하기
```javascript
// destructuring과 rest를 같이 사용할 것
const user = {
  name: "dobby",
  age: 20,
  password: 12345
};

const setDefault = ({country = "KR", ...rest}) => ({country, ...rest});
                // 1. destructuring을 이용해서 country 값을 가져왔고,
                // 2. country가 없다면 기본값으로 "KR"이라고 설정
                                     // 3. rest 를 이용해서 입력인자의 나머지 값들을 하나로 축소
                                                  // 4. country와 함께 나머지 값을 담고있는 rest 변수를 전개해 return
console.log(setDefault(user)) // {country: "KR", name: "dobby", age: 20, password: 12345}
```

### renaming property - 속성명 바꾸기
```javascript
const user = {
  name: "dobby",
  age: 20,
  password: 12345
};

const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });
                 // 1. destructuring을 사용해서 변수를 rename 해주고
                           // 2. rest 구문을 사용하고 
                                                    // 3. spread 구문 사용
console.log(rename(user));
// {name: "dobby", age:20, password: 12345}
```

## 결론 : destructuring, rest, spread는 ES6을 SEXY 하게 만들어줌