# State Practice part #1

## 시간 변환 / reset 버튼

### Lecture Note

```html
  <script type="text/babel">
    const root = document.getElementById("root");
    function App() {
      /* State 를 만든다는 개념! */
      const [minutes, setMinutes] = React.useState();  // useState() 의 () 안의 값은 data의 default가 됨
      const onChange = (event) => {
        setMinutes(event.target.value); // console.log(event.target.input); 
      };
      const reset = () => setMinutes(0);
      return (
      <div>
        <div>
          <h3 className = "hi">Super Converter</h3>
          <label htmlFor = "minutes">Minutes</label>
          <input 
            value = {minutes} 
            id = "minutes" 
            placeholder="Minutes" 
            type = "number"
            onChange={onChange} />
        </div>
        
        <div>
          <label htmlFor = "hours">Hours</label>
          <input
              value = {Math.round(minutes/60)} 
              id = "hours"
              placeholder="Hours"
              type = "number"
              disabled />
        </div>
        <button onClick = {reset} >Reset</button>
      </div>
    );
  }
    ReactDOM.render(<App />, root);
  </script>
```

### Memo 