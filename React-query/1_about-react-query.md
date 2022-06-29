# About react-query

## react-query란?

- 리액트 애플리케이션에서 서버 상태 가져오기, 캐싱, 동기화 및 업데이트를 보다 쉽게 다룰 수 있도록 도와줌
- 클라이언트 상태와 서버 상태를 명확히 구분하기 위해 만들어진 라이브러리
- react-query에서 기존 상태 관리 라이브러리(redux, mobX)는 클라이언트 상태 작업에 적합하지만 비동기 또는 서버 샅애 작업에는 그다지 좋지 않음
  - Client State : 컴포넌트에서 관리하는 각각의 input 값
  - Server State : DB에 저장되어있는 데이터로 예를 들 수 있음

## react-query 상태

### 1. fresh

- 새롭게 추가된 쿼리 & 만료되지 않은 쿼리
- 컴포넌트가 마운트, 업데이트 되어도 데이터 재요청 보내지 않음

### 2. fetching

- 요청 중인 쿼리

### 3. stale

- 만료된 쿼리
- 컴포넌트가 마운트, 업데이트되면 데이터 재요청을 함

### 4. inactive

- 비활성화된 쿼리
- 특정 시간이 지나면 가비지 컬렉터에 의해 제거됨

## 설치 및 초기 설정

### react-query 설치

```javascript
npm i react-query
or
yarn add react-query
```

### 초기 설정

- 캐시를 관리하기 위해 QueryClient instance를 생성
- QueryClientProvider를 통해 컴포넌트가 QueryClient instance에 접근할 수 있도록 App 컴포넌트 최상단에 추가

```javascript
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient} />;
}

export default App;
```

## 기존 요청 방식 VS react-query 요청방식

- 기존 요청 방식 : isLoading과 data를 state로 가지며, 서버 데이터를 불러온 후 상태 update
- react-query : useQuery Hook 을 이용해 반환받은 isLoading과 data 사용
