# React - design with CSS

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## React design with CSS (basic)


### 1. image 파일 불러오기
* 이미지 파일은 import 구문을 통해 불러오고, 불러온 이미지 주소를 src 속성으로 사용
```javascript
import diceImg from './assets/dice.png';

function Dice() {
  return <img src={diceImg} alt="주사위 이미지" />;
}

export default App;
```

### 2. 인라인 스타일
* 리액트에서 인라인 스타일은 문자열이 아닌 객체형으로 사용
* 프로퍼티 이름은 CSS 속성 이름으로, 프로퍼티 값은 CSS 속성 값으로 사용
* 프로퍼티 이름은 아래의 boarderRadius 처럼 대시 기호 없이 카멜 케이스로 써야함!
```javascript
const style = {
  backgroundColor : "pink"
  // 기존 CSS에서 작성하던 것과 다르게 CamelCase를 적용
};

function Button( {children, onClick}) {
  return (
    <button style = {style} onClick = {onClick}>
      {children}
    </button>
  )
}

export default Button;
```

```javascript
  import HandIcon from './HandIcon';
  import backgroundImg from './assets/purple.svg';

  // 인라인 스타일을 적용해주세요
  function HandButton({ value, onClick }) {
    const buttonStyle = {
      width: '166px',
      height: '166px',
      border: 'none',
      outline: 'none',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      backgroundImage: `url('${backgroundImg}')`,
      // 이미지 주소는 import 구문을 통해서 가져온 값을 템플릿 문자열로 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain'
    }


    const handleClick = () => onClick(value);
    return (
      <button style = {buttonStyle} onClick={handleClick}>
        <HandIcon value={value}  />
      </button>
    );
  }

  export default HandButton;
```

### 3. CSS 파일 불러오기
* import 구문으로 파일을 불러올 수 있는데, 이때 from 키워드 없이 쓰면 됨
```javascript
import diceImg from './assets/dice.png';
import './Dice.css';

function Dice() {
  return <img src={diceImg} alt="주사위 이미지" />;
}

export default App;
```

### 4. 클래스네임 사용하기
* CSS 파일에 정의된 클래스명을 className prop에 문자열로 넣어주기
* 이때 재사용성을 위해 className prop을 부모 컴포넌트에서 받으면 더 좋음
* CSS TIP
   * 내부적인건 자기 자신의 컴포넌트 스타일에서 설정
   * 외부적인건( margin 같은거 ) 부모 컴포넌트에서 설정

```javascript
import diceImg from './assets/dice.png';
import './Dice.css';



function Dice({ className = '' }) {  // CSS 파일에서 사용한 className을 prop 에 문자열로 삽입
  const classNames = `Dice ${className}`;
  return <img className={classNames} src={diceImg} alt="주사위 이미지" />;
}

export default App;
```