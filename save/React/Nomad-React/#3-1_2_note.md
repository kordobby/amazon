# setState part 1 - 2

## About setState

### Lecture Note (Part #1)

```html
  <script type="text/babel">
    const root = document.getElementById("root");

    function App() {
      const [counter, modifier] = React.useState();
      console.log(data); // Array를 하나 받음 [undefined, function]
      /* undefined = data, function =  this function will change data*/
      return (
      <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick = {countUp}>Click me</button>
      </div>
    );
  }
    ReactDOM.render(<App />, root);
  </script>

</html>
```

### Memo 
* 매번 데이터를 업데이트하고 리렌더링을 해주는 방법에 대해 알아보자</br>

    ```javascript
    const data = React.useState();
    console.log(data)
    // [undefined, f]

    data[0] = undefined // data
    data[1] = function // this function will change data
    ```
* 우리는 data 의 리스트에 data와 function을 넣어주면 됨!
    ```javascript
     const x = [1, 2, 3]
     const [a, b, c] = x;
     a // 1
     b // 2
     c // 3
     ```
     ```javascript
      /* 위 방법을 참고한 기본 코드 양식 */
      const [counter, modifier] = React.useState();
     ``` 

 ### Lecture Note (Part #2)
```javascript
  <script type="text/babel">
    const root = document.getElementById("root");

    function App() {
      /* modifier에 함수명은 자유롭게 작성 */
      let [counter, setCounter] = React.useState(0); // .useState(0) => counter의 초기 데이터 값
      const onClick = () => {
        setCounter(counter + 1);
        // 어떤 값을 부여하던 modifier 함수는 그 값으로 업데이트하고 리렌더링을 함 
      }
      return (
      <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick = {onClick}>Click me</button>
      </div>
    );
  }
    ReactDOM.render(<App />, root);
  </script>
```

### Memo 

```javascript
      // [data, modifier] 
     let [counter, setCounter] = React.useState(0);
                                  // .useState(0) => counter의 초기 데이터 값
        const onClick = () => {
          setCounter(counter + 1); // setState 방법
         // 어떤 값을 부여하던 modifier 함수는 그 값으로 업데이트하고 리렌더링을 함 
         /* 하지만 어쩌면 counter가 다른 곳에서 변경되어서 우리가 생각했던 값이 아닐 수 있음
           => 다른 방법은 뒷 강의에서 배우자 */
        }
        return (
        <div>
          <h3>Total clicks: {counter}</h3>
          <button onClick = {onClick}>Click me</button>
                            <!-- onClick 함수 연결 -->
        </div>
      );
    }
 ```