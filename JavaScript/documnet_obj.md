# Document
<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## ๐ย Document

### #1. document ๊ฐ์ฒด

- document? โ DOM ํธ๋ฆฌ์ ์ต์์ ๊ฐ์ฒด
- ๋ธ๋ผ์ฐ์ ๋ HTML ๋ฌธ์ ๋ก๋ ์  document ๊ฐ์ฒด๋ฅผ ๋จผ์  ์์ฑํ๊ณ  ์ด ๊ฐ์ฒด๋ฅผ ๋ฟ๋ฆฌ๋กํ๋ DOM ํธ๋ฆฌ๋ฅผ ์์ฑ
- document ๊ฐ์ฒด์ ์ญํ ?
    - property๋ก HTML ๋ฌธ์์ ์ ๋ฐ์ ์ธ ์์ฑ์ ๋ํ๋
    - method๋ก DOM ๊ฐ์ฒด ๊ฒ์
    - method๋ก ์๋ก์ด DOM ๊ฐ์ฒด ์์ฑ
    - method๋ก HTML ๋ฌธ์์ ์ ๋ฐ์  ์ ์ด ์ง์

### #2. Event Listener

- on ~ : ~ํ ์ด๋ฒคํธ ๋ฐ์ ์
- ์ด๋ฒคํธ ๋ฆฌ์ค๋๋ 70์ฌ๊ฐ ์ด์์ ์ด๋ฒคํธ๊ฐ ์ง์๋จ
    
```javascript
  onclick
  onerror
  onmouseover
  onscroll
  onkeypress
  onload
```

### #3. ์ฃผ์ property

- title, body, head : html ๋ฌธ์์ ```<title>, <body>, <head>``` ํ๊ทธ
- URL : ํ์ฌ ๋ฌธ์์ URL
- location : ํ์ฌ ๋ฌธ์์ URL ์ ๋ณด๋ฅผ ๊ฐ์ง location ๊ฐ์ฒด์ ๋ ํผ๋ฐ์ค
- referrer : ์ด HTML ๋ฌธ์๋ฅผ ๋ก๋ํ ์๋ ๋ฌธ์์ URL ๋ฌธ์์ด. ์ด ๋ฌธ์๊ฐ ์ฒ์์ด๋ฉด ๋น ๋ฌธ์์ด

### #4. ์ฃผ์ collection

- images : ๋ฌธ์ ๋ด์ ๋ชจ๋  ```<img>``` ๊ฐ์ฒด๋ค์ ์ปฌ๋ ์
- links : ๋ฌธ์ ๋ด์ href ์์ฑ์ ๊ฐ์ง ๋ชจ๋  ๋งํฌ ๊ฐ์ฒด๋ค์ ์ปฌ๋ ์
- forms : ๋ฌธ์ ๋ด์ ๋ชจ๋  ํผ ๊ฐ์ฒด๋ค์ ์ปฌ๋ ์

### #5. ์ฃผ์ method
```javascript
getElementById() // ID ๋ช์ผ๋ก ์ฒซ ๋ฒ์งธ DOM ๊ฐ์ฒด ๋ฆฌํด
getElementByTagName() // ํน์  ํ๊ทธ๋ช์ ๊ฐ์ง ๋ชจ๋  ํ๊ทธ ์ปฌ๋ ์ ํํ๋ก ๋ฆฌํด
getElementByClassName() // ํน์  ํด๋์ค๋ช์ ๊ฐ์ง ๋ชจ๋  ํ๊ทธ ์ปฌ๋ ์ ํํ๋ก ๋ฆฌํด
open() // ์ปจํ์ธ ๋ฅผ ๋ชจ๋ ์ง์ฐ๊ณ  ์๋ก์ด HTML ์ปจํ์ธ ๋ฅผ ์ธ ์ ์๋๋ก ์ด๊ธฐ
write(), writeIn() // document์ HTML ์ปจํ์ธ  ์ฝ์. in์ด ๋ถ์๊ฑด \n ์ถ๊ฐ ์ถ๋ ฅ
close() // document ๊ฐ์ฒด์ ์๋ HTML ์ปจํ์ธ ๋ฅผ ๋ถ๋ผ์ฐ์ ์ ์ถ๋ ฅ, ๋์ด์ ์ฐ๊ธฐ๋ฅผ ๋ฐ์ง ์์
```
```javascript
// ์๋์ฐ์ ์ถ๋ ฅ๋ HTML text๋ฅผ ์ง์๋ฒ๋ฆฌ๊ณ  ์๋ก์ด ๋ด์ฉ ์ถ๋ ฅํ๊ธฐ //
document.open()
document.write()
document.close()
```

### #6. HTML ๋ฌธ์์ ๋์  ๊ตฌ์ฑ

