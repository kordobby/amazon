# React - Styled Components #01

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

큰 도움을 주신 캐나다 감자에게 감사를 표합니다.
</br> 그의 블로그 : https://devkevin0408.tistory.com/156

## Styled Components ?
* CSS in JS 기술로 말 그대로 JS 안에 CSS를 작성하는 것
* 이 기술을 사용하는 "styled-components" 라는 라이브러리임
### 장점
  * 페이지에서 렌더링되는 요소에 맞춰 자동으로 해당 스타일만 삽입
     *  때마다 필요한 스타일만 로드!
  * 스타일에 대한 고유 클래스명을 생성하며 중복이나 오타 걱정이 없음
  * 더 이상 사용되지 않는 CSS를 쉽게 삭제할 수 있음
     *  모든 스타일은 특정 요소와 연결되어 있기 때문에 해당 요소가 삭제되면 스타일도 삭제됨
  * 동적 스타일링이 편해짐
    * 이 props가 있으면 A, 없다면 B 와 같이 직관적으로 개별 스타일링이 가능

## 들어가기 전에, Tagged Template Literal 부터 짚고 넘어가자
### Template Literal
  * ES6 템플릿 리터럴은 일반적인 문자열과 달리 여러 줄에 걸쳐 문자열을 작성할 수 있으며 템플릿 리터럴 내의 모든 white-space는 있는 그대로 적용
  * 문자열 인터폴레이션(String Interpolation)
      * 템플릿 리터럴은 + 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공
        ```javascript
          const first = 'Dobby';
          const last = 'Lee';

          // ES5: 문자열 연결
          console.log('My name is ' + first + ' ' + last + '.');
          // "My name is Dobby Lee."

          // ES6: String Interpolation
          console.log(`My name is ${first} ${last}.`);
          // "My name is Dobby Lee."
        ```

    * 문자열 인터폴레이션은 ${ … }으로 표현식을 감싸며, 문자열 인터폴레이션 내의 표현식은 문자열로 강제 타입 변환
      ```javascript
      console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"
      ```

## Styled Components 사용과 문법

### 1. Styled Components 불러오기
  ```react
  npm install styled-components
  ```

### 2. TIP
* styled-components 내에서 emmet을 쓰고 싶다면 vscode-styled-components를 설치

## 3. Styled Components 기본 문법
* 일단 import를 해주고 아래 코드 처럼 함수 밖에서 컴포넌트처럼 만들어 쓸 수 있음

### 3-1. 문법 순서

   ```javascript
    // 1. styled-components 불러오기 : styled-components를 'styled' 로 import 하겠음
    import styled from 'styled-components'
    
    // 2. 컴포넌트에 적용하는 방법
    const (컴포넌트명) = import 할 때 쓴 이름.tag 이름 ``
  ```
    
   * 사용 예시
      ```javascript
        import styled from 'styled-components'
        // 1. styled => 내가 지어준 컴포넌트 이름
        // 2. 
        const App = () => {
          return (
            <Container>
              <h1>THIS IS TITLE</h1>
              <Button danger>BUTTON</Button>
              <Button >BUTTON</Button>
            </Container>
          );
        }

        /* Container 라는 Component의 div 태그와 그 안의 h1에 스타일을 줘볼게.
         하나 둘 셋 얍 */
        const Container = styled.div`
            background-color: #f6e58d
            // 이 태그 안에있는 다른 태그에 접근
            h1{
              color: #3B3B98
            }
          `;

        /* Button 이라는 Component의 button 태그에 props에 따라 다른 스타일을 적용해볼게.
         하나 둘 셋 얍 */
        const Button = styled.button`
            cursor: pointer;
            -webkit-appearance: none;
            // Props 사용은 아래와 같이
            background-color: ${props => props.danger? "#e74c3c" : "#2ecc71"}
          `;
        
        export default App;
        ```


### 3-2. Extend
* 이거는 쉽게 말해서 내가 만약 CSS 랑 섞어서 쓰고있는데,
* 스타일을 똑같이 적용하고 싶은 다른 Component를 만들고 싶을 때 복사하고 싶은 컴포넌트의 CSS를 가져와서 새로운 Component를 만들어주는 것

