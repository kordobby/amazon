# Document
<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 📓 Document

### #1. document 객체

- document? → DOM 트리의 최상위 객체
- 브라우저는 HTML 문서 로드 전 document 객체를 먼저 생성하고 이 객체를 뿌리로하는 DOM 트리를 생성
- document 객체의 역할?
    - property로 HTML 문서의 전반적인 속성을 나타냄
    - method로 DOM 객체 검색
    - method로 새로운 DOM 객체 생성
    - method로 HTML 문서의 전반적 제어 지원

### #2. Event Listener

- on ~ : ~한 이벤트 발생 시
- 이벤트 리스너는 70여개 이상의 이벤트가 지원됨
    
```javascript
  onclick
  onerror
  onmouseover
  onscroll
  onkeypress
  onload
```

### #3. 주요 property

- title, body, head : html 문서의 ```<title>, <body>, <head>``` 태그
- URL : 현재 문서의 URL
- location : 현재 문서의 URL 정보를 가진 location 객체의 레퍼런스
- referrer : 이 HTML 문서를 로드한 원래 문서의 URL 문자열. 이 문서가 처음이면 빈 문자열

### #4. 주요 collection

- images : 문서 내의 모든 ```<img>``` 객체들의 컬렉션
- links : 문서 내의 href 속성을 가진 모든 링크 객체들의 컬렉션
- forms : 문서 내의 모든 폼 객체들의 컬렉션

### #5. 주요 method
```javascript
getElementById() // ID 명으로 첫 번째 DOM 객체 리턴
getElementByTagName() // 특정 태그명을 가진 모든 태그 컬렉션 형태로 리턴
getElementByClassName() // 특정 클래스명을 가진 모든 태그 컬렉션 형태로 리턴
open() // 컨텐츠를 모두 지우고 새로운 HTML 컨텐츠를 쓸 수 있도록 열기
write(), writeIn() // document에 HTML 컨텐츠 삽입. in이 붙은건 \n 추가 출력
close() // document 객체에 있는 HTML 컨텐츠를 부라우저에 출력, 더이상 쓰기를 받지 않음
```
```javascript
// 윈도우에 출력된 HTML text를 지워버리고 새로운 내용 출력하기 //
document.open()
document.write()
document.close()
```

### #6. HTML 문서의 동적 구성

- HTML 문서의 로드가 완료된 document에 새로운 HTML 태그를 추가하는 방법은,
추가하고 싶은 HTML 태그를 나타내는 DOM 객체를 생성해 DOM 태그에 직접 삽입하는 것
    - DOM 객체 동적 생성
    :  document.createElement(”태그이름")

      ```javascript
      let newDIV = document.createElement("div")   // 객체 생성
        
      newDIV.innerHTML = "새로 생성된 div"            // HTML 텍스트 삽입
      newDIV.setAttribute("id", "newDiv")          // 속성 추가
      newDIV.style.backgroundColor = "grey"        // css 스타일 추가
      ```
        
    - DOM 트리에 삽입 :  DOM 객체를 DOM 트리에 삽입하는 방법은 여러가지가 있고 2가지 방법이 대표적  
        ```javascript
        부모.appenChild(DOM객체)               // 마지막 자식으로 삽입
        부모.insertBefore(DOM객체 [, 기준자식]   // 자식객체 중 기준 자식 앞에 삽입
        ```
        
    - DOM 객체의 삭제 :  DOM 객체의 삭제는 removeChild() 메소드로 함 
        ```javascript
        부모.removeChild(자식객체)          
        ```
        
        ```javascript
        // id=testId인 DOM 객체를 DOM 트리에서 떼어내고자 할 때
        
        let test = document.getElementById("testId")
        let parent = testId.parentElement
        parent.removeChild(test)
        ```
        

---

## 📓 EventTarget - Method ( addEventListener)

### #1. EventTarget.addEventListener()

- 지정한 유형의 이벤트를 대상이 수신할 때마다 호출할 함수를 설정
- 일반적인 대상 : Element / Document / Window
- 지정한 이벤트 유형의 EventTaget 수신기 리스트에 EventListener 를 구현한 함수 또는 객체를 추가하는 방식으로 동작
- 구문
    
    ```jsx
    addEventListener(type, listener);
    addEventListener(type, listener, options);
    addEventListener(type, listener, useCapture);
    ```
    
- 매개변수
  * https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
  - type : 수신할 이벤트 유형을 나타내는 대소문자 구분 문자열
    * https://developer.mozilla.org/ko/docs/Web/Events
  - listener : 지정한 이벤트를 수신할 객체
    - EventListner 인터페이스를 구현하는 객체이거나, Javascript 함수여야 함.
  - options : 이벤트 수신기 특징을 지정할 수 있는 객체
  - useCapture : 이벤트 대상의 DOM 트리 하위에 위치한 자손 eventTarget으로 이벤트가 전달되기 전, 이 수신기가 먼저 발동돼야 함을 나타내는 불리언 값