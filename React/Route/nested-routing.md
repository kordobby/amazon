# React - nested routing

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>
* https://devkevin0408.tistory.com/250?category=1062883

## 중첩 라우팅

- 연결된 주소 안에서 또 라우팅을 해야하는 경우 사용

### 1. 최상단 경로에 와일드 카드로 주소 연결

```javascript
<Routes>
  <Route path "/*" element = {<Home />} />
  <Route path "/signup" element = {<Signup />} />
  <Route path "/login" element = {<Login />} />
</Routes>
```

### 2. 다음 경로 연결

```javascript
<Routes>
  <Route path="detail/:id" element={<Detail />} />
  <Route path="Post" element={<Post />} />
  <Route path="update/:id" element={<Update />} />
</Routes>
```

### 3. Link & Navigate 를 해야한다면?

- 평소 해주던 방식으로 하면 됨!

```javascript
<StLink to={`/detail/${id}`}>
```
