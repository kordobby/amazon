# Router

## Routing


### 1. Routes
#### * SPA๋?
๐  **Single Page Application!** 
* ๋ง ๊ทธ๋๋ก ์๋ฒ์์ ์ฃผ๋ html์ด 1๊ฐ ๋ฟ์ธ ์ดํ๋ฆฌ์ผ์ด์
* ์ ํต์ ์ธ ์น์ฌ์ดํธ๋ ํ์ด์ง๋ฅผ ์ด๋ํ  ๋๋ง๋ค ์๋ฒ์์ html, css, js(=์ ์ ์์๋ค)์ ๋ด๋ ค์ค๋ค๋ฉด, SPA๋ ๋ฑ ํ๋ฒ๋ง ์ ์ ์์์ ๋ฐ์์ด

๐  ์ ๊ตณ์ด html์ ํ๋๋ง ์ค๊น?
* ํ์ด์ง๋ฅผ ์ด๋ํ  ๋๋ง๋ค ์๋ฒ์์ ์ฃผ๋ html๋ก ํ๋ฉด์ ๋ฐ๊พธ๋ค๋ณด๋ฉด ์ํ ์ ์ง๊ฐ ์ด๋ ต๊ณ , ๋ฐ๋์ง ์์ ๋ถ๋ถ๊น์ง ์๋ก ๋ถ๋ฌ์ค๋๊น ๋นํจ์จ์ 
* ๋จ์  
   * SPA๋ ๋ฑ ํ ๋ฒ ์ ์ ์์์ ๋ด๋ ค๋ฐ๋ค๋ณด๋, ์ฒ์์ ๋ชจ๋  ์ปดํฌ๋ํธ๋ฅผ ๋ฐ์์ด
   * ์ฆ, ์ฌ์ฉ์๊ฐ ์๋ค์ด๊ฐ ๋ณผ ํ์ด์ง๊น์ง ์ ๋ถ ๊ฐ์ง๊ณ  ์ต๋๋ค. ๊ฒ๋ค๊ฐ ํ ๋ฒ์ ์ ๋ถ ๊ฐ์ง๊ณ  ์ค๋๊น ์์ฃผ์์ฃผ ๋ง์ ์ปดํฌ๋ํธ๊ฐ ์๋ค๋ฉด ์ฒซ ๋ก๋ฉ ์๋๊ฐ ๋๋ ค์ง

๐  ๋ผ์ฐํ
* html์ ๋ฑ ํ๋๋ฅผ ๊ฐ์ง๊ณ  ์์ง๋ง, SPA๋ ๋ธ๋ผ์ฐ์  ์ฃผ์์ฐฝ๋๋ก ๋ค๋ฅธ ํ์ด์ง๋ฅผ ๋ณด์ฌ์ค ์ ์์
* ๋ธ๋ผ์ฐ์  ์ฃผ์์ ๋ฐ๋ผ ๋ค๋ฅธ ํ์ด์ง๋ฅผ ๋ณด์ฌ์ฃผ๋ ๊ฑธ ๋ผ์ฐํ์ด๋ผ๊ณ  ๋ถ๋ฆ

๐  ์ฐ๋ฆฌ๋ ๋ฆฌ์กํธ ์ฌ์ฉ์๋ค์ด ๊ฐ์ฅ ๋ง์ด ์ฐ๋ ๋ผ์ฐํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๊ฐ์ ธ์์ ์ฌ์ฉ

### 2. ๋ฆฌ์กํธ์์ ๋ผ์ฐํ ์ฒ๋ฆฌํ๊ธฐ

#### 2-1. react-router-dom ํจํค์ง ์ค์น
```javscript
// V5
yarn add react-router-dom@5.2.1

// V6

```
#### 2-2. ํ์ด์ง๋ฅผ ์ ํ
* index.js์ BrowserRouter ์ ์ฉ
   * BrowserRouter(๋ธ๋ผ์ฐ์ ๋ผ์ฐํฐ) : ์น ๋ธ๋ผ์ฐ์ ๊ฐ ๊ฐ์ง๊ณ  ์๋ ์ฃผ์ ๊ด๋ จ ์ ๋ณด๋ฅผ props๋ก ๋๊ฒจ์ฃผ๋ฉฐ, ํ์ฌ ๋ด๊ฐ ์ด๋ ์ฃผ์๋ฅผ ๋ณด๊ณ  ์๋ ์ง ์ฝ๊ฒ ์ ์ ์๊ฒ ๋์์ค

```javascript
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ์ด๋ถ๋ถ์ด index.html์ ์๋ div#root์ ์ฐ๋ฆฌ๊ฐ ๋ง๋  ์ปดํฌ๋ํธ๋ฅผ ์ค์ ๋ก ๋๋๋งํ๋๋ก ์ฐ๊ฒฐํด์ฃผ๋ ๋ถ๋ถ
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
             <div>๋ฉ์ธ ํ๋ฉด์ด์์.</div>
           )
        }
       export default Home;
      ```

   * Cat.js
      ```javascript
      import React from "react";

      const Cat = (props) => {

          return (
              <div>๊ณ ์์ด ํ๋ฉด์ด์์.</div>
          )
      }

      export default Cat;
      ```
* index.js์ BrowserRouter ์ ์ฉ

