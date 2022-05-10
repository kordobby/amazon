# modal

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS-0080B9?style=flat&logo=CSS3&logoColor=white"/>

## Modal?

: 화면 위에 하나의 작은 화면을 더 만들어 부가적인 일들을 처리할 수 있게 만드는 기능

- Pop-up 과 차이점
  : 현재 화면에 다른 화면을 하나의 창(browser)로 보여주는 기능

  <br/>

## JavaScript로 Modal 만들기

### [ 1 ] HTML 작성

```html
<!-- Open Modal-->
<button>Open Modal</button>

<!-- hidden 클래스 적용으로 초기에 화면에서 보이지 않음 -->
<div class="modal hidden">
  <!-- Modal open 시 배경 적용 (full screen shadow) -->
  <div class="modal__overlay"></div>
  <!-- Modal 창 -->
  <div class="modal__content">
    <h1>I'm a modal</h1>
    <button>X</button>
  </div>
</div>
```

  <br/>

### [ 2 ] CSS 작성

```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal__overlay {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  /* absolute : 요소의 배치 시 부모 요소가 기준이 됨 */
  position: absolute;
}

.modal__content {
  /* absolute : 요소의 배치 시 요소 자기자신을 기준으로 움직임 */
  /* 필요 시 z-index 조정합시다! */
  position: relative;
}

/* modal 열고 닫을 때 추가-제거할 클래스 */
.hidden {
  display: none;
}
```

  <br/>
  
### [ 3 ] JS 작성
```javascript
const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal__overlay");
const closeBtn = modal.querySelector("button");

/_ 보이고자 하는 모달 창에 hidden 클래스 제거 _/
const openModal = () => {
modal.classList.remove("hidden");
}

/_ 모달 창 숨기기 : hidden 클래스 추가 _/
const closeModal = () => {
modal.classList.add("hidden");
}

/_ 모달 창 숨기기 : 배경화면 클릭, 버튼 클릭 _/
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/_ 모달 창 열기 _/
openButton.addEventListener("click", openModal);

```


```
