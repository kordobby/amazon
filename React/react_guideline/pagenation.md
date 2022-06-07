# 페이지네이션

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## 페이지네이션이란?

### 오프셋 기반 페이지네이션
 : 받아온 데이터 갯수를 기준

### 커서 기반 페이지네이션
* 커서 Cursor
 : 데이터를 가리키는 값으로 지금까지 받은 데이터를 표시한 책갈피

* 예시
    * Request  : 데이터 10개 보내줘!
    ```javascript
      GET https://example.com/posts?limit=10
    ```
    * Response
    ```javascript
    {
      "paging" : {
        "count" : 30,
        "nextCursor" : "WerZxc"
      },
      "posts" : [...]
    }
    ```
    * 커서 데이터 이후로 10개 보내줘
    ```javascript
      GET https://example.com/posts?cursor=WerZxc&limit=10
    ```