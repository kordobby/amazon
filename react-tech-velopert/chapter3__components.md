# Chapter 03 - Component

### [03] props

#### [03-1] JSX 내부에서 props 렌더링

- props 값은 컴포넌트 함수의 파라미터로 받아와서 사용 가능
- props 를 렌더링할 때는 JSX 내부에서 { } 기호로 감싸주기

#### [03-2] 컴포넌트를 사용할 때 props 값 지정하기

```javascript
import MyComponent from "./MyComponents";

const App = () => {
  return <MyComponent name="React" />;
};

export default App;
```

```javascript
const MyComponent = props => {
  return <div> 제 이름은 {props.name} 입니다
  {/* React */}
}
```

#### [03-3] props 기본값 설정 : defaultProps

```javascript
(...)
  return <MyComponent />;
(...)
```

```javascript
const MyComponent = props => {
  return <div> 제 이름은 {props.name} 입니다
}

MyComponent.defaultProps = {
  name : '기본 이름'
};

export default MyComponent;
```

#### [03-4] 태그 사이의 내용을 보여주는 children

- children
  - react component를 사용할 때 component tage 사이의 내용을 보여주는 props

```javascript
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent>React</MyComponent>;
};

export default App;
```

```javascript
const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다.
      <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
```

#### [03-5] 비구조화 할당 문법을 통해 props 내부 값 추측하기

```javascript
const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      <span>{name}</span>
      <span>{children}</span>
    </div>
  );
};
```

```javascript
const MyComponent = ({ name, children }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{children}</span>
    </div>
  );
};
```

#### [03-6-0] propTypes를 통한 props 검증

- 컴포넌트의 필수 props를 지정하거나 props의 type을 지정할 때는 propTypes 사용
- 컴포넌트의 propsTypes를 지정하는 방법은 defaultProp 설정과 비슷함
- 우선 propTypes를 사용하려면 코드 상단에 import 구문을 사용해 불러와야함

```javascript
import PropTypes from 'prop-types';

const MyComponent = ({name, children}) => {
  return (...)
};

MyComponent.defaultProps = {
  name : '기본이름'
}

MyComponent.propTypes = {
  name : PropTypes.string
  // name 값은 무조건 string 형태로 전달해야함
}
```

#### [03-6-1] isRequired를 사용한 필수 propTypes 설정

```javascript
import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다.
      <br />
      children 값은 {children} 입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "basic",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
```

```javascript
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyComponent name="React" favoriteNumber={1}>
      React
    </MyComponent>
  );
};
```

#### [03-6-2] 더 많은 PropTypes 종류

- array : 배열
- arrayOf(다른 PropType) : 특정 PropType으로 이루어진 배열
  - example => arrayOf(PropTypes.number) // 숫자로 이루어진 배열
- bool : true or false
- number : 숫자
- object : 객체
- string : 문자열
- symbol : ES6의 Symbol
- node : 렌더링할 수 있는 모든 것
- instanceOf(클래스) : 특정 클래스의 인스턴스 (ex. instanceOf(MyClass))
- oneOf(['dog', 'cat']) : 주어진 배열 요소 중 값 하나
- onOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열 안의 종류 중 하나
- objectOf(React.PropTypes.number) : 객체의 모든 키 값이 인자로 주어진 PropType 인 객체
- shape ({name : PropTypes.string, num : PropTypes.number}) : 주어진 스키마를 가진 객체
- any
