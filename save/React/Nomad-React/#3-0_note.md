# Understanding part One

## Make elements & render


```html
<!DOCTYPE html>
<html>
<body>
  <div id="root"></div>
</body>

<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <script type="text/babel">
    const root = document.getElementById("root");

    /* 강의 요악 #1 : 만약 UI를 업데이트 하고 싶으면 render 함수를 다시 호출하면 됨 */
    let counter = 0; 
    function countUp() {
      counter = counter + 1;
      render();
    }

    /* render 함수  */
    function render() {
      ReactDOM.render(<Container />, root);
    }
    const Container = () => (
      /* 강의 요악 #2 : 컴포넌트나 JSX에 변수를 추가하고 싶을 때는  { } 안에 작성해주면 됨 */
      <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick = {countUp}>Click me</button>
      </div>
    );
    render();
  /* Container 라는 React element를 만들고 있는데, 이것은 저 위의 함수에 포함된 태그를 담고 있다. */
  </script>

</html>
```