- HTML ๋ฌธ์์ ๋ก๋๊ฐ ์๋ฃ๋ document์ ์๋ก์ด HTML ํ๊ทธ๋ฅผ ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ์,
์ถ๊ฐํ๊ณ  ์ถ์ HTML ํ๊ทธ๋ฅผ ๋ํ๋ด๋ DOM ๊ฐ์ฒด๋ฅผ ์์ฑํด DOM ํ๊ทธ์ ์ง์  ์ฝ์ํ๋ ๊ฒ
    - DOM ๊ฐ์ฒด ๋์  ์์ฑ
    :  document.createElement(โํ๊ทธ์ด๋ฆ")

      ```javascript
      let newDIV = document.createElement("div")   // ๊ฐ์ฒด ์์ฑ
        
      newDIV.innerHTML = "์๋ก ์์ฑ๋ div"            // HTML ํ์คํธ ์ฝ์
      newDIV.setAttribute("id", "newDiv")          // ์์ฑ ์ถ๊ฐ
      newDIV.style.backgroundColor = "grey"        // css ์คํ์ผ ์ถ๊ฐ
      ```
        
    - DOM ํธ๋ฆฌ์ ์ฝ์ :  DOM ๊ฐ์ฒด๋ฅผ DOM ํธ๋ฆฌ์ ์ฝ์ํ๋ ๋ฐฉ๋ฒ์ ์ฌ๋ฌ๊ฐ์ง๊ฐ ์๊ณ  2๊ฐ์ง ๋ฐฉ๋ฒ์ด ๋ํ์   
        ```javascript
        ๋ถ๋ชจ.appenChild(DOM๊ฐ์ฒด)               // ๋ง์ง๋ง ์์์ผ๋ก ์ฝ์
        ๋ถ๋ชจ.insertBefore(DOM๊ฐ์ฒด [, ๊ธฐ์ค์์]   // ์์๊ฐ์ฒด ์ค ๊ธฐ์ค ์์ ์์ ์ฝ์
        ```
        
    - DOM ๊ฐ์ฒด์ ์ญ์  :  DOM ๊ฐ์ฒด์ ์ญ์ ๋ removeChild() ๋ฉ์๋๋ก ํจ 
        ```javascript
        ๋ถ๋ชจ.removeChild(์์๊ฐ์ฒด)          
        ```
        
        ```javascript
        // id=testId์ธ DOM ๊ฐ์ฒด๋ฅผ DOM ํธ๋ฆฌ์์ ๋ผ์ด๋ด๊ณ ์ ํ  ๋
        
        let test = document.getElementById("testId")
        let parent = testId.parentElement
        parent.removeChild(test)
        ```
        

---

## ๐ย EventTarget - Method ( addEventListener)

### #1. EventTarget.addEventListener()

- ์ง์ ํ ์ ํ์ ์ด๋ฒคํธ๋ฅผ ๋์์ด ์์ ํ  ๋๋ง๋ค ํธ์ถํ  ํจ์๋ฅผ ์ค์ 
- ์ผ๋ฐ์ ์ธ ๋์ : Element / Document / Window
- ์ง์ ํ ์ด๋ฒคํธ ์ ํ์ EventTaget ์์ ๊ธฐ ๋ฆฌ์คํธ์ EventListener ๋ฅผ ๊ตฌํํ ํจ์ ๋๋ ๊ฐ์ฒด๋ฅผ ์ถ๊ฐํ๋ ๋ฐฉ์์ผ๋ก ๋์
- ๊ตฌ๋ฌธ
    
    ```jsx
    addEventListener(type, listener);
    addEventListener(type, listener, options);
    addEventListener(type, listener, useCapture);
    ```
    
- ๋งค๊ฐ๋ณ์
  * https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
  - type : ์์ ํ  ์ด๋ฒคํธ ์ ํ์ ๋ํ๋ด๋ ๋์๋ฌธ์ ๊ตฌ๋ถ ๋ฌธ์์ด
    * https://developer.mozilla.org/ko/docs/Web/Events
  - listener : ์ง์ ํ ์ด๋ฒคํธ๋ฅผ ์์ ํ  ๊ฐ์ฒด
    - EventListner ์ธํฐํ์ด์ค๋ฅผ ๊ตฌํํ๋ ๊ฐ์ฒด์ด๊ฑฐ๋, Javascript ํจ์์ฌ์ผ ํจ.
  - options : ์ด๋ฒคํธ ์์ ๊ธฐ ํน์ง์ ์ง์ ํ  ์ ์๋ ๊ฐ์ฒด
  - useCapture : ์ด๋ฒคํธ ๋์์ DOM ํธ๋ฆฌ ํ์์ ์์นํ ์์ย eventTarget์ผ๋ก ์ด๋ฒคํธ๊ฐ ์ ๋ฌ๋๊ธฐ ์ , ์ด ์์ ๊ธฐ๊ฐ ๋จผ์  ๋ฐ๋๋ผ์ผ ํจ์ ๋ํ๋ด๋ ๋ถ๋ฆฌ์ธ ๊ฐ