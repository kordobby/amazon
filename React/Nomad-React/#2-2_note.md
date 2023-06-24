# Our First React Element

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html>

<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<!-- react JS 는 엔진과 같으며 interactive한 화면을 만들어주는 기능을 함 -->
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
<!-- react-dom은 React Element를 HTML 에 두는 역할을 함 -->
<script>
  const root = document.getElementById("root");
  const span = React.createElement(
    "span" /* argument 1 : tag */,
    { id: "sexy-span", style: { color: "red" } } /* argument 2 : property */,
    "Hello I'm a span" /* argument 3 : 내용 */
  );
  /* redner: 여기 React Element를 가지고 HTML로 만들어 배치한다는 의미 */
  ReactDOM.render(span, root);

  /* Vanilla는 HTML에서 시작하고 JavaScript에서 끝난다! */
  /* React는 Javascript 에서 시작하고 HTML에서 끝난다! */
</script>
```
