# State Practice part #1

## 시간 변환 / reset 버튼

### Lecture Note
- flip 버튼을 누르면 분/시간을 작성하는 활성화 상태가 바뀜
- 시간을 작성하면 분이 자동 계산이 되고 그 반대도 이루어지게 함
- flip 시 내부 데이터 reset

```html
  <script type="text/babel">
    const root = document.getElementById("root");
    function App() {
      /* State 를 만든다는 개념! */
      const [amount, setAmount] = React.useState();  // useState() 의 () 안의 값은 data의 default가 됨
      const [flipped, setFlipped] = React.useState(false);
      const onChange = (event) => {
        setAmount(event.target.value); // console.log(event.target.input); 
      };
      const reset = () => setAmount(0);
      const onFlip = () => {
        reset()
        setFlipped((current) => !current); // flipped의 boolean 값에 따라 true와 false가 바뀌도록 함수 작성
      }
      return (
      <div>
        <div>
          <h3 className = "hi">Super Converter</h3>
          <label htmlFor = "minutes">Minutes</label>
          <input 
            value = {flipped ? amount * 60 : amount} 
            id = "minutes" 
            placeholder="Minutes" 
            type = "number"
            onChange={onChange}
            disabled = {flipped === true} />
        </div>
        
        <div>
          <label htmlFor = "hours">Hours</label>
          <input
              value = {flipped ? amount : Math.round(amount/60)} 
              id = "hours"
              placeholder="Hours"
              type = "number"
              onChange={onChange}
              disabled = {flipped === false} />  
        </div>          
        <button onClick = {reset}>Reset</button>
        <button onClick = {onFlip}>Flip</button>
      </div>
    );
  }
    ReactDOM.render(<App />, root);
  </script>
```

### Memo 
1. flipped는 단순히 true 혹은 false인 변수
2. button을 클릭하면 onFlip 함수가 실행
3. onFlip 함수는 현재 값을 받아서 그 반대의 값을 내놓음