* 방법은 아래와 같음
   * 이해가 안될까봐 TMI 적자면, 이미 Button이 CSS 적용되어서 있는디 이거를 그대로 가지고 와서 조금만 변형시킨 새로운 버튼 컴포넌트를 만들고 싶은 상황임
        ```javascript
        const Extend
        // 1. const new이름 = styled(원래컴포넌트) 작성과 백틱으로 감싸기
        const ExtendButton = styled(Button)`
          background-color: ${props => props.extended || "#45aaf2"};
        `;
        ```
   * 새롭게 만든 컴포넌트를 적용할 때
        ```javascript
        // 컴포넌트 적용 시엔 새롭게 지어준 이름을 적용하면 됨
        <ExtendButton>BUTTON</ExtendButton>
        ```
   * 만약 스타일만 가져오는데 다른 태그를 사용하고 싶을 때 - 첫 번째 방법
       * 'as' 속성을 이용
       * 대신 as를 쓰면 원 태그의 속성은 없어짐
      ```javascript
      <ExtendButton as="a" href="https://google.com" >A TAG </ExtendButton>
      ```
   * 만약 스타일만 가져오는데 다른 태그를 사용하고 싶을 때 - 두 번째 방법
      ```javascript
      // inline 말고 뒤에 .attrs({ //코드작성 }) 으로 가능
      export const SubmitButton = styled(StyledButton).attrs({type: 'submit' })`
        background-color: ${props => props.extended || "#EAB543"};
      `;
      ```

## 4. 애니메이션 적용하기
* 가장 먼저 keyframes를 import
```javascript
import styled, { keyframes } from 'styled-components'
```
* 아래처럼 사용하면 되며 반드시 키프레임 선언은 호출보다 위에 위치해야함
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

## 5. 공용 CSS
* 태그나 body 이런 것들은 모든 페이지에 적용시켜야 하기 때문에 공용으로 관리해주는게 좋음
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
import GlobalStyle from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

## 6. Normalize
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
// 이렇게 호출
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

## 7. ThemeProvider 
* 사용방법
```javascript
import { ThemeProvider } from 'styled-components'
```
* 적용 코드 예시
```javascript
// 1. theme 을 각각의 obj 를 만들어주기
const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    primary: '#fff',
    text: '#000',
  }

function App() {
  return (
    <ThemeProvider theme={theme}>
    
      <div className="App">
        <StyledButton>HELLO</StyledButton>
        <StyledButton danger>HELLO</StyledButton>
        <FancyButton>HELLO</FancyButton>
        <FancyButton as="a" href="https://google.com">GO TO GOOGLE</FancyButton>
        <SubmitButton>SUBMIT</SubmitButton>
        <LightButton>LIGHT</LightButton>
      </div>
      
    </ThemeProvider>
  );
}
```
   * 다크모드를 만드는걸 예로들면 코드는 아래와 같이 props에 접근해서 theme객체안의 light 객체안의 값에 접근가능
   ```javascript
   export const LightButton = styled(StyledButton)`
      border: 2px solid ${(props) => props.theme.light.primary};
      background-color: ${(props) => props.theme.light.primary};
      color:${(props) => props.theme.light.text};
  `;
  ```


## 8. 태그에 붙어있는 hover 같은 가상클래스 이용할 때,
* &:hover
```javascript
export const StyledButton = styled.button`
  background-color: ${props => props.danger? "#e74c3c" : "#2ecc71"};
  &:hover{
    background-color: green;
  }
`;
```

## 9. Style Pallette (내가 붙인 이름임) 사용
*   : root 사용도 가능
```javascript
const GlobalStyle = createGlobalStyle`
:root {
        --adaptiveGray900: #ffffff;
    }
`;

```
```javascript
const S = {
  Wrapper: styled.div`
    background: var(--adaptiveGray50);
    color: var(--adaptiveGray900);
    height: 80vh;

    .color {
      color: var(--red);
    }
  `,
};
```
