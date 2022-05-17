# React - Styled Components #01

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

https://devkevin0408.tistory.com/156

## Styled Components 
### 장점
  * 페이지에서 렌더링되는 요소에 맞춰 자동으로 해당 스타일만 삽입
    </br>-> 때마다 필요한 스타일만 로드!
  * 스타일에 대한 고유 클래스명을 생성하며 중복이나 오타 걱정이 없음
  * 더 이상 사용되지 않는 CSS를 쉽게 삭제할 수 있음
    </br>-> 모든 스타일은 특정 요소와 연결되어 있기 때문에 해당 요소가 삭제되면 스타일도 삭제됨
  * 동적 스타일링이 편해짐
  </br> -> 이 props가 있으면 A, 없다면 B 와 같이 직관적으로 개별 스타일링이 가느ㅏㅇ함

  ```react
  npm install styled-components
  ```

### TIP
* styled-components 내에서 emmet을 쓰고 싶다면 vscode-styled-components를 설치

## Styled Components 문법
* 일단 import를 해주고 아래 코드 처럼 함수 밖에서 컴포넌트처러 만들어 쓸 수 있음
* 문법 순서는
    ```javascript
    const (컴포넌트 명) = import 할 때 쓴 이름.tag 이름 ``
    ```

    ```javascript
  import { useEffect, useRef, useState } from "react";
  import styled from 'styled-components'

  const App = () => {

    return (
      <Container>
        <h1>THIS IS TITLE</h1>
      // props를 부를땐 이렇게 부른다
        <Button danger>BUTTON</Button>
        <Button >BUTTON</Button>
      </Container>
    );
  }


  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f6e58d
    // 이 태그 안에있는 다른 태그에 접근
    h1{
      color: #3B3B98
    }
  `;


  const Button = styled.button`
    min-width: 120px;
    border-radius:50px;
    padding: 5px;
    color: white;
    cursor: pointer;
    -webkit-appearance: none;
    // Props 사용은 아래와 같이했다
    background-color: ${props => props.danger? "#e74c3c" : "#2ecc71"}
  `;


  export default App;
  ```

### Extend
* 만약 원래 정의한 컴포넌트의 CSS를 SASS 처럼 extend 하고 싶으면 아래처럼 정의
```javascript
// () 이 괄호안에 extend할 컴포넌트 이름
const ExtendButton = styled(Button)`
  // props 한개만 쓰면 이렇게 쓸 수 있다.
  background-color: ${props => props.extended || "#45aaf2"};
`;

//대신 컴포넌트 이름도 변경됨
<ExtendButton>BUTTON</ExtendButton>
```
* 만약 스타일만 가져오는데 태그를 변경하고 싶을 때는 'as' 속성을 이용
* 대신 as를 쓰면 원 태그의 속성은 없어짐
```javascript
<ExtendButton as="a" href="https://google.com" >A TAG </ExtendButton>
```

### 애니메이션 적용하기
* 가장 먼저 keyframes를 import
```javascript
import styled, { keyframes } from 'styled-components'
```
* 아래처럼 사용하면 되며 반드시 키프레임 선언은 호출보다 위에 위치
```javascript
const animation = keyframes`
  50% {
    transform: scale(1.3);
  }
`;

const ExtendButton = styled(Button)`
  background-color: ${props => props.extended || "#45aaf2"};
  animation: ${animation} 1s infinite;
`;
```

### 백틱(``) 에 대해서
* 템플릿 리터럴이라 부르고, 런타임 시점에 자바스크립트 문자열로 변경
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals

### 공용 CSS
* 태그나 body 이런 것들은 공용으로 관리해주는게 좋음(모든 페이지에 적용시켜야 하니까!)
* 아래처럼 createGlobalStyle을 이용하면 되며 공용 css는 따로 빼주는게 좋음
```javascript
/* GlobalStyle.js */
import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #000000;
}
`;

export default GlobalStyle;
```
* 이후에는 모든 페이지에 넣어야하니 최상단 페이지인 index.js에서 호출
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  // 이렇게 부른다
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

### Normalize
* 웹브라우저마다 기본적으로 적용되어있는 스타일을 지워주는 용도의 css 파일이며 reset.css 와 같다고 보면 됨!
```javascript
npm i styled-normalize
```
* 공용css에 같이 처리해주면 좋음
```javascript
/* GlobalStyle.js */
import { createGlobalStyle} from 'styled-components';
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle `
// 이렇게 호출한다
${normalize}
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #000000;
}
`;

export default GlobalStyle;
```

