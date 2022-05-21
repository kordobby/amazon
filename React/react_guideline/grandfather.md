# 컴포넌트 정복하기

## 컴포넌트를 엮어서 props 를 자유롭게 보내보자


### 1. Plan
```
# 고조할아버지 - 증조할아버지 - 할아버지 - 아빠 - 아들의 컴포넌트를 만들고,
  이들의 props를 자유롭게 꺼내서 사용해보자
  
1. 족보에 따라 컴포넌트를 줄줄이 연결
2-1. age : state로 데이터배열 만들어서 props로 각 컴포넌트 마지막까지 전달
2-2. family : family obj를 만들어서 props로 각 컴포넌트 마지막까지 전달
3. state 만든 곳에서 데이터하는 버튼으로 state 업데이트하면 모든 컴포넌트에 값 업데이트
```

### 2. Component 만들기

#### 2-1. 아들(손자) 만들기
```javascript
const Son = () => {
  return (
      <>
        ...
      </>
  );
}

export default Son
```

#### 2-2. 상위 컴포넌트 (아버지 ~ 고조할아버지) 만들기
  * 만드는 방법은 각각 똑같음!
     * 자식 컴포넌트로 가져올 것을 import 해서, 함수 내부에 작성해주면 이어짐
```javascript
import Son from './Son';  // 자식 컴포넌트 import 

const Father = () => {
  return (
      <>
      <!-- 2. 한 단계 아래의 하위 컴포넌트 작성 -->
      <Son/> 
      </>
  );
}

export default Father
```
#### 2-3. 최상위 컴포넌트를 App.js에 가져오기
```javascript
import GreatGreatGrandFather from "./GreatGreatGrandFather";
// 1. 최상위 컴포넌트 import

function App() {

  return (
    <div>
      <!-- 2. 최상위 컴포넌트를 작성하면, 줄줄이 밑으로 이어붙을 것 -->
      <GreatGreatGrandFather />
    </div>
  );
}

export default App;
```


### 3. props 생성
#### 3-1. App.js에 최상위 Component에 담아줄 props 작성
```javascript
import { useState } from "react";
import GreatGreatGrandFather from "./GreatGreatGrandFather";


function App() {
  let [age, setAge] = useState([100, 70, 40, 20, 5]);
  // age : state로 데이터배열 생성
  let family = {
    gggf : "Dobby",
    ggf : "Harry",
    gf : "Nico",
    father : "Ted",
    son : "Nick"
  };
  // family : obj 생성

  return (
    <div>
      <GreatGreatGrandFather age={age} family = {family}/>
      <!-- age와 family 데이터를 GreatGreatGrandFather 컴포넌트의 props에 담음 -->
    </div>
  );
}

export default App;
```

#### 3-2. props 제대로 작성되었는지 개발자 도구로 확인
![img](/Images/componentimg.png)

### 4. props를 유전시켜보자
#### 4-1. props 구조 다시 확인해보기
```javascript
 props = { age : [100, 70, 40, 20, 5],
           family : { gggf : "Dobby",
                      ggf : "Harry",
                      gf : "Nico",
                      father : "Ted",
                      son : "Nick" }
 }
```
#### 4-2. 최상위 Component에서 props 가져오기
   * 넘겨받은 props를 해당 컴포넌트에서 원하는 값을 뽑아내 사용하면 됨
   * 넘겨받은 props를 하위 Component에 다시 props 형식으로 내려보내줌
```javascript
import GreatGrandFather from './GreatGrandFather';

const GreatGreatGrandFather = ({age, family}) => {
  return (
      <>
      <!-- 1. 해당 Component에서 필요한 props의 value 가져와서 사용 -->
      I AM GGGFATHER, {family.gggf} = AGE: {age[0]} <br/>
      <!-- 2. 한 단계 아래 Component에 props 전달 -->
      <GreatGrandFather age={age} family = {family}/>
      </>
  );
}

export default GreatGreatGrandFather
```

#### 4-3. 하위 Component에서 props 가져오기
  * 이후로 방법은 계속위와 같으며, 해당 Component에서 필요한 값을 배열 포지션값이나 key 값을 활용해 뽑아서 쓰면 됨
```javascript
import GrandFather from './GrandFather';

const GreatGrandFather = ({age, family}) => {
  return (
      <>
      I AM GGFATHER, {family.ggf} = AGE: {age[1]} <br/>
      <GrandFather age={age}  family = {family}/> 
      </>
  );
}
export default GreatGrandFather
```

### 5. State 연습
```javascript
import { useState } from "react";
import GreatGreatGrandFather from "./GreatGreatGrandFather";


function App() {
  let [age, setAge] = useState([100, 70, 40, 20, 5]);
  let family = {
    gggf : "Dobby",
    ggf : "Harry",
    gf : "Nico",
    father : "Ted",
    son : "Nick"
  };

  const ButtonHandler = () => {
    let newArr = [...age];
    // 1. age 배열을 이용해 newArr 배열을 생성
    newArr = newArr.map((value)=>(value = Math.floor(Math.random() * 100)));
    // 2. 각 배열요소마다 새로운 랜덤 값을 부여하도록 함수 작성
 setAge(newArr);
    // 3. setAge 함수를 통해 age 배열의 값을 변경
  }

  return (
    <div>
      <GreatGreatGrandFather age={age} family = {family}/>
      <!-- ButtonHandler 함수 적용 -->
      <button onClick={ButtonHandler}>랜덤으로 나이를 준다</button>
    </div>
  );
}


export default App;
```

