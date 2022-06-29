# useQuery

## 데이터를 가져오는 방법

- GET 요청과 같은 CREATE 작업을 할 때 사용되는 훅

```javascript
const requestData = useQuery(Query-key, Query-function, options);
```

- 쿼리 키
  - 문자열 또는 배열
  - 캐싱 처리에 있어서 중요한 개념
  - 쿼리 키가 다르면 호출하는 API가 같더라도 캐싱을 별도로 관리
- 쿼리 함수
  - Promise를 리턴하는 함수
  - ex) axios(), fetch()
- 옵션
  - useQuery 기능을 제어

## 데이터 요청

- data : 서버 요청에 대한 데이터
- isLoading : 캐시가 없는 상태에서의 데이터 요청 중인 상태 (true / false)
- isFetching : 캐시의 유무 상관없이 데이터 요청 중인 상태 (true / false)
- isError : 서버 요청 실패에 대한 상태 (true / false)
- error : 서버 요청 실패 (object)

```javascript
const fetcher = () => {
  return axios.get("http://localhost:4000/superheroes");
};

// 방법1. 구조분해 X
const responseData = useQuery("super-heroes", fetcher);
// 방법2. 구조분해 O
const { data, isLoading, isFetching, isError, error } = useQuery(
  "super-heroes",
  fetcher
);

if (isLoading) {
  return <h2>Loading...</h2>;
}

if (isError) {
  return <h2>{error.message}</h2>; // Request failed with status code 404
}

console.log(responseData);
```
