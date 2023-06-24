# Javascript의 객체 모델 BOM (1)

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## BOM / DOM
### * BOM
: 브라우저 창에 대한 객체 / BOM 객체의 최상위 객체는 window 객체
### * DOM
: 브라우저 안에 출력될 HTML 창에 대한 객체 / DOM 트리의 루트는 document 객체

<hr>

### #1. BOM (Browser Object Model :: 브라우저 객체 모델)

- 브라우저에 대한 모든 내용을 담고있는 객체
- 브라우저에 관한 정보를 제공하거나 브라우저의 모양을 제어하도록 제공하는 객체들
- 대표적인 객체들 ?
    
    ```javascript
    window 객체(최상위)
    	- location 객체 (location 관련)
    	- navigator 객체
    	- history 객체 (앞뒤 페이지 이동 정보 기록)
    	- screen 객체
    	- document 객체
    	- string, boolean, object, number, function, array 등의 자료형
    ```
    
    - window 객체는 모든 BOM 객체들의 조상, 즉 최상위 객체임
    - 모든 객체를 다 포함하고 있기 때문에 코딩할 때는 굳이 표기하지 않고 생략 가능
    - 하나의 윈도우(열린 창)마다 하나의 window 객체가 생성됨
    </br>
    </br>
 ### 1) window 객체
  * 다른 BOM 객체의 최상위 개념
  * alert(), prompt() 등 많은 method를 가짐
  * var 키워드로 선언한 일반 변수도 window 객체의 속성이 됨
  * window 객체 생성 method : open(URL, name, features, replaced)
        
```html
  * 매개 변수
    - URL : HRML 페이지 URL
    - name : 윈도우 간 통신에 사용하는 이름
    - features : 윈도우 형태 옵션
    - replaced : 히스토리 리스트 옵션
```
        
```html
  * 윈도우 객체 생성 예시
    window.open('https://google.com', 'child', 'width=500', 'height=300', true);
 ```
        
 * window 형태 옵션
        
```html
height : 새 윈도우의 높이
width : 새 윈도우의 너비
location : 주소 입력창 유무
menubar : 메뉴 유무
resizable : 화면 크기 조절 가능 여부
status : 상태 표시줄 유무
toolbar : 툴바 유무
left: 왼쪽 기준 팝업 위치 지정
top: 상단 기준 팝업 위치 지정
scrollbars: 스크롤바 유무
fullscreen: 풀스크린 출력
channelmode: 채널모드 출력
  *픽셀값 혹은 yes, no, 1, 0으로 값 입력 가능
```
        
 * window.onload : 윈도우 객체 로드 완료 시 실행되는 객체
        
```javascript
  window.onload = function() {};
```

### 2) screen 객체
  - 웹 브라우저 화면이 아닌 운영체제 화면의 속성을 갖는 객체
  - screen 객체의 속성
```html
  screen : 객체의 속성
  width : 화면의 너비
  height : 화면의 높이
  availWidth : 실제 화면에서 사용 가능한 너비
  availHeight 
  colorDepth : 사용 가능한 색상 수
  pixelDepth : 한 픽셀당 비트 수
```
        

### 3) location 객체
- 웹 브라우저의 주소 표시줄과 관련된 객체

### 4) navigator 객체
- 웹 페이지를 실행 중인 브라우저에 대한 정보가 담긴 객체
- navigator 객체의 속성
        
 ```html
  appCodeName : 브라우저의 코드 이름
  appName : 브라우저의 이름
  appVersion : 브라우저의 버전
  platform : 사용 중인 운영체제의 시스템 환경
  userAgent : 웹브라우저 전체 정보
 ```

<hr>

