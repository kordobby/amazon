# React

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## React basic


### 1. Project Setting
* react 프로젝트 생성
  ```javscript
  nvm --version      // nvm 설치 확인
  ```
* react 개발모드 시작
  ```javscript
  // 현재폴더에 react 설치
  npx create-react-app 폴더이름

  // react 프로젝트 시작
  npm run start  
  ```
* npm Styled Components
  ```javascript
  npm install styled-components
  ```

### 2. 폴더 정리
* 2-1. [public] 폴더 정리
   * index.html 파일 외 기타 파일 삭제 (필요없음)
   * index 파일 코드 정리
    ```html 
      // index.html
      <!DOCTYPE html>
      <html lang="ko">   // 1. 한국 사이트니까 당연히 setting
        <head>
          <meta charset="utf-8" />
          <title>React App</title>    // 2. 귀찮아도 title 설정
        </head>
        <body>
          <div id = "root"></div>    // 3. root id 담긴 div 구조는 남겨야함
        </body>
      </html>

      // 이외엔 싹 다 날려
    ```
 * 2-2. [src] 폴더 정리
   * index.js / App.js 파일 외 기타 파일 삭제 (필요없음)
   ```javascript
    function App() {
      return (
        <div>
          // ...
        </div>
      );
    }

    export default App;
   ```

### 3. Component
* 리액트 컴포넌트는 리액트 엘리먼트를 조금 더 자유롭게 다루기 위한 하나의 문법
* 컴포넌트를 만드는 가장 간단한 방법은 자바스크립트의 함수를 활용하는 것!

* 3-1. 컴포넌트 만들기
   * 컴포넌트를 다루고 보내줄 js 파일 작성 </br>
   ```javascript
    // 만약 Image를 가져올 것이 있다면, 
    import imgname from '파일 경로';

    // 1. 함수형 Component 생성
    function Component() {
            // Component naming은 자유롭게 하면 됨! 단, 첫글자는 대문자!

      return ( );
            // return 이후로 쓰인 값이 App.js 로 컴포넌트에 담아 보내줄 알맹이
    }

  
    export default Component;
    // 2. 컴포넌트를 외부로 보내기
    ```
   * 컴포넌트를 받아올 App.js 파일에 컴포넌트 적용 </br>
    ```javascript
    import Component from './Component';  // 1. 해당 Component 파일 불러오기


    function App() {
      return (
        <div>
          <Component /> 
          <!-- 2. 원하는 부분에 컴포넌트 적용, 적용방법은 태그에 Component 이름을 담아주면 됨! -->
        </div>
      );
    }

    export default App;
    ```

### 4. Props
* Props : 컴포넌트에 지정한 속성을 뜻함 (Properties 의 줄임말)

* 4-1. Component에 속성 부여하기

   * App.js의 Component 에 속성을 작성

  ```javascript
  import Component from './Component';

  function App() {
    return (
      <div>
        <Component color="blue" />
                 <!-- 1. Component에 속성을 지정 -->
      </div>
    );
  }

  export default App;
  ```
   * 부여한 속성을 개발자 도구에서 확인하면 하나의 객체가 생성되어 있으며, 이 객체는 컴포넌트를 정의한 함수의 첫 번째 파라미터로 전달

  ```javascript
  // 2. 속성이 하나의 props 라는 객체로 모이게 됨
   props = { color : "blue" }
  ```
* 4-2. Component에 속성 부여하기
   * Component.js 에서 속성을 받아오기
  ```javascript
  function Component(props) {
    console.log(props)   // { color : "blue" }
  }

  export default Component;
  ```
   * (예시) 비구조화를 이용해 props 의 특정 key : value 끌어오기

      * App.js
      ```javascript

      import HandIcon from './HandIcon';

      function App() {
        return (
          <div>
            <HandIcon value="rock" />
            <HandIcon value="scissor" />
            <HandIcon value="paper" />
          </div>
        );
      }

      export default App;

      /* props : { value : rock, scissor, paper }*/
      ```
     * Component.js

      ```javascript
      import rockImg from './assets/rock.svg';
      import scissorImg from './assets/scissor.svg';
      import paperImg from './assets/paper.svg';

      const IMAGES = {
        rock: rockImg,
        scissor: scissorImg,
        paper: paperImg,
      };

      /* props : { value : rock, scissor, paper } 
      => value 에 접근하기 위해서는 props.value 로 쓸 수는 있겠지만
          destructure를 이용하면 { value } 만 작성해주면 됨
      */
      function HandIcon({ value }) {
        const src = IMAGES[value];   // object명 [keyname] 으로 IMAGES value 찾기
        return <img src={src} alt={value} />;
      }

      export default HandIcon;
      ```

### 5. Prop - Children
* children : props에 있는 특별한 프로퍼티(prop, 프롭) </br>
 : 가공하지 않고 단순히 보여주기만 할 경우에는 children prop을 이용할 수 있음
* JSX 문법으로 컴포넌트를 작성할 때 컴포넌트를 단일 태그가 아니라 여는 태그와 닫는 태그의 형태로 작성하면, 그 안에 작성된 코드가 바로 이 children 값에 담기게 됨
* children을 활용하면 단순히 텍스트만 작성하는 걸 넘어서 컴포넌트 안에 컴포넌트를 작성할 수도 있고, 컴포넌트 안에 복잡한 태그들을 더 작성할 수도 있음

