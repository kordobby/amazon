# useEffect

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## useEffect
* useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정

* 화면이 처음 떴을때 실행
   * deps에 [] 빈배열을 넣을 떄
   * life cycle중 componentDidmount처럼 실행
* 화면이 사라질때 실행(clean up함수)
   * componentWillUnmount처럼 실행
    ```javascript
      re-render => 이전 effect clean-up => effect
    ```
* deps에 넣은 파라미터값이 업데이트 됬을때 실행
   * componentDidUpdate처럼 실행


## useEffect - 처음 한 번만 실행하기
* 컴포넌트가 처음 렌더링 되고나면 콜백함수를 기억했다가 실행하고 이후로는 실행하지 않음
```javascript
useEffect(() => {
  // 실행할 콜백함수
}, []);
```


## useEffect - 값이 바뀔 때마다 실행하기
* 컴포넌트가 처음 렌더링 되고 나면 리액트가 콜백 함수를 기억해뒀다가 실행
* 그 이후로 렌더링 할 때는 디펜던시 리스트에 있는 값들을 확인하고 하나라도 바뀌면  콜백 함수를 기억해뒀다가 실행
```javascript
useEffect(() => {
  // 실행할 콜백함수
}, [dep1, dep2, dep3, ...]);
```

## useEffect - 실험으로 확인하기
```javascript
import { useEffect, useState } from 'react';

function App() {
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(1);

  const handleFirstClick = () => setFirst(first + 1);

  const handleSecondClick = () => setSecond(second + 1);

  useEffect(() => {
    console.log('렌더링 이후', first, second);
  }, []);

  console.log('렌더링', first, second);

  return (
    <div>
      <h1>
        {first}, {second}
      </h1>
      <button onClick={handleFirstClick}>First</button>
      <button onClick={handleSecondClick}>Second</button>
    </div>
  );
}

export default App;
```

```javascript
useEffect(() => {
    // set our variable to true
    let isApiSubscribed = true;
    axios.get(API).then((response) => {
        if (isApiSubscribed) {
            // handle success
        }
    });
    return () => {
        // cancel the subscription
        isApiSubscribed = false;
    };
}, []);
```
