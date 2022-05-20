# GENERATORS AND MAPS
<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 11.1 Symbols
### Symbol
```javascript
const hello = Symbol();
const bye = Symbol();

hello === bye // false
```

### Uniqueness
```javascript
const hello = Symbol("hello"); // "hello" 는 Symbol 밖으로 빼낼 수 없음, value 자체를 사용할 수 없음 
const bye = Symbol("hello");

hello // Symbol(hello)
hello === bye // false
```
```javascript
const superBig = {
  [Symbol("yoon")] : {
    sexy : true
  },
  [Symbol("yoon")] : {
    sexy : true
  }
};

superBig // { Symbol(yoon), Symbol(yoon)}
```
* Object에 나만의 매우 고유한 부분을 가질 수 있게함
* 누군가 바꾸거나 반복할 수 없음

### Privacy
```javascript
const superBig = {
  [Symbol("yoon")] : {
    sexy : true
  },
  [Symbol("yoon")] : {
    sexy : true
  },
  hello : "bye"
};

Object.keys(superBig) // ["hello"] => Symbol은 고려되지 않음 => property에 privacy가 생긴 것
```

* 초반 symbol()의 아이디어는 JS에서 privacy를 만드는 것이었는데, 그렇게 private 하지는 않음
* 라이브러리 만드는 사람들이나 쓰지 않을까요

```javascript
const superBig = {
  [Symbol("yoon")] : {
    sexy : true
  },
  [Symbol("yoon")] : {
    sexy : true
  },
  hello : "bye"
};

Object.getOwnPropertySymbols(superBig) // [Symbol(yoon), Symbol(yoon)]
// Super Private 한건 아니지?
```

## 11.2 Sets
### Sets
* 우리는 obj에 property가 있는지, 없는지, 만들어주고, 지워줄 수도 있음
=> Not so sexy, TOO HIGH LEVEL

```javascript
const user = {
  age: 12,
  name : "yoon"
};

user.onMore = true ; // 하나를 추가하고 싶을 때
user.name = null;
```
* Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있
* 이들은 unique 해서 똑같은 value를 저장할 수는 없음

```javascript
Set() // Creates a new obj
```

```javascript
const sexySet = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 8 ])
sexySet // Set(8) {1, 2, 3, 4, 5, 6, 7, 8}

sexySet.has(9) // false
sextSet.has(1) // true
sexySet.delete(1) // true
sexySet // {2, 3, 4, 5, 6 ...}
sexySet.claer()
sexySet // {}
sexySet.add("Hi")
sexySet.add([1, 2, 3, 4, 5])
sexySet // Set(2) {"Hi", [1, 2, 3, 4, 5]}
```
```javascript
const sexySet = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 8 ])
sexySet // Set(8) {1, 2, 3, 4, 5, 6, 7, 8}
sexySet.size // 8
sexySet.keys() // SetIterator {1, 2, 3, 4, 5, 6, 7, 8}
```

