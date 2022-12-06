# Redux Toolkit

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## 순서

### 1. store 생성
```javascript
import { configureStore } from '@reduxjs/toolkit';

/* 빈 스토어 생성 */
export const store = configureStore({
  reducer : {}
})
```

### 2. store를 index.js 에 연결 - 전역관리 세팅
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
```

### 3. 전역으로 관리할 데이터 스크립트 생성
```javascript
import { createSlice } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  value : 0
}

// createSlice : state의 초깃값들과 action creator 와 reducer를 생성해줌
export const counterSlice = createSlice({
  name : 'counter',                    // 모듈의 이름
  initialState,                        // 모듈의 초깃값
  reducers : {                         // 리듀서의 키값으로 action 함수 자동 생성
    increment : (state) => {
      state.value += 1
    },
    decrement : (state) => {
      state.value -= 1
    },
    incrementByAmount : (state, action) => {
      state.value += action.payload
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### 4. store.js 에 reducer 넣기
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'


/* 빈 스토어 생성 */
export const store = configureStore({
  reducer : {
    counter : counterReducer
  }
})
```

### 5. 리듀서 사용
```javascript
import { useSelector, userDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
            aria-label = "Increment value"
            onClick = {() => dispatch(increment())}
        > Increment </button>
        {/* 가져와서 보여주고 싶은 값 */}
        <span> {count} </span>
        <button
            aria-label = "Decrement value"
            onClick = { () => dispatch(decrement())}
        > Decrement </button>
      </div>
    </div>
  )
}
```

