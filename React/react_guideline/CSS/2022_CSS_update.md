# CSS update in 2022

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## #1. color-mix
* 브라우저에서 색상을 혼합해서 사용 가능해짐
   * 원한다면 혼합 비율을 지정 선택 가능
```css
.container {
  /* 50% red + 50% blue */
  background-color : color-mix(red, blue);
}
```
```css
.container {
  background-color : color-mix(red 30%, blue 70%);
}
```
* 브랜드 색상으로부터 색상을 도출하는데 매우 유용
```css
/* 브랜드 색상을 CSS에 저장하고, */
:root {
  --brandColor : blue;
}
/* color-mix 내부에서 사용 */
.container {
  background-color : color-mix((--brandColor) 50%, white 10%);
}
```

## #2. accent-color
* 커스터마이징이 어려웠던 HTML 요소의 색상 변경 가능
   * Radio 버튼, 체크 박스, 진행 표시줄, 범위 슬라이더 등

![img](/Images/accentcolor.png)
```css
/* tint everything */
:root {
  accent-color : hotpink;
}

/* tint one element */
progress {
  accent-color : indigo;
}
```
```html
<style>
  :root {
    accent-color : blue;
  }
</style>
<body>
  <input type = "checkbox" checked />
  <input type = "radio" checked />
  <input type= "range" />
  <progress max = "100" value = "50"> 50% </progress>
</body>
```

## #3. color-contrast()
```css
* 배경에 대비해 가장 어울리는 색을 골라줌
.box{
  background-color : red;
  color : color-contrast(red);
          /* default : white or black */
}
```
```css
color : color-contrast(blue vs pink, yellow, green);
/* 1. 배경색 지정 (blue) */
/* 2. vs 뒤에는 브라우저가 고를 수 있는 색상 작성 */
```

## #4. inert
* CSS 속성이 아니라 HTML 속성
* inert 는 페이지의 섹션을 "freeze" 할 수 있음
* HTML 코드 중 inert 속성을 가진 것은 클릭, 포커스 또는 상호 작용을 수신하지 않고 멈춰버림
* 유저가 이미 한 번 클릭하고나면, 버튼을 얼리고 싶다면, 또는 양식을 전송하고 유저가 다른 곳을 클릭하지 않도록 하기 위해 사용
```html
<form inert>
  <input type = "..." />
  <button> Save </button>
</form>
```

## #5. :has()
* 부모 요소에 특정 자식이 있는지 여부에 따라 부모 요소의 스타일을 할 수 있음
* 이전에는 부모 안에 있을 때에만 자식을 스타일을 할 수 있었음
```css
form > button
```
```css
form:has(button) {
}

li:has(a){
}
```
```css
form:has(button:hover){
}
```

## #6. Viewport Units
![img](/Images/vpunit.png)
* vw : viewport width (넓이)
* vh : viewport height (높이)
* viewport : 웹 사이트를 볼 수 있는 영역 또는 윈도우
* 모바일에서는 창 크기를 조정할 수 없기 때문에 100vh 는 화면 높이의 100% 이고, 100vw 는 화면 너비의 100%임
* lvh(largest viewport height) : 가장 큰 viewport height
   * 네비게이션이 없는 화면 크기
* svh(smallest viewport height) : 가장 작은 viewport height
   * 네비게이션이 있는 화면 크기
* dvh(dynamic viewport height) : 동적 viewport height
   * 네비게이션이 표시되는지 여부에 따라 달라짐


## #7. @nest
* 아래 코드처럼 특정 자식에게만 스타일을 적용하도록 할 때가 있음
* 아래 같은 경우는 nav 내부의 목록을 타겟하다보니 코드가 반복됨
```css
nav {
  ...;
}
nav ul {
  ...;
}
nav ul li {
  ...;
}
```
* 우리는 지금까지 nesting selector 기호를 사용했고 @nest 규칙을 사용할 수도 있음
* @nest 는 &으로 시작하지 않는 셀렉터를 이용해서 네스팅 시 더 많은 힘을 줄 수 있음
```css
/* 이제 위에 한번만 쓰고 안에 자식을 두면(nest) 됨 */
nav {
  & ul {
    &li {
      ...;
    }
  }
}
/* & : nest selecting sign */
```
* @nest 규칙을 사용하면 아래와 같은 코드 사용 가능
* @nest 는 &로 시작하지 않는 셀렉터를 허용해서 네스팅 시 더 많은 힘을 줄 수 있음 
```css
.yoon {
  color : red;
  @nest : not(&) {
    color : blue;
  }
}
```
```css
.yoon {
  color : red;
}
:not(.yoon) {
  color : blue;
}
```

## #8. @scope
* 스타일의 범위를 지정하거나 자신만의 버블로 분리 가능
```css
@scope (header) {
  .title {
    font-size : 36px;
  }
  nav {
    display : flex;
  }
}

@scope (aside) {
  .title {
    font-size: 28px;
  }
  nav {
    display : grid;
  }
}
```

* 테마를 만들 때도 사용 가능
```css
@scope(.dark-theme) {
  .title {
    color : white;
  }
  nav {
    background-color : black;
  }
}

@scope(.light-theme) {
  .title {
    color : black;
  }
  nav {
    background-color : white;
  }
}
```

## #9. @container
* 넓이뿐만아니라 부모 요소에 대응 가능
```css
header {
  container-type : inline-size;
  container-name : header-container;
}

@container header-container (min-width : 600px) {
  nav {
    display : flex;
  }
}
```

## #10, custom-media 쿼리
* custom-media 쿼리를 이용하면 미디어 쿼리 변수를 만들고, 재사용 가능함
```css
@custom-media --darkMode (prefers-color-scheme: dark);
@custom-media --lightMode (prefers-color-scheme: light);
@custom-media --landscape (orientation: landscape);
@custom-media --portrait (orientation: portrait);
@custom-media --iPhone (max-device-width : 480px);
```
```css
@media (--darkMode) and (--portrait) and (--iPhone) {
  body {
    ...;
  }
}
@media (--lightmode) and (--portrait) and (--iPhone) {
  body {
    ...;
  }
}
```
