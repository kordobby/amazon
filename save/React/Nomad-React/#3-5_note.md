# Input and State

## Input의 value를 실시간으로 표시하기 

### Lecture Note (Part #1)

```html
  <script type="text/babel">
    const root = document.getElementById("root");
    function App() {
      /* State 를 만든다는 개념! */
      const [minutes, setMinutes] = React.useState();  // useState() 는 array를 주고 현재의 데이터와 함수를 줌
      const onChange = (event) => {
        setMinutes(event.target.value); // console.log(event.target.input); 
      };
      return (
      <div>
        <h3 className = "hi">Super Converter</h3>
        <label htmlFor = "minutes">Minutes</label>
        <input 
          value = {minutes} 
          id = "minutes" 
          placeholder="Minutes" 
          type = "number"
          onChange={onChange} />
        <h4>You want to convert {minutes} </h4>
        <label htmlFor = "hours">Hours</label>
        <input id = "hours" placeholder="Hours" type = "number" />
      </div>
    );
  }
    ReactDOM.render(<App />, root);
  </script>
```

### Memo 
1. 우리는 react에서 가져온 state를 사용하고 있음 => 데이터도 얻고 업데이트도 진행하고 있음
2. array의 첫번째 item은 value이며 두 번재 item은 component를 새로고침할 때 쓰는 함수
3. state 로써 minutes라는 값을 가지고 있는데 우리가 해야하는건 input의 value로 넣어주는 것
4. 그럼 input의 value는 state의 value와 같아짐
5. 이제 변화가 생길 때 마다 그 변화(유저가 뭔가를 작성하는 것) 를 리스닝 하고 싶음
6. onChange는 변화를 감지하고 "somebody wrote를 작성함"

