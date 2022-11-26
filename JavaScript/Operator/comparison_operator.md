# 비교 연산자

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 비교 연산자

### === (일치)

- 두 값이 타입까지 완전히 일치하는지 확인

```javascript
3 === "3"; // false
3 === 3; // true
```

### == (동등)

- 타입은 검사하지 않음

```javascript
3 == "3"; // true
false == 0; // true
null == undefined; // true
```

### != (부등)

- 피연산자가 서로 다르면 true를 반환

```javascript
let three = 3;
three != 3; // false
three != 4; // true
```

### !== (불일치)

- 피연산자의 값 또는 타입이 서로 다를 경우 true 반환

```javascript
let three = 3;
three != "3"; // true
three != 3; // false
```

### > (큼)

- 좌측 피연산자가 우측 피연산자보다 크면 true 반환

### < (작음)

- 좌측 피연산차가 우측 피연산자보다 작으면 true 반환

```javascript
2 < 1; // true
"2" < 1; // true
2 < "1"; // true
```

### <= (작거나 같음)

- 왼쪽 피연산자가 오른쪽 피연산자보다 같거나 작으면 true 반환
