# 비동기 실행 관련 문법 총정리

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## 비동기 실행의 정의
* 특정 작업이 시작되고, 그 작업이 모두 완료되기 전에 바로 다음 코드가 실행되는 방식의 실행, 나머지 작업은 나중에 콜백을 통해 수행되는 방식의 실행
* 특정 처리를 나중으로 미루는 방식의 실행
* 콜백을 등록해두고, 추후에 특정 조건이 만족되면 그 콜백으로 나머지 작업을 수행하는 방식의 실행
### 결론 : 특정 처리를 담당하는 존재(콜백)의 실행을 나중으로 미룬다는 것 !

## 비동기 실행 관련 문법 3가지!
1. 파라미터로 바로 콜백을 전달하는 형태의 전통적인 비동기 실행 함수
2. Promise
3. async/await

### 1. 파라미터로 바로 콜백을 전달하는 형태의 전통적인 비동기 실행 함수
* setTimeout, setInterval 함수, DOM 객체의 addEventListener 메소드 등이 여기에 해당
```javascript
setTimeout(() => {
  console.log('asynchronously executed');
}, 2000);

button.addEventListener('click', (event) => { console.log('You Clicked'); });
```
* 여러 비동기 작업의 순차적인(sequential) 처리가 필요한 경우에 이런 함수들로 코드를 작성
```javascript
fs.readFile('file1.txt', 'utf8', (error1, data1) => {
  if (error1) {
    console.log(error1);
  } else {
    console.log(data1);
    fs.readFile('file2.txt', 'utf8', (error2, data2) => {
      if (error2) {
        console.log(error2);
      } else {
        console.log(data2);
        fs.readFile('file3.txt', 'utf8', (error3, data3) => {
          if (error3) {
            console.log(error3);
          } else {
            console.log(data3);
          }
        });
      }
    });
  }
});
```
* 위와 같이 코드의 가독성이 급격하게 떨어지는 콜백 헬(callback hell) 문제가 발생할 가능성이 높음

## 2. Promise
```javascript
fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); })
  .catch((error) => { console.log(error); })
  .finally(() => { console.log('exit'); });
  ```

  * Promise 객체를 사용하면 콜백 헬 문제를 방지하면서, 여러 비동기 작업을 순차적으로 처리할 수 있음
  * 기존의 1.과 같은 전통적인 비동기 실행 함수들 중에서도 그 콜백이 단 한 번만 실행되는 함수들은 아래와 같이 Promisify해서 콜백 헬의 가능성을 없애고, Promise Chain 안에서 그 콜백의 리턴값을 사용할 수 있음
  
```javascript
function readFile_promisified(filename) {
  const p = new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (error, data) => {
      if (error) {
        reject(error); // 에러 발생 시 -> rejected
      } else {
        resolve(data); // 파일 내용 읽기 완료 -> fulfilled
      }
    });
  });
  return p;
}
```

### 3. async / await 구문

```javascript
async function fetchAndPrint() {
  try {
    const response = await fetch('https://www.google.www');
    const result = await response.text();
    console.log(result);
  } catch(error) {
    console.log(error);
  } finally {
    console.log('exit');
  }
}

fetchAndPrint();
```

* Promise 객체를 다루는 코드(Promise Chaining 코드 등)를 사람들이 좀더 익숙하게 느끼는 동기 실행 스타일의 코드로 작성할 수 있게 해주는 Syntactic sugar
* async 함수 안의 내용이 순차적으로 실행되다가도, await 문을 만나면 await 바로 뒤에 붙은 코드를 실행해두고, 일단은 함수 바깥으로 코드 흐름이 바뀜
* Promise 기반의 코드들은 가능한 경우에 모두 async/await 구문으로 전환해서 작성하는 게 더 좋음
* async/await(ES2017, 2017년 도입)은 Promise(ES6, 2015년 도입)에 비해 보다 더 최근에 자바스크립트 표준에 도입된 문법
* 사실 비동기 실행에 관해서 중요한 것은 어느 문법의 코드를 작성하든 그 개념을 제대로 이해하고 코드를 작성해야 한다는 점이 중요!
* 콜백 헬 문제를 해결하기 위해 Promise 객체가 등장했고, Promise를 좀 더 편하게 다루기 위해서 async/await 구문이 등장
* 각 문법을 제대로 이해하지 못하고 코드를 작성한다면, 그것은 또다서 Promise hell, async/await hell이 될 뿐



