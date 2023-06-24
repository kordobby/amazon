# Style-Palette

<img src="https://img.shields.io/badge/CSS-0080B9?style=flat&logo=CSS3&logoColor=white"/>

프로젝트 과정 중 자주 사용하게 되는 스타일 속성의 경우 해당 코드를 저장하고 간단하게 단어로 불러오면 아주 편리하다.

## 스타일 저장 예시 코드

```css
:root {
  --blue: #243665;
  --green: #8bd8bd;
}
```

## 저장한 스타일 사용 방법

```css
.hello {
  color: var(--blue);
  background-color: var(--green);
}
```
