# React - hooks

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## Hook 의 규칙
* 반드시 리액트 컴포넌트 함수 안에서 사용해야함
* 컴포넌트 함수의 최상위에서만 사용 (조건문, 반복문 안에서 못씀)

### 왜 Hook 일까?
* 우리 등산할 때 고리(Hook)에다가 여러가지 연결해서 사용하잖여? 그런 개념임
* 
* For example,
   * useState : 리액트가 관리하는 State에 연결해서 변수처럼 값을 사용!
   ```javascript
   function MyComponent() {
     const [num, setNum] = useState(0);   // 리액트가 관리하는 State에 연결
     return (
       <button onClick={ () => setNum(num + 1)}>
        {num}  // 변수처럼 값을 사용
       </button>
     );
   }
   ```
   * useEffect : 내 콜백 함수를 리액트에 연결해서 렌더링 후에 함수 실행!
   ```javascript
   function MyComponent() {
     const [num, setNum] = useState(0);
     useEffect( () => console.log(num), [num]); // 내 콜백 함수를 리액트에 연결, 렌더링 후에 함수 실행
     return (
       <button onClick= { () => setNum(num+1)}>
        {num}
       </button>
     );
   }
   ```
   * useRef : 리액트에서 관리하는 Ref 객체에 연결해서 current 값 사용!
   ```javascript
   function MyComponent() {
     const ref = useRef();  // 리액트가 관리하는 Ref 객체에 연결,
     useEffect(() => console.log(ref.current), []);  // current 값 사용
     return (
       <button ref = {ref}>
        good
       </button>
     );
   }
   ```


## 1. useState

### State 사용하기
```javascript
const [state, setState] = useState(initialState);
```

### 콜백으로 초깃값 지정
* 초깃값을 계산하는 코드가 복잡한 경우 사용
```javascript
const [state, setState] = useState( () => {
  // ...
  return initialState;
});
```

### State 변경
```javascript
setState(nextState);
```

## 2. useEffect
* 컴포넌트 함수에서 사이드 이펙트(리액트 외부의 값이나 상태를 변경할 때)에 활용하는 함수

### 처음 렌더링 후 한 번만 실행
```javascript
useEffect(() => {
  // ...
}, []);
```

### 렌더링 후 특정 값이 바뀌면 실행
* 참고로 처음 렌더링 후에도 한 번만 실행
```javascript
useEffect(() => {
  // ...
}, [dep1, dep2, dep3, ...]);
```

### 사이드 이펙트 정리(Cleanup)하기
```javascript
useEffect(() => {
  // 사이드 이펙트

  return () => {
    // 정리
  }
}, [dep1, dep2, dep3, ...]);
```

## useRef
### 생성하고 DOM 노드에 연결
```javascript
const ref = useRef();

//...

return <div ref = {ref}> 안녕 리액트 ! </div>;
```

### DOM 노드 참조하기
```javascript
const node = ref.current;
if (node) {
  // node를 사용하는 코드
}
```

## useCallback
* 함수를 매번 새로 생성하는 것이 아니라 디펜던시 리스트가 변경될 때만 함수 생성
```javascript
const handleLoad = useCallback((option) => {
  //...
}, [dep1, dep2, dep3, dep5, ...]);
```

## Custom Hook
* 자주 사용하는 Hook 코드들을 모아서 함수로 만들 수 있음
* `use000` 처럼 반드시 맨 앞에 `use` 라는 단어를 붙여서 다른 개발자들이 알아볼 수 있도록 함
* 커스텀 훅 참고사이트
- https://usehooks.com/
- https://github.com/streamich/react-use

## useAsync
* 비동기 함수의 로딩, 에러처리 시 사용할 수 있는 함수
* 함수를 `asyncFunction` 이라는 파라미터로 추상화해서 `wrappedFunction`이라는 함수를 만들어 사용하는 방식

```javascript
function useAsync(asyncFunction) {
  const [pending, serPending] = useState(false);
  const [error, setError ] = useState(null);

  const wrappedFunction = useCallback(async (...args) => {
    setPending(true);
    setError(null);
    try {
      return await asyncFunction(...args);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  }, [asyncFunction]); 
  return [pending, error, wrappedFunction];
}
```

## useToggle
* toggle 함수를 호출할 때마다 value 값이 참/거짓으로 번갈아가며 바뀜
```javascript
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prevValue) => !prevValue);
  return [value, toggle];
}
```