* 4-1. Component에 속성 부여하기

   * (예시 step.1) App.js의 Component 에 속성을 작성
      ```javascript
      function Button({ children }) {
          return <button>{children}</button>;
        }

        export default Button;
        ```
   * (예시 step.2) App.js의 Component 에 속성을 작성
        ```javascript
          import Button from './Button';
          import Dice from './Dice';

          function App() {
            return (
              <div>
                <div>
                  <Button>던지기</Button>
                  <Button>처음부터</Button>
                </div>
                <Dice color="red" num={2} />
              </div>
            );
          }

          export default App;
        ```

### 6. State
* 리액트의 변수 같은 것인데, 이게 바뀔때마다 그 요소만 새로 렌더링해줌
* 리액트에서 state를 만들고, state를 바꾸기 위해서는 일단 useState라는 함수를 활용해야함

* State 사용 기본
   * 첫 번째 변수는 원하는 state의 이름(num)
   * 두 번째 함수에는 state 이름 앞에 set을 붙인 다음 카멜 케이스로 이름을 지어주는 것(setNum)이 일반적
    ```javascript
    import { useState } from 'react';
    // ...
      const [num, setNum] = useState("초깃값");
    // useState() 라는 function이
    // 1. 초깃값을 argument로 받고, 그에 따른 실행 결과로 요소 2개를 가진 배열의 행태로 return
    // 2. 그 배열 = [ "초깃값", setter 함수 ]
    // 3. destructure => [ num, setNum ] =[ "초깃값", setter 함수 ]
    //    "초깃값"의 변수명 => num
    //    setter 함수의 변수명 => setNum
    ```

* 초기값과 setter 함수를 받아왔으니 아래 코드처럼 setter 함수를 활용해서 이벤트 핸들러를 등록해두면, 이벤트가 발생할 때마다 상태가 변하면서 화면이 새로 그려지는 것
  ```javascript
  import { useState } from 'react';
  import Button from './Button';
  import Dice from './Dice';

  function App() {
    const [num, setNum] = useState(1);

    const handleRollClick = () => {
      setNum(3); // num state를 3으로 변경!
    //함수명(값변경)
    };

    const handleClearClick = () => {
      setNum(1); // num state를 1로 변경!
    };

    return (
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
        <Dice color="red" num={num} />
      </div>
    );
  }

  export default App;
  ```

### 7. 참조형 State
#### ⭐  들어가기 전에, useState 가 받아오는 [ "초깃값", setter 함수 ] 배열의 특성 이해하기!

```javascript
 * 참조형 데이터 중에서, 
 객체에 할당 된 변수를 함수에 인자로 전달하면 컴퓨터는 그 매개변수 이름을 해당 객체가 있는 메모리의 공간을 가리키는 것으로 해석
```
* 참고 : https://velog.io/@minj9_6/JavaScript%EC%9D%98-%EA%B8%B0%EB%B3%B8%ED%98%95primitive-Data-type%EA%B3%BC-%EC%B0%B8%EC%A1%B0%ED%98%95-%EB%8D%B0%EC%9D%B4%ED%84%B0Reference-Data-Type-%ED%83%80%EC%9E%85%EC%9D%98-%EC%A2%85%EB%A5%98

#### ⭐  이 특성으로 인해 초깃값을 직접적으로 변경이 불가능해짐
 * (예시) 배열 값을 가진 gameHistory에 push 메소드를 이용해서 배열의 값을 변경한 다음, 변경된 배열을 setter 함수로 state를 변경하려고 하면 코드가 제대로 동작하지 않음
    ```javascript
    // ... 

      const [gameHistory, setGameHistory] = useState([]);

      const handleRollClick = () => {
        const nextNum = random(6); 
        gameHistory.push(nextNum);
        setGameHistory(gameHistory); // state가 제대로 변경되지 않는다!
      };

    // ...
    ```
* 왜 Why??????????
    * gameHistory state는 배열 값 자체를 가지고 있는 게 아니라 그 배열의 주솟값을 참조하고 있는 는 것 => 그렇기 때문에 push 메소드로 배열 안에 요소를 변경했다고 하더라도 결과적으로 참조하는 배열의 주솟값은 변경된 것이 아님
   * 리액트 입장에서는 gameHistory state가 참조하는 주솟값은 여전히 똑같기 때문에 상태(state)가 바뀌었다고 판단하지 않는 것
* 해결방법 ?
   * 참조형 state를 활용할 때는 반드시 새로운 참조형 값을 만들어 state를 변경해야함
   * 가장 간단한 방법은 아래 코드와 같이 Spread 문법(...) 을 활용하는 것

  ```javascript
  // ... 

    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () => {
      const nextNum = random(6);
      setGameHistory([...gameHistory, nextNum]); // state가 제대로 변경된다!
    };

  // ...
  ```

* spread 개념</br>
https://github.com/kordobby/amazon/blob/main/JS%20Grammar/ES6/%236_rest_and_spread.md