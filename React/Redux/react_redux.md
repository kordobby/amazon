# React Redux

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>
* https://devkevin0408.tistory.com/202?category=1062883

## 1. Redux를 쓰는 이유
* useState가 불편하니까....
   * props 를 내려주는 과정에서 그 data 가 필요없는 부분도 거쳐가야하는 소모 발생
* Redux 같은 경우에는 전역에서 관리해주기 때문에 필요한 컴포넌트에 데이터를 줄 수 있음

## 2. Redux vs Redux Toolkit
* 항해 7기는 React Redux만 배운다
* Reduxjs Toolkit 은 React Redux를 보다 쉽고 짧고 편하게 쓰기 위해 나옴
* 실제로 코드량이 반토막남
* 벨로퍼트님 왈 : Redux Toolkit을 꼭 사용하자

## 3. Redux vs Context API

* 전역으로 데이터를 관리하는애는 Redux말고 Context API도 있는데 왜 Redux를 배울까?
    - Redux에는 미들웨어(middleware) 가 있음
    - 우리가 변경하고싶은 값을 바로 변경시키지 않고, 그 값을 사용해 다른 걸 할수 있음
    - ex) Greeting 이라는 함수에서 hi 를 return해 주는데,
    이걸 바로 return하지않고 hi 한다음에 nice meet you의 행동 까지 추가할수 있단 말
    - 비동기 작업처리가 가능하다 라고 기억하면 됨

## 4. Redux를 언제 쓰는게 좋을까?
* 프로젝트 규모가 크거나, 비동기 작업이 많을때 
* 단순히 전역변수들 상태관리를 할 때

## 5. 기본 구조 (이론) - React Redux
* Redux나 툴킷이나 일단 기본 구조 이론편은 똑같음
* Store는 상태가 관리되는 공간이며 변수들이 저장되는 창고
* 프로젝트내에 단 한개만 존재해야함
* Reducer는 store에 저장되어있는 상태를 직접적으로 수정해주는 역할
* 쉽게말해서, CRUD가 일어나면, 얘를 통해서 store에 저장된 값을 업데이트 해야한다.
* CRUD가 일어나면 값을 수정해야하기때문에 취해진 행동(action)과, 수정할 값(state)을 파라미터로 받아와야한다(must)

```javascript
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
}
```

* Action은 상태에 어떤 변화가 필요하게 될때 일어난다.

- 이런 액션들은 객체로 표현되어있고, type이라는 필드를 무조건 가지고 있어야한다 
```javascript
{
  type: "ADD_TODO",
  data: {
    id: 0,
    text: "리덕스 언제끝내냐.."
  }
}
```

* 이런 액션들은 보통 함수로 관리한다. 1액션 1함수 기억하자.
```javascript
export function addTodo(data) {
  return {
    type: "ADD_TODO",
    data: {
    id: 0,
    text: "리덕스 언제끝내냐.."
  }
  };
}
```
- View는 그냥 유저들이 보는 모니터 즉, 브라우저다.

 

쉽게말해서 값이 변경되면 - action을 dispatch했다 라고 외우면된다.

변경된 값은 reducer가 처리해서 store한테 전달

store는 변경된 값을 필요한 애들한테 업데이트해준다.

업데이트는 자동으로 이루어진다.

우리가 유튜브 구독하면 유튜버들이 뭐 올리면 자동으로 알림오듯이, 리듀서도 구독한애들은 자동으로 업데이트해준다.

- 여기서 이용하는 Hook이 useSelector이다. (아래서 설명예정)




