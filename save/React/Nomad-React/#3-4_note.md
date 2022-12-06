# State Functions

## make State Functions

### Lecture Note

```html
  <script type="text/babel">
    const root = document.getElementById("root");

    function App() {
      const [counter, setCounter] = React.useState(0); 
      const onClick = () => {
        // setCounter(counter + 1);  setState 방법
        /* 어쩌면 counter가 다른 곳에서 변경되어서 우리가 생각했던 값이 아닐 수 있음 */
        setCounter((current) => current + 1); 
      }
      return (
      <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick = {onClick}>Click me</button>
      </div>
    );
  }
    ReactDOM.render(<App />, root);
```

### Memo 
* onClick 함수 내에서 몇 번을 실행하던지 counter가 1만 증가
    ```javascript
    const [counter, setCounter] = React.useState(0); 
    const onClick = () => {
      setCounter(counter + 1);
    }
    ``` 
    * 어쩌면 counter가 다른 곳에서 변경되어서 우리가 생각했던 값이 아닐 수 있음
    </br>
    </br>

* 실행한 횟수만큼 counter가 증가
    ```javascript
    const [counter, setCounter] = React.useState(0); 
    const onClick = () => {
      setCounter((firstArgument)=> firstArgument + 1);
    }
    ```
   * 이전 값을 이용해서 현재값에 더해나가는 방법
   * 현재 state인 현재 counter 값을 줄거고, 예상치못한 업데이트가 일어나도 혼동을 막아줌
   * 이 방법이 훨씬 안전한 이유는 리액트가 이 current가 확실히 현재값이라는걸 보장함
   * 현재 state를 기반으로 계산을 하고 싶다면, 함수를 이용