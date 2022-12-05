# Data Binding

### data binding 이란?

- 화면상에 보여지는 데이터(View) 와 브라우저 메모리에 있는 데이터(Model) 을 묶어서(Binding) 서로 간의 데이터를 동기화하는 것을 의미
  - ex) HTML 에서 서버 혹은 스크립트 상에서 받아온 데이터를 화면상에 그려주고 있다고 가정했을 때, 해당 값이 변경될 경우 다시 HTML 상에 데이터(값)을 변경된 값에 따라 맞춰주는 동작을 ‘데이터 바인딩’이라고 함

### 예제

1. 함수형 컴포넌트 안에서 ‘initData’로 초기화 한 값을 최초 HTML상에 출력
2. 이후 ‘재 데이터 바인딩’ 버튼을 누르면 상태 값을 변경시키고, HTML에서 데이터 바인딩

```javascript
import React, { useState } from "react";
import { CommonType } from "../../type/common/CommonType";

const DataBindingBasicComponent = () => {
  /**
   * 브라우져 메모리상에 존재하는 데이터
   */
  const [initData, setInitData] = useState({
    greet: "안녕하세요",
    info: "데이터 바인딩에 대해서 공부하고 있습니다.",
  });

  /**
   * 버튼을 클릭하면 상태로 지정한 메모리로 데이터를 바인딩 한다.
   */
  const reDataBinding = () => {
    setInitData({
      greet: "다시 한번 반갑습니다",
      info: "데이터를 바인딩 합니당",
    });
  };
  return (
    <div>
      <h1>{initData.greet}</h1>
      <h2>{initData.info}</h2>
      <button onClick={reDataBinding}>재 데이터 바인딩</button>
    </div>
  );
};

export default DataBindingBasicComponent;
```

### One-way Data Binding

- JS(Model) 에서 HTML(View)로 한 방향으로만 데이터를 동기화하는 것을 의미
- 단방향이기에 역방향으로의 직접적 데이터 갱신은 불가능
  - 이벤트 함수를 주고 함수를 호출한 뒤 Javascript 에서 HTML 로 데이터를 변경해야함

### Two-way Data Binding

- parent Component → ( props ) → child component → Emit Event → parent Component
- 양방향 데이터 바인딩은 JS(model)와 HTML(view) 사이에 viewmodel이 존재해서 하나로 묶어 바인딩 되므로 둘 중 하나만 변경되어도 함께 변경되는 것을 의미함
- 컴포넌트 간에는 부모 컴포넌트에서 자식 컴포넌트로는 props 를 통해 데이터를 전달하고, 자식 컴포넌트에서 부모 컴포넌트로 emit event 를 통해 데이터를 전달하는 구조
