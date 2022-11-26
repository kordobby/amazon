# JSON 데이터 다루기

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## JSON
* JavaScript Object Notation
* 정보를 교환하기 위해 만들어진 data 포맷으로, JS 언어의 문법을 빌려서 만들어진 데이터 포맷
* {} 안에서 각각의 property 이름과 값을 적는 방식이 JS에서 객체를 나타내는 표기법과 같으며, 이를 다시 [] 로 묶어서 배열로 나타냄


## Serialization
* 직렬화
* 자바스크립트 객체를 string 타입의 JSON 데이터로 변환하는 것
* 자바스크립트 기본 내장 객체의 stringify 메소드 사용

## Deserialization
* 역직렬화
* string 타입의 JSON 데이터를 자바스크립트 객체로 변환하는 것
* JSON 객체의 parse 메소드

## 1. string 타입의 JSON 데이터 vs 자바스크립트 객체

```javascript
const obj = { x: 1, y: 2 };
const jsonString = JSON.stringify(obj);
```
*  x 프로퍼티와 y 프로퍼티를 가진 obj라는 객체를 Serialize
* 이 코드를 실행하고 obj와 jsonString을 순서대로 조회하면
```javascript
const obj = { x: 1, y: 2 };
const jsonString = JSON.stringify(obj);

obj 
// => { x: 1, y: 2 }     * javascript object
jsonString
// "{ "x" : 1, "y" : 2 }"     * string type
```
![img](/Images/jsondata.png)

* obj 객체는 자바스크립트 객체로서 우리가 직접 정의하지는 않았지만, 기본으로 내장하는 프로퍼티들이 존재


```javascript
const jsonString = '{"x": 1, "y": 2}';
const obj = JSON.parse(jsonString);

console.log(obj.y);  // 2
```
<br/>
<br/>
<br/>

## 2. text 메소드 말고 json 메소드도 있음

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { const users = JSON.parse(result); });
```
* 위 코드 내용
   * 리스폰스의 내용을 추출하기 위해 response.text()를 호출
   * 다음에 그 리턴값인 JSON 데이터를 Deserialize(JSON.parse(result))해서 생성한 객체를 users에 할당

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => { const users = result; });
```
* response 객체의 text 메소드 대신 json이라는 메소드를 호출하면 리스폰스의 내용이 JSON 데이터에 해당하는 경우, 바로 Deserialization까지 수행
* 리스폰스의 내용이 JSON 데이터로 미리 약속된 경우에는 response 객체의 text 메소드 대신 json 메소드를 사용해서 Deserialization까지 한 번에 수행


