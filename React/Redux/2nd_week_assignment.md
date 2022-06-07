# Use Redux and FB

### React Redux - basic structure

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle';          // 전역에서 쓰일 Style
import GlobalFonts from './fonts/fonts.js';       // 전역에서 쓰일 Font

/* Redux setting */
import { Provider } from 'react-redux';
import store from './redux/configStore';

/* Router setting */
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>    
        <BrowserRouter>
            <GlobalStyle/>
            <GlobalFonts/>
            <App />
        </BrowserRouter>
    </Provider>
)
```

## Store
```javascript
/* Redux - Middleware things */
import { createStore, applyMiddleware } from "redux";
import rootReducer from './modules';
import thunk from "redux-thunk";     // thunk 가 어떤 일을 하는 녀석인지 공부

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
```

