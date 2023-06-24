# useMemo

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## useMemo
* Memo 는 "memoized" 를 의미하는데, 이는, 이전에 계산 한 값을 재사용한다는 의미
* 성능 최적화를 위하여 연산된 값을 useMemo라는 Hook 을 사용하여 재사용하는 방법


* useMemo 의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 되고 두번째 파라미터에는 deps 배열을 넣어주면 되는데, 이 배열 안에 넣은 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값을 연산해주고, 만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됩니다.


```javascript
const count = useMemo(() => countActiveUsers(users), [users]);
```
