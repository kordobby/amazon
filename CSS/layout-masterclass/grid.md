# Grid

<img src="https://img.shields.io/badge/CSS-0080B9?style=flat&logo=CSS3&logoColor=white"/>

## CSS Grid Basic Concepts

### Grid의 기본 특성
* Grid는 Flex와 같이 grid design은 Father Elements에서 진행됨
* Child-element에도 속성을 지정할 수 있기는 함

### Grid의 기본 구조
* Grid는 ROW - COLUMN 으로 구성
```css
.father {
    /* 1. 그리드 생성 */
    display : grid;

    /* 2. columns 생성 및 간격 설정 */
    grid-template-columns : 200px 200px 200px;

    /* 3. rows 생성 및 간격 설정 */
    grid-template-rows : 200px 200px 200px;

    /* 4. 그리드 간격 설정 */
    gap: 1px;
}
```
![img](/Images/gridbasic1.png)

### Grid 의 Repeat 함수
https://developer.mozilla.org/en-US/docs/Web/CSS/repeat
```html
/* <track-repeat> values */
repeat(4, 1fr)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] 1fr [col-end])
repeat(4, [col-start] min-content [col-end])
repeat(4, [col-start] max-content [col-end])
repeat(4, [col-start] auto [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(4, [col-start] min-content [col-middle] max-content [col-end])
```

```html
/* <auto-repeat> values */
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(auto-fill, [col-start] 250px [col-end])
repeat(auto-fit, [col-start] 250px [col-end])
repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])
repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])
```

```html
/* <fixed-repeat> values */
repeat(4, 250px)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])
```

* repeat(n, size)
   * 동일한 간격 반복 시에는 repeat을 이용하면 코드가 더 간단해짐!
```html
// 좌측 사진
.father {
	display : grid;
	grid-template-columns : 200px 200px 200px 200px;
	grid-template-rows : 200px 200px 200px 200px;
	gap: 1px;
}
```
```html
// 우측 사진
.father {
	display : grid;
	grid-template-columns : repeat(4, 200px);
	grid-template-rows : repeat(4, 200px);
	gap: 1px;
}
```
![img](/Images/repeat.png)

### Grid 작성 시 auto 활용

![img](/Images/gridauto.png)

```css
.father {
	display : grid;
	grid-template-columns : repeat(4, 150px);
	grid-template-rows: repeat(4, 150px);
	grid-template-areas: 
		"header header header header"
		"contents contents contents nav"
		"contents contents contents nav"
		"footer footer footer footer";
}
```
```css
.father {
    display : grid;
	grid-template-columns : repeat(auto, 150px);
	grid-template-rows: repeat(4, 150px);
	grid-template-areas: 
		"header header header header"
		"contents contents contents nav"
		"contents contents contents nav"
		"footer footer footer footer";
}
```

### Grid gap 설정

![img](/Images/gridgap.png)

* row-gap 설정
```css
.father {
	display : grid;
	grid-template-rows : 250px 250px 250px
	grid-template-columns : 250px 250px 250px
	row-gap : 10px;
}
```
* column-gap 설정
```css
.father {
	display : grid;
	grid-template-rows : 250px 250px 250px
	grid-template-columns : 250px 250px 250px
	column-gap : 10px;
}
```

## Grid Template Areas

### Grid Template Areas 

![img](/Images/gridtemplate.png)

* way to make 'grid-template-areas'
```css
.father {
	display : grid;
	grid-template-columns : repeat(4, 150px);
	grid-template-rows: repeat(4, 150px);

/* grid area 생성 */
	grid-template-areas: 
		"header header header header"
		"contents contents contents nav"
		"contents contents contents nav"
		"footer footer footer footer";
}

/* grid area 네이밍 */
.header {
	background-color: #0080B9;
	grid-area: header;
}

.nav {
	background-color: #EC4E23;
	grid-area: nav;
}

.contents {
	background-color:#FDC813;
	grid-area: contents;
}

.footer {
	background-color: #0B7526;
	grid-area: footer;
}
```
## Rows and Columns
* grid-template-areas와 비슷한 기능을 하는 속성, 자식 grid에 명시
* 자식 grid에게 어디서 시작하고 어디서 끝날지 얘기해주면 됨
* grid를 stretching 해주는 개념

```css
.father {
	display : grid;
    gap : 10px;
	grid-template-columns : repeat(4, 100px);
	grid-template-rows: repeat(4, 100px);
}

/* grid area 네이밍 */
.header {
	background-color: #0080B9;
    grid-column-start : 1;
    grid-column-end : 5;
    // end의 기준점은 line
}

.nav {
	background-color: #EC4E23;
    grid-row-start : 2;
    grid-row-end : 4;
}

.contents {
	background-color:#FDC813;
    grid-column-start : 1;
    grid-column-end : 4;
    grid-row-start : 2;
    grid-row-end : 4;
}

.footer {
	background-color: #0B7526;
    grid-column-start : 1;
    grid-column-end : 5;
}
```

### 123

### [Shortcuts] way to make 'grid-template-areas'
  * grid-column: ( start ) / ( end );
  * grid-row: ( start ) / ( end );
  * -1, -2, -3, ··· ▷ 끝에서부터 line 세기
  *  (start) / span (cell 수) ▷ 시작점과 끝점을 적는걸 대신함

```css
.father {
	display : grid;
    gap : 10px;
	grid-template-columns : repeat(4, 100px);
	grid-template-rows: repeat(4, 100px);
}

/* grid area 네이밍 */
.header {
	background-color: #0080B9;
    grid-column : 1 / 5;
    /* grid-column : 1 / -1; */
    /* grid-column : span 4; */
}

.nav {
	background-color: #EC4E23;
    grid-row-start : 2 / 4;
    /* grid-row : 2 / -2; */
    /* grid-row : span 2; */
}

.contents {
	background-color:#FDC813;
    grid-column-start : 1 / 4;
    /* grid-column : 1 / -2; */
    grid-row-start : 2 / 4;
    /* grid-row : 2 / -2; */
    /* grid-row : span 2; */
}

.footer {
	background-color: #0B7526;
    grid-column-start : 1 / 5 ;
    /* grid-column : span 4; */
}
```

## Layout using named grid lines

* grid-template-rows 및 grid-template-columns 속성으로 그리드를 정의할 때 그리드의 일부 또는 모든 라인에 이름을 지정할 수 있음

## Grid Template

* grid-template-rows 및 grid-template-columns 속성으로 그리드를 정의할 때 그리드의 일부 또는 모든 라인에 이름을 지정할 수 있음

* fraction
```css
.father {
	display : grid;
    gap : 10px;
	grid-template-columns : repeat(4, 1fr);
	grid-template-rows: repeat(4, 100px);
}

/* grid area 네이밍 */
.header {
	background-color: #0080B9;
    grid-column : 1 / 5;
    /* grid-column : 1 / -1; */
    /* grid-column : span 4; */
}

.nav {
	background-color: #EC4E23;
    grid-row-start : 2 / 4;
    /* grid-row : 2 / -2; */
    /* grid-row : span 2; */
}

.contents {
	background-color:#FDC813;
    grid-column-start : 1 / 4;
    /* grid-column : 1 / -2; */
    grid-row-start : 2 / 4;
    /* grid-row : 2 / -2; */
    /* grid-row : span 2; */
}

.footer {
	background-color: #0B7526;
    grid-column-start : 1 / 5 ;
    /* grid-column : span 4; */
}
```