# Chapter 02 - JSX

### [01] JSX?

- JSX : JS의 확장 문법으로 XML과 매우 비슷하게 생김
- 이 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용해 일반 JS 형태의 코드로 변환됨

### [02] JSX 문법

#### [02-1] 감싸인 요소

- 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 함
- Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져하 한다는 규칙이 있기 때문
- div 태그를 사용하고 싶지 않을 때는 리액트 v16 이상부터 도입된 Fragment 로 감싸주면 됨

#### [02-2] 자바스크립트 표현

- JSX 안에서는 JS 표현식을 쓸 수 있음
- JS 표현식을 작성하기 위해서는 JSX 내부에서 코드를 { }로 감싸면 됨

#### [02-3] If문 대신 조건부 연산자

- JSX 내부의 JS 표현식에서 if문은 사용할 수 없음
- 조건에 따라 다른 내용을 렌더링해야 할 때는
  - JSX 밖에서 if문을 사용해 사전에 값을 설정
  - { } 안에 조건부 연산자를 사용

```javascript
function App() {
  const name = "react";
  return (
    <div>
      {name === "react" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </div>
  );
}
```

#### [02-4] AND 연산자(&&)을 사용한 조건부 렌더링

- 특정 조건을 만족할 때 내용을 보여주고, 만족하지 않을 때 아무것도 렌더링하지 않아야하는 상황에 사용

```javascript
function App() {
  const name = "react";
  return <div>{name === "react" && <h1>리액트입니다.</h1>}</div>;
}
```

#### [02-5] undefined를 렌더링하지 않기

- name 값이 undefined일 때 보여주고 싶은 문구가 있을 때는 아래와 같이 작성

```javascript
function App() {
  const name = "undefined";
  return <div>{name || "react"}</div>;
}
```
