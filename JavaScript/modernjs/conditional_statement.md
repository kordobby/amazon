# 조건문 더 스마트하게 쓰기

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 특정 값이 여러 값중 하나인지 확인해야 할 때

* 특정 값이 여러 값 중 하나인지 확인을 해야 하는 상황이 생겼을 때,
```javascript
function isAnimal(text) {
  return (
    text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
  );
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```
* 배열을 만들고 배열의 includes 함수를 사용한다면?
```javascript
function isAnimal(name) {
  const animals = ['고양이', '개', '거북이', '너구리'];
  return animals.includes(name);
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```
*  animals 배열을 선언하는 것도 생략하고, 화살표 함수로 작성할 수도 있음
```javascript
const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```

## 값에 따라 다른 결과물을 반환 해야 할 때
* 주어진 값에 따라 다른 결과물을 반환해야 할 때 사용 할 수 있는 유용한 팁

```javascript
function getSound(animal) {
  if (animal === '개') return '멍멍!';
  if (animal === '고양이') return '야옹~';
  if (animal === '참새') return '짹짹';
  if (animal === '비둘기') return '구구 구 구';
  return '...?';
}
* if 문의 코드 블록이 한줄짜리라면 { } 를 생략 할 수도 있음
* switch case 문을 사용
console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구
```

```javascript
function getSound(animal) {
  switch (animal) {
    case '개':
      return '멍멍!';
    case '고양이':
      return '야옹~';
    case '참새':
      return '짹짹';
    case '비둘기':
      return '구구 구 구';
    default:
      return '...?';
  }
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구
```
* 이 코드를 더욱 깔끔하게 작성하는 방법
   * * 특정 값에 따라 반환해야 하는 값이 다른 조건이 여러가지 있을 때는 객체를 활용하면 좋음
```javascript
function getSound(animal) {
  const sounds = {
    개: '멍멍!',
    고양이: '야옹~',
    참새: '짹짹',
    비둘기: '구구 구 구'
  };
  return sounds[animal] || '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구
```
* 값에 따라 실행해야 하는 코드 구문이 다를 때?
```javascript
function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍');
    },
    고양이() {
      console.log('고양이');
    },
    비둘기() {
      console.log('구구 구 구');
    }
  };
  if (!tasks[animal]) {
    console.log('...?');
    return;
  }
  tasks[animal]();
}

makeSound('개');
makeSound('비둘기');
```
