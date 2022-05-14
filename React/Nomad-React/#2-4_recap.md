# Recap ( ~ #2-3)

## Recap Note

1. React DOM 호출 : React element를 HTML로 바꾸기 위해서 호출
2. HTML 에 empty div 생성 : React element들을 가져다 놓을 공간!
3. root DIV를 script에서 가져오고,
4. React.DOM.render : React element들을 root div에서 보여주라고 렌더
5. 사실 실제로 이렇게 하진 않고 React JS의 기초를 보여준 것 ^^

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
  /* property 에 event listener 추가 가능 */
  const btn = React.createElement(
    "button",
    {
      onClick: () => console.log("i'm clicked"),
      style: {
        backgroundColor: "tomato",
      },
    },
    "Click me"
  );
  const span = React.createElement(
    "h3",
    {
      id: "title",
      onMouseEnter: () => console.log("mouse enter"),
    },
    "Hello I'm a span"
  );

  const container = React.createElement("div", null, [span, btn]);
  /* span과 btn 모두 render 하게 div 생성, 2개의 component를 가지는 component */
  ReactDOM.render(container, root);
</script>
```
