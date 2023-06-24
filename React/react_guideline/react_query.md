# React Query

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## 서버에서 받아야하는 상태들의 특성
* Client 에서 제어하거나 소유되지 않은 원격의 공간에서 관리되고 유지됨
* Fetching 이나 Updating 에 비동기 API 가 필요함
* 다른 사람들과 공유되는 것으로 사용자가 모르는 사이에 변경될 수 있음
* 신경 쓰지 않는다면 잠재적으로 "out of date"가 될 가능성을 지님
### => 그럼.. 사실상 FE 에서 이 값들이 저장되어 있는 state들은 일종의 캐시가 아닌가?

## Overview
* fetching, caching, synchronizing and updating server state
* 서버 state
   * 데이터 가져오기
   * 캐시
   * 동기화
   * 데이터 업데이트
* zero-config 로 즉시 사용 가능함. 하지만 원하면 언제든 config도 커스텀 가능!

## 리액트에서 리액트 쿼리를 쓰려면?
  * QueryClientProvider 필수!
```javascript
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new Queryclient();

function App() {
  return <QueryClientProvider client = {queryClient}> ... </QueryClientProvider>
}
```

* 세 가지 core 컨셉 (공식문서 퀵스타트에서 짚은 3가지 개념)
1. Queries
2. Mutations
3. Query Invalidation

## Queries
* 데이터 fetching 용!
* 보통 GET 으로 받아올 대부분의 API에 사용할 아이 (CRUD 중 Reading에 사용)
```javascript
import { useQuery } from 'react-query';

function App() {
  const info = useQuery('todos', fetchTodoList) // ( Query KEy, Query Function)
};
```
### Query Key
* React Query 는 Query Key 에 따라 query cashing을 관리

* String 형태
```javascript
useQuery('todos', ...) // queryKey === ['todos']
useQuery('somethingSpecial', ...) // queryKey === ['somethingSpecial']
```

* Array 형태
```javascript
// An individual todo
useQuery(['todo', 5], ...) // queryKey === ['todo', 5]

// An individual todo in a "preview" format
useQuery(['todo', 5, {preview : true}], ...) // queryKey === ['todo', 5, {preview : true}]

// A list of todos that are "done"
useQuery(['todos', {type:'done'}], ...) // queryKey === ['todos', {type : 'done'}]
```

### Query Function
* Promise 를 반환하는 함수! => data resolve 하거나 error throw
* fetch, axios ... etc
```javascript
useQuery('fetchOrder', () => fetchOrder(orderNo), options)
```

### Query 가 반환하는것?
* data : 마지막으로 성공한 resolved 된 data(response)
* error : 에러가 발생했을 때 반환되는 객체
* isFetching : Request 가 in-flight 중일 때 true
* status, isLoading, isSuccess, isLoading 등등 : 모두 현재 query state
* refetch : 해당 query refetch 하는 함수 제공
* remove : 해당 query cache 에서 지우는 함수 제공
* etc

### useQuery Option
* onSuccess, onError, onSettled : query fetching 성공/실패/완료 시 실행할 side effect 정의
* enabled : 자동으로 query 실행시킬지 말지 여부
* retry : query 동작 실패 시, 자동으로 retry 할지 결정하는 옵션
* select : 성공 시 가져온 data 가공해서 전달
* keepPreviousData : 새롭게 fetching 시 이전 데이터 유지 여부
* refetchInterval : 주기적으로 refetch할 지 결정하는 옵션
* etc 

### queries 파일 분리 추천!
* Query 선언부와 Components 분리

### Query가 여러 개 일때는?
```javascript
function App() {
  // The following queries will execute in parallel
  const usersQuery = useQuery('users', fetchUsers);
  const teamsQuery = useQuery('teams', fetchTeams);
  const projectsQuery = useQuery('projects' fetchProjects);
  ...
}
```

## Mutations
* CRUD 중 CUD 에 모두 사용
* 데이터 생성/수정/삭제용!

```javascript
const mutation = useMutation(newTodo => {
  return axios.post('/todos', newTodo)
})
```
* useQuery 보다 더 심플하게 Promise 반환 함수만 있어도 됨
* Query Key 넣어주면 devtools 에서 볼 수 있음

### useMutation Option
* onMutate : 본격적인 Mutation 동작 전에 먼저 동작하는 함수
   * Optimistic update 적용할 때 유용
* 나머진 특별히 설명할 것 없이 useQuery랑 비슷함
  (오히려 옵션이 더 적음)

### Query Invalidation
* 간단히 queryClient 를 통해 Invalidate 메서드 호출하면 끝
```javascript
//Invalidate every query in the cache
queryClient.invalidateQueries()
// Invalidate every query with a key that starts with 'todos'
queryClient.invalidateQueries('todos');
```
* 이러면 해당 Key 를 가진 query는 state 취급되고, 현제 rendering 되고 있는 query 들을 백그라운드에서 refetch 됨






## React-query 사용하기
```javascript
npm i react-query
```

## React 의 가장 기본이 되는 곳에 react-query 사용 세팅
```javascript
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* devtools */}
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

## useQuery
* 첫번째 파라미터 : unique Key
   * 다른 컴포넌트에서 해당 키를 사용하면 호출 가능
   * string과 배열을 받음
   * 배열로 넘기면 0번 값은 string 값으로 다른 컴포넌트에서 부를 값이 들어가고 두 번째 값을 넣으면 query 함수 내부에 파라미터로 해당 값이 전달됨
* 두번째 파라미터 : 비동기 함수(api 호출함수)
* return 값은 api 성공, 실패 여부, api return 값을 포함한 객체
* useQuery는 비동기로 작동
   * 한 컴포넌트에 여러개의 useQuery가 있다면 하나가 끝나고 다음 useQuery 가 실행되는 것이 아닌 두 개의 useQuery가 동시에 실행됨
   * 여러개의 비동기 query가 있다면 useQuery 보다는 useQueries
* enabled 사용하면 useQuery 동기적으로 사용 가능

```javascript
const Todos = () => {
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList, {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: data => {
      // 성공시 호출
      console.log(data);
    },
    onError: e => {
      // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출)
      // 강제로 에러 발생시키려면 api단에서 throw Error 날림
      console.log(e.message);
    }
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

```javascript
function Todos() {
  const { status, data, error } = useQuery("todos", fetchTodoList);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

```
### useQuery 동기적으로 실행
* enabled 옵션을 사용하면 useQuery를 동기적으로 사용 가능
* useQuery의 3번째 인자로 옵션값이 들어가는데 그 옵션의 enabled에 값을 넣으면 그 값이 true일때 useQuery를 실행 ->  이것을 이용하면 동기적으로 함수를 실행
```javascript
const { data: todoList, error, isFetching } = useQuery("todos", fetchTodoList);
const { data: nextTodo, error, isFetching } = useQuery(
  "nextTodos",
  fetchNextTodoList,
  {
    enabled: !!todoList // true가 되면 fetchNextTodoList를 실행한다
  }
);
```
