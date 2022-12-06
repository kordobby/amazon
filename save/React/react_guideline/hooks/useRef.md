# useRef

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## 1. Node
* DOM 은 노드(Node)들이 트리 형태로 구조화 된 데이터 표현
* 노드는 DOM 트리를 구성하는 최소한의 단위이며, 기본 요소
* HTML 페이지를 DOM 으로 표현할 때는 HTML 태그 말고도 다른 여러가지 타입의 노드들이 생성됨

### * Node Type
* HTML 페이지에서 가장 중요한 노드 타입은 `ELEMENT_NODE`, `ATTRIBUTE_NODE`
</br> : 이 두 노드는 태그와 태그의 속성을 담는 노드로 HTML DOM 표현의 근간이 됨
* Node 타입별 HTML 용도
   * ELEMENT_NODE : `<body>, <a>, <div>, <style>, <script>, <h1>, <span>`
   * ATTRIBUTE_NODE : `id="myelement", class="align-right", width='300'`
   * 이외에도 다양한 NODE 가 있음

* HTML 페이지에서 가장 중요한 노드 타입은 ELEMENT_NODE, ATTRIBUTE_NODE!

### * 프로퍼티(Property)와 어트리뷰트(Attribute) 속성의 이해
* Property 와 Attribute 모두 속성을 의미하지만, 그 적용 대상은 다름
   * Property : DOM 의 속성
   * Attribute : HTML 태그의 속성
* 웹브라우저가 HTML 페이지를 읽어 DOM을 생성할 때, HTML 태그의 attr을 읽어 파싱을 하며, 속성이 HTML 표준 속성이면 DOM에도 동일한 Property가 만들어짐
   * 표준 속성인 경우, HTML 어트리뷰트와 DOM 프로퍼티는 속성 값 또한 공유
   * HTML 태그의 속성이 표준 속성이 아닌 경우, DOM 프로퍼티는 생성되지 않음
    <br/>  HTML 태그의 비표준 속성은 사용자 커스텀 attr이 됨
* Javascript로 DOM 노드에 사용자 정의 속성이나 메서드를 추가할 수 있음
   * DOM에 추가한 커스텀  ㅍ DOM에서만 접근 가능한 속성이 되며, HTML attr을은 생성되지 않음
   * 생성된 DOM 속성은 DOM 노드 객체의 속성이 되며, 객체의 속성 접근 방식으로 접근이 가능
   

    ```html 
    // HTML
      <body id = ”page” > </body>
    // DOM obj. Property 로 전환
      `body.id` = "page" // 이렇게 전환이 되어서 접근 가능
    ```
    ```html
    // 표준 속성과 비표준 속성의 property 생성 예시 #1
      <body id=”test” something=”non-standard”>
        <script>
          alert(document.body.id); // test
          *!*
          // 표준이 아닌 속성은 대응되는 프로퍼티가 생기지 않음
          alert(document.body.something); // undefined
          */!*
        </script>
      </body>
    ```
    ```html
    // 표준 속성과 비표준 속성의 property 생성 예시 #2
      <body id=”body” type=”…”>
        <input id=”input” type=”text”>
        <script>
          alert(input.type); // text
          *!*
          alert(body.type); // undefined: type은 body의 표준 속성이 아니므로 DOM 프로퍼티가 생기지 않음
          */!*
        </script>
      </body>
    ```
    ```html
    // 비표준 property 읽는 방법
      <body something=”non-standard”>
        <script>
          alert(document.body.getAttribute(‘something’)); // non-standard
        </script>
      </body>
    ```

## 2. ref?
### ref
* reference의 준말로, 참고-참조 정도로 생각하면 좋을듯?
* `ref` 는 render method에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법을 제공함
* `ref` 는 일반 객체로 React 는 이 객체를 통해 DOM에 직접적인 접근을 가능하게 함
```javascript
  console.log(ref) // { current : null }
```

## 3. useRef란?
* javascript에서 특정 Dom을 선택하는 역할 ex) getElementById, querySelector
* 특정 DOM에 접근할 때 사용
  * 특정 엘리먼트의 크기를 가져와야 하는 상황?
  * 스크롤바 위치를 가져오거나 설정
  * 포커스를 설정
* 원하는 위치에  `ref={}` 의 형태로 작성하면 됨
* 포커스를 잡으려면 nameInput.current.focus() 형태로 작성


## 4. Ref 사용법 정리

### 4-1. Ref 객체 생성
 * `useRef` 함수로 `Ref` 객체를 생성
```javascript
  import { useRef } from 'react';

  // ...

  const ref = useRef();
```

### 4-2. ref Prop 사용하기
 * `ref Prop`에다가 앞에서 만든 Ref 객체를 내려주기
```javascript
  const ref = useRef();

  // ...

  <div ref={ref}> ... </div>
```

### 4-3. Ref 객체에서 DOM 노드 참조하기
* Ref 객체의 `current` 라는 프로퍼티를 사용하면 DOM 노드를 참조할 수 있음
* `current` 값은 없을 수도 있으니까 반드시 값이 존재하는지 검사하고 사용해야함
```javascript
const node = ref.current;
if (node) {
  // node 를 사용하는 코드
}
```

### [ 사용 예시 ] : 이미지 크기 구하기
 * `img` 노드의 크기를 `ref` 를 활용해서 출력
 * `img` 노드에는 너비 값인 `width` 와 높이 값인 `height` 라는 속성이 있음</br>
  => Ref 객체의 current로 DOM 노드를 참조해서 두 속성 값을 가져와보기

```javascript
import { useRef } from 'react'; // 1. 나 useRef 쓸거임ㅋ

  function ImageWithRef() {
    const handleSizeClick = () => {
        // 1. 파일의 Input node를 참조할 Ref 객체를 생성
        const imgRef = useRef();
        // 2. Ref 객체의 current로 DOM 노드를 참조
        const imgNode = imgRef.current;

        // 3. handleSizeClick 함수에서 이미지 노드에 해당하는 imgRef current 값이 있는지 확인
        if (!imgNode) return;

        // 4. 비구조화를 통한 변수 생성 
        const { width, height } = imgNode;
        console.log(`${width} x ${height}`);
      };


      return (
        <div>
        {/* 1-1. imgRef 객체를 파일 인풋에 ref Prop으로 내려줌 */}
          <img src={src} ref={imgRef} alt="크기를 구할 이미지" />
          <button onClick={handleSizeClick}>크기 구하기</button>
        </div>
      );
  }
```
