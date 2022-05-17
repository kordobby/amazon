# Javascript의 객체 모델 BOM / DOM (2)

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## BOM / DOM
### * BOM
: 브라우저 창에 대한 객체 / BOM 객체의 최상위 객체는 window 객체
### * DOM
: 브라우저 안에 출력될 HTML 창에 대한 객체 / DOM 트리의 루트는 document 객체

<hr>

## #2. DOM (Document Object Model :: 문서 객체 모델)

- 문서에 대한 모든 내용을 담고있는 객체로 HTML 태그를 동적으로 제어하기 위해 꼭 알아두어야 할 개념
- 브라우저는 HTML 페이지를 로드하는 과정에서 HTML 태그들을 각기 하나의 객체로 생성함
    → 즉 DOM은 HTML 태그 당 하나씩 있으며, 이름은 태그 이름과 같음

```html
<p> hello! </p>        // p 객체
<div> ... </div>       // div 객체
```

### 1) DOM 의 목적
  - 동적 HTML 제어
  - elements(요소)에 대한 접근   →   HTML, CSS 내용 변경

### 2) DOM 객체의 구성요소  →  5종류의 속성
  - property  :  DOM 객체의 멤버 변수 - HTML 문서의 전반적인 속성 내포
  - method  :  DOM 객체의 멤버 함수 - DOM 객체를 검색 / 생성 등의 전반적 제어
  - event listener  :  HTML 태그에 작성된 이벤트 리스너를 그대로 가짐
  - collection  :  정보를 집합적으로 표현하는 일종의 배열
  - css style  :  style property를 통해 HTML 태그에 적용된 CSS 스타일 시트에 접근 가능

### 3) DOM 트리
  - HTML 태그는 포함관계가 존재하며 브라우저는 HTML 페이지를 로드하며 이 포함관계에 따라 DOM 객체들을 트리구조로 생성. 이것을 DOM 트리라고 함
  - DOM 트리의 최상위 객체는 document 객체  ** document 객체는 DOM 객체가 아니고 BOM 객체

### 4) HTML 태그와 DOM 객체 사이의 관계
  - DOM 객체들은 DOM 트리에서 포함관꼐를 가지며 부모, 자식, 형제의 관계로 연결됨
  - 4가지 property가 이용됨
      - parentElement : 부모 객체
      - children : 직계 자식들의 컬렉션
      - firstElementChild : 첫 번째 직계 자식
      - lastElementrChild : 마지막 직계 자식
  - sibling 관계에 있는 DOM 객체들은 2개의 property로 접근
      - previousElementSibling
      - nextElementSibling
  - 모든 DOM 객체들은 위 6개의 property를 가지고 다음 DOM 객체를 쉽게 접근
    
### 5) DOM 객체 다루기
  - DOM 객체 찾기  :  document.getElementById()
      - DOM 트리에서 특정 DOM 객체를 찾아내고 싶을 때, id 속성값을 가지고 찾을 수 있음
      - .getElementById() 도 document 객체의 멤버임
        
```javascript
 let test = document.getElementById("testId")  //id 값이 "testId"인 태그를 찾아 변수에 저장
  test.style.color = "red"   // 해당 태그의 color 속성을 "red"로 변경
```
        
```javascript
let 변수 = 객체.객체.getter("")      // 객체들끼리 .으로 연결해 가져오는 getter
변수명.속성명(하위속성명) = "속성값"     //  setter 자동 실행
```
        
### 6) DOM 객체 찾기
```javascript
  document.getElementsByTagName()
  // 태그 이름이 같은 모든 DOM 객체들을 찾아 컬렉션 리턴
  document.getElementsByClassName()
  // class 속성이 같은 모든 DOM 객체들을 찾아 컬렉션 리턴
  document.getElementById()*
  // id는 유일한 값이므로, 하나의 element만 리턴
  querySelector(”#id”)  / querySelector(”.class”)  /  querySelector(”tag”)
  // 파라미터로 입력받은 CSS 선택자로 찾은 여러개의 element 중 첫번째 element를 리턴
  querySelectorAll(”#id”)  / querySelectorAll(”.class”)  /  querySelectorAll(”tag”)
  // 파라미터로 입력받은 CSS 선택자로 찾은 모든 element 목록을 리턴
```

### 7) innerHTML property
- 시작 태그와 종료 태그 사이에 들어있는 HTML 컨텐츠를 나타내는 문자열 정보
        
```javascript
let test = document.getElementById("testId")
test.innerHTML = "바꾸고자 하는 내용의 텍스트"
```
        
```javascript
test.innerHTML = "바꾸고 싶은 <img src='cute.jpg'> 텍스트"
```
        
### 8) this
        - this는 객체 자신을 가리키는 javascript 키워드
        - DOM 객체에서 객체 자신을 가리키는 용도로 사용됨
        
```javascript
<div onclick = "this.style.backgroundColor = 'orange'">
// 클릭 시 이 객체의 / 스타일 속성을 / 배경 = 오렌지 로 바꾸라는 뜻
 ```
 </br>

<hr>
</br>