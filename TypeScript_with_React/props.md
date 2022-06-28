# TypeScript

### [01] Props

```javascript
import React from "react";

type GreetingsProps = {
  name: string,
  mark: string,
};

function Greetings({ name, mark }: GreetingProps) {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};
```

- 컴포넌트에 만약 있어도 되고 없어도 되는 props가 있다면 `?` 문자를 사용

```javascript
import React from "react";

type GreetingProps = {
  name: string,
  mark: string,
  optional?: string,
};

function Greetings({ name, mark, optional }: GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
```

- 컴포넌트에서 특정 함수를 props로 받아오는 경우의 타입 지정

```javascript
import React from "react";
import Greetings from "./Greetings";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="Hello" onClick={onClick} />;
};

export default App;
```

```javascript
import React from "react";

type GreetingProps = {
  name: string,
  mark: string,
  optional?: string,
  onClick: (name: string) => void,
  // 아무것도 리턴하지 않는다는 함수를 의미
};

function Greetings({ name, mark, optional, onClick }: GreetingProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
        {/* console.log => "React says Hello" */}
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
```
