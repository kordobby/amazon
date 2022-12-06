# Array Rendering

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## data array for example
```javascript
[
  {
    "id": 1,
    "name": "이상해씨",
    "types": [
      "풀",
      "독"
    ]
  },
  {
    "id": 2,
    "name": "이상해풀",
    "types": [
      "풀",
      "독"
    ]
  }
]
  ````



## 1. `map` 으로 렌더링하기
* 배열 메소드 `map` 에서 콜백 함수의 리턴 값으로 리액트 엘리먼트를 리턴

```javascript
  function Pokemon({ item }) {
    return (
      <div> No.{item.id} {item.name} </div>
    );
  }

  function App() {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Pokemon item={item} />
          </li>))}
      </ul>
    );
  }
  
  export default App;
 ```

 * 참고로 반드시 JSX의 중괄호 안에서 map 함수를 써야 하는 것은 아님
   * 아래처럼 `renderedItems` 라는 변수에 `map`의 결과를 지정해도 똑같이 렌더링 
   * `renderedItems` 의 계산된 값이 결국 리액트 엘리먼트의 배열이기 때문

```javascript
  function App() {
    const renderedItems = items.map((item) => (
      <li key={item.id}>
        <Pokemon item={item} />
      </li>
    ));

    return (
      <ul>
        {renderedItems}
      </ul>
    );
  }
  
  export default App;
```

## 2. `sort` 로 정렬하기
* 배열 메소드의 `sort` 메소드를 사용하면 배열을 정렬
* 아래 코드는 id 순서대로 / 반대로 정렬하는 예시
```javascript
  import { useState } from 'react';
  import items from './pokemons';

  function Pokemon({ item }) {
    return (
      <div>
        No.{item.id} {item.name}
      </div>
    );
  }

  function App() {
    const [direction, setDirection] = useState(1);

    // 도감 순서대로 가도록
    const handleAscClick = () => setDirection(1);
    // 도감 반대로 가도록
    const handleDescClick = () => setDirection(-1);
    // 정렬 적용
    const sortedItems = items.sort((a, b) => direction * (a.id - b.id));

    return (
      <div>
        <div>
          <button onClick={handleAscClick}>도감번호 순서대로</button>
          <button onClick={handleDescClick}>도감번호 반대로</button>
        </div>
        <ul>
          { /* 받아온 데이터를 map을 이용해 정렬 */ }
          {sortedItems.map((item) => (
            <li key={item.id}>
              <Pokemon item={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default App;
```

## 3. `filter` 로 삭제하기
* 배열 메소드 중 `filter` 와 배열형 state를 활용하면 삭제 기능을 간단히 구현
```javascript
import { useState } from 'react';
import mockItems from './pokemons';

function Pokemon({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);

  return (
    <div>
       No.{item.id} {item.name}
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

function App() {
  const [items, setItems] = useState(mockItems);

  const handleDelete = (id) => {
     // item.id가 파라미터로 일치하지 않은 원소만 추출해서 새로운 배열을 만듬
     // = item.id 가 id인 것을 제거함 
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Pokemon item={item} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

export default App;
```

## 4. 반드시 key 를 내려주자
* 각 요소를 렌더링 할 때는 key Prop을 내려줘야 함 => 가장 바깥쪽에 있는 (최상위) 태그에다가 key Prop을 지정
* 각 데이터를 구분할 수 있는 고유한 값이면 무엇이든 key 로 활용해도 상관없음

```javascript
import items from './pokemons';

function Pokemon({ item }) {
  return (
    <div>
      No.{item.id} {item.name}
    </div>
  );
}

function App() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <Pokemon item={item} />
        </li>
      ))}
    </ul>
  );
}

export default App;
```