* App.js์์ Route ์ ์ฉ
   * Route ์ฌ์ฉ๋ฐฉ๋ฒ 1: ๋๊ฒจ์ค props๊ฐ ์์ ๋
   ```javascript
   <Route path="์ฃผ์[/home ์ฒ๋ผ /์ ์ฃผ์๋ฅผ ์ ์ด์]" component={[๋ณด์ฌ์ค ์ปดํฌ๋ํธ]}/>
   ```
    * Route ์ฌ์ฉ๋ฐฉ๋ฒ 2: ๋๊ฒจ์ค props๊ฐ ์์ ๋(์ฐ๋ฆฌ ๋ฒํท๋ฆฌ์คํธ ์ฑ์ App.js์์ list๋ฅผ props๋ก ๋๊ฒจ์ฃผ์ฃ ! ๊ทธ๋ด ๋ ์ด๋ ๊ฒ ์ฐ๋ฉด ๋ฉ๋๋ค!)
   ```javascript
   <Route path="์ฃผ์[/home ์ฒ๋ผ /์ ์ฃผ์๋ฅผ ์ ์ด์]" render={(props) => (<BucketList list={this.state.list} />)} />
   ```
   * App.js์ ์ ์ฉ
   ```javascript
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';
    // Route๋ฅผ ๋จผ์  ๋ถ๋ฌ์์ค๋๋ค.
    import { Route } from "react-router-dom";

    // ์ธ๋ถ ํ์ด์ง๊ฐ ๋์ด์ค ์ปดํฌ๋ํธ๋ค๋ ๋ถ๋ฌ์์ฃผ๊ณ ์!
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
            {/* ์ค์ ๋ก ์ฐ๊ฒฐํด๋ณผ๊น์! */}
            <Route path="/" component={Home} />
            <Route path="/cat" component={Cat} />
            <Route path="/dog" component={Dog} />
          </div>
        );
      }
    }

    export default App;
    ```

* URL ํ๋ผ๋ฏธํฐ์ฌ์ฉ
   * ์น์ฌ์ดํธ ์ฃผ์์๋ ํ๋ผ๋ฏธํฐ์ ์ฟผ๋ฆฌ๋ผ๋ ๊ฒ ์์ด์. ์ฐ๋ฆฌ๋ ๊ทธ ์ค ํ๋ผ๋ฏธํฐ ์ฌ์ฉ๋ฒ์ ์์๋ณผ ๊ฑฐ์์!
   * ์ด๋ ๊ฒ ์๊ฒผ์ด์!
      โ ํ๋ผ๋ฏธํฐ: /cat/nabi
      โ ์ฟผ๋ฆฌ: /cat?name=nabi
   * ํ๋ผ๋ฏธํฐ ์ฃผ๋ ๋ฐฉ๋ฒ

   ```javascript
   //App.js
    ...
    // ํ๋ผ๋ฏธํฐ ์ฃผ๊ธฐ
    <Route path="/cat/:cat_name" component={Cat}/>
    ...
    ```
    * ํ๋ผ๋ฏธํฐ ์ฌ์ฉ ๋ฐฉ๋ฒ
      ```javascript
      //Cat.js
      import React from "react";

      const Cat = (props) => {

          console.log(props.match);

          return (
              <div>๊ณ ์์ด ํ๋ฉด์ด์์.</div>
          )
      }

      export default Cat;
      ```
* ๋งํฌ ์ด๋ ์ํค๊ธฐ
   * `<Link/>` ์ฌ์ฉํ๊ธฐ
     * ๋งํฌ ์ปดํฌ๋ํธ๋ html ์ค a ํ๊ทธ์ ๋น์ทํ ์ญํ ์ ํด์. ๋ฆฌ์กํธ ๋ด์์ ํ์ด์ง ์ ํ์ ๋์์ค
     ```javascript
     <Link to="์ฃผ์">[ํ์คํธ]</Link>
     ```

     

#### witch -> Routes ๋ค์ด๋ฐ ๋ณ๊ฒฝ๋จ
```html
* Switch๋?
์ฌ๋ฌ Route๋ฅผ ๊ฐ์ธ์ ๊ทธ ์ค ๊ท์น์ด ์ผ์นํ๋ ๋ผ์ฐํธ ๋จ ํ๋๋ง์ ๋ ๋๋ง ์์ผ์ค
(์๋ฌด๊ฒ๋ ์ผ์นํ์ง ์์ผ๋ฉด Not Found ํ์ด์ง๋ฅผ ๊ตฌํํ  ์ ์์์)
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


* ๋ชจ๋  Route ๋ค์ Routes ์์ ๋ค์ด๊ฐ์ผํจ
* exact ๊ธฐ๋ฅ๋ ์์ด์ง // ์์์ url์ ์ ํํ ๋งค์นญ๋จ
```javascript
<Routes>
  <Route path="/" element={<BucketList list={list} />}></Route>
  <Route path="/detail" exact element={<Detail />}></Route> 
</Routes>
```

### 2. useNavigate()
* useHistory() ๋ ์์ด์ง
```javascript
import {useNavigate }  from 'react-router-dom';

const navigate = useNavigate ();
 
<ItemStyle className="list_item" key={index} onClick={() => {navigate('/detail')}}>
```
* useNavigate() vs Link ??
</br> : Link๋ JSX๋ก ์ธ์ ์๊ณ , useNavigate()๋ ์์

### 3. ์๋ชป๋ url ์ฒ๋ฆฌ
```javascript
<Route path="/*" element={<h1>์กด์ฌํ์ง ์๋ ํ์ด์ง์๋๋ค.</h1>} />
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