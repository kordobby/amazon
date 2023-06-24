# TS for JavaSCript Programmers

### Types by Inference

```javascript
let helloWorld = "Hello World";
// let helloWorld: string
```

- 객체를 아래와 같이 생성한다고 했을 때,

```javascript
const user = {
  name: "Hayes",
  id: 0,
};
```

- [1] `interface` 선언을 사용해 객체의 타입 설정

```javascript
interface User {
  name: string;
  id: number;
}
```

- [2] `interface`와 같은 구문을 사용해 JS 객체가 새 객체의 모양을 따르도록 선언 `:TypeName`

```javascript
const user: User = {
  name: "Hayes",
  id: 0,
};
```

```javascript
interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Hayes",
  id: 0,
};
```

```javascript
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
```

- 인터페이스를 사용해 매개변수에 주석을 달고 함수에 값을 반환

```javascript
function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  //...
}
```

```javascript
type MyBool = true | false;
```

```javascript
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

```javascript
function getLength(obj: string | string[]) {
  return obj.length;
}
```

| Type      | Predicate                        |
| :-------- | :------------------------------- |
| string    | typeof s === "string"            |
| number    | typeof n === "number"            |
| boolean   | typeof b === "boolean"           |
| undefined | typeof undefined === "undefined" |
| function  | typeof f === "function"          |
| array     | Array.isArray(a)                 |

```javascript
function wrapIanArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
    // (parameter) obj: string
  }
  return obj;
}
```
