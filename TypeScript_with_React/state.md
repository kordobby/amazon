# TypeScript

### [02] useState

- `useState` 를 사용할 때는 `useState<number>()` 와 같이 Generics를 사용해 해당 상태가 어떤 타입을 가지고 있을지 설정하면 됨
  - 사실 안해줘도 상관음 없음
  - 상태가 null 일 수도 있고 아닐 수도 있을 때 Generics를 활용하면 좋음
    // Generics가 뭐지??????????????

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState < number > 0;
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
```

```
type Information = { name: string, description: string };
const [info, setInfo] = useState < Information | null > (null);
```

### [03] input 상태 관리하기

```typescript
import React, { useState } from "react";

type MyFormProps = {
  obSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;
  const onChange = (e: any) => {};
  const handleSubmit = (e: any) => {};
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit"> 등록 </button>
    </form>
  );
}

export default MyForm;
```
