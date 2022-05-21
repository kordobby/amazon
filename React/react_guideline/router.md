# Router

## Routing


### 1. Routes
#### * SPA란?
👉  **Single Page Application!** 
* 말 그대로 서버에서 주는 html이 1개 뿐인 어플리케이션
* 전통적인 웹사이트는 페이지를 이동할 때마다 서버에서 html, css, js(=정적자원들)을 내려준다면, SPA는 딱 한번만 정적자원을 받아옴

👉  왜 굳이 html을 하나만 줄까?
* 페이지를 이동할 때마다 서버에서 주는 html로 화면을 바꾸다보면 상태 유지가 어렵고, 바뀌지 않은 부분까지 새로 불러오니까 비효율적
* 단점 
   * SPA는 딱 한 번 정적자원을 내려받다보니, 처음에 모든 컴포넌트를 받아옴
   * 즉, 사용자가 안들어가 볼 페이지까지 전부 가지고 옵니다. 게다가 한 번에 전부 가지고 오니까 아주아주 많은 컴포넌트가 있다면 첫 로딩 속도가 느려짐

👉  라우팅
* html은 딱 하나를 가지고 있지만, SPA도 브라우저 주소창대로 다른 페이지를 보여줄 수 있음
* 브라우저 주소에 따라 다른 페이지를 보여주는 걸 라우팅이라고 부름

👉  우리는 리액트 사용자들이 가장 많이 쓰는 라우팅 라이브러리를 가져와서 사용

### 2. 리액트에서 라우팅 처리하기

#### 2-1. react-router-dom 패키지 설치
```javscript
// V5
yarn add react-router-dom@5.2.1

// V6

```
#### 2-2. 페이지를 전환
* index.js에 BrowserRouter 적용
   * BrowserRouter(브라우저라우터) : 웹 브라우저가 가지고 있는 주소 관련 정보를 props로 넘겨주며, 현재 내가 어느 주소를 보고 있는 지 쉽게 알 수 있게 도와줌

```javascript
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 이부분이 index.html에 있는 div#root에 우리가 만든 컴포넌트를 실제로 랜더링하도록 연결해주는 부분
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
   * Home.js

     ```javascript
     import React from "react";

      const Home = (props) => {
         return (
             <div>메인 화면이에요.</div>
           )
        }
       export default Home;
      ```

   * Cat.js
      ```javascript
      import React from "react";

      const Cat = (props) => {

          return (
              <div>고양이 화면이에요.</div>
          )
      }

      export default Cat;
      ```
* index.js에 BrowserRouter 적용

* App.js에서 Route 적용
   * Route 사용방법 1: 넘겨줄 props가 없을 때
   ```javascript
   <Route path="주소[/home 처럼 /와 주소를 적어요]" component={[보여줄 컴포넌트]}/>
   ```
    * Route 사용방법 2: 넘겨줄 props가 있을 때(우리 버킷리스트 앱은 App.js에서 list를 props로 넘겨주죠! 그럴 땐 이렇게 쓰면 됩니다!)
   ```javascript
   <Route path="주소[/home 처럼 /와 주소를 적어요]" render={(props) => (<BucketList list={this.state.list} />)} />
   ```
   * App.js에 적용
   ```javascript
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';
    // Route를 먼저 불러와줍니다.
    import { Route } from "react-router-dom";

    // 세부 페이지가 되어줄 컴포넌트들도 불러와주고요!
    import Home from "./Home";
    import Cat from "./Cat";
    import Dog from "./Dog";

    class App extends React.Component {

      constructor(props){
        super(props);
        this.state={};
      }
      
      render(){
        return (
          <div className="App">
            {/* 실제로 연결해볼까요! */}
            <Route path="/" component={Home} />
            <Route path="/cat" component={Cat} />
            <Route path="/dog" component={Dog} />
          </div>
        );
      }
    }

    export default App;
    ```

* URL 파라미터사용
   * 웹사이트 주소에는 파라미터와 쿼리라는 게 있어요. 우리는 그 중 파라미터 사용법을 알아볼 거예요!
   * 이렇게 생겼어요!
      → 파라미터: /cat/nabi
      → 쿼리: /cat?name=nabi
   * 파라미터 주는 방법

   ```javascript
   //App.js
    ...
    // 파라미터 주기
    <Route path="/cat/:cat_name" component={Cat}/>
    ...
    ```
    * 파라미터 사용 방법
      ```javascript
      //Cat.js
      import React from "react";

      const Cat = (props) => {

          console.log(props.match);

          return (
              <div>고양이 화면이에요.</div>
          )
      }

      export default Cat;
      ```
* 링크 이동 시키기
   * `<Link/>` 사용하기
     * 링크 컴포넌트는 html 중 a 태그와 비슷한 역할을 해요. 리액트 내에서 페이지 전환을 도와줌
     ```javascript
     <Link to="주소">[텍스트]</Link>
     ```

     

#### witch -> Routes 네이밍 변경됨
```html
* Switch란?
여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜줌
(아무것도 일치하지 않으면 Not Found 페이지를 구현할 수 있었음)
```
```javascript
// v5
<Switch>
	<Route />
	<Route />
</Switch>


// v6
<Routes>
	<Route />
	<Route />
</Routes>
```


* 모든 Route 들은 Routes 안에 들어가야함
* exact 기능도 없어짐 // 알아서 url은 정확히 매칭됨
```javascript
<Routes>
  <Route path="/" element={<BucketList list={list} />}></Route>
  <Route path="/detail" exact element={<Detail />}></Route> 
</Routes>
```

### 2. useNavigate()
* useHistory() 는 없어짐
```javascript
import {useNavigate }  from 'react-router-dom';

const navigate = useNavigate ();
 
<ItemStyle className="list_item" key={index} onClick={() => {navigate('/detail')}}>
```
* useNavigate() vs Link ??
</br> : Link는 JSX로 쓸수 있고, useNavigate()는 없음

### 3. 잘못된 url 처리
```javascript
<Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
```

```javascript
import React from "react";
import styled from "styled-components";
import BigBigBigBig from "./BigBigBigBig";
function App() {
  const family = [{
    name : 'Btae',
    age : 70,
    old : 'bbbbig'
  },{
    name : 'Btae',
    age : 60,
    old : 'bbbig'
  },{
    name : 'Btae',
    age : 50,
    old : 'bbig'
  },{
    name : 'Btae',
    age : 40,
    old : 'big'
  }
,{
  name : 'Btae',
  age : 30,
  old : 'my'
}]
  return (
    <div className="App">
      <BigBigBigBig family={family}/>
    </div>
  );
}
export default App;
```