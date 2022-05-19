# Destructuring
<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## destructuring ?
* Object 나 array, 그 외 요소들 안의 변수를 밖으로 꺼내서 사용할 수 있도록 하는 것
* 배열이나 객체 내 변수들을 편히고 쉽게 만들어서 사용할 수 있게 해주는 아주 고마운 ES6 문법

<hr/>

* object destructuring
* function destructuring

<hr/>

## #5-0 Object Destructuring

### object destructuring
#### 1. 사용 방법
```javascript
const { route : { route1 }} = targetObject;
const { route : { route1 = default1 }} = targetObject1;
```

  * 구버전 코드와의 비교  예시
    ```javascript
    const settings = {
      notifications : true
    };

    const notification = settings.notifications
    const { notifications } = settings;
    // { notifications } 자체로 변수가 만들어지기 떄문에 console에 찍어도 잘 나옴
    // { notifications } == settings.notification
    // object를 다룰 때 sssssuper 유용한 방법임
    // setting 에 접근하려고 setting.뭐시기.뭐시기 보다 훨씬 편함
    ```

#### 2. 사용 예시
* settings 라는 object가 있다고 했을 때, Object destructuring 해보자
  ```javascript
  const settings = {
    notifications : {
      follow : true,
      alerts : true,
      unfollow : false,
    },
    color : {
      theme : "dark"
    }
  };
  ```


* notifications의 follow 에 접근해보자
  ```javascript
    const settings = {
    notifications : {
      follow : true,
      alerts : true,
      unfollow : false,
    },
    color : {
      theme : "dark"
    }
  };

  const { notifications : { follow } } = setting;
  console.log(follow);

  // 변수 desctructuring 
  // 1. const follow = settings;
  // 2.      {      }
  // 3.      { notifications : { follow }}
  // => notifications 안에 있는 follow 로 접근
  // const {notifications : {follow}} = settings;
  ```
* color 의 값에 통째로 접근하고 싶다면?
  ```javascript
    const settings = {
    notifications : {
      follow : true,
      alerts : true,
      unfollow : false,
    },
    color : {
      theme : "dark"
    }
  };

  const {notifications : {follow}, color} = settings;

  console.log(follow); // true
  console.log(color); // {theme : "dark"}
  ```
* 존재하지 않는 key 값 안에 있는 이미 존재하는 key에 접근한다면? 
  ```javascript
  const settings = {
    color : {
      theme : "dark"
    }
  };

  const { notifications : { follow }} = settings;
  // Uncaught TypeError : cannot destructure property 'follow' of 'undefined' or 'null'
  // 당연히 타입 에러가 나겠지....

   const { notifications } = settings; // undefined
   console.log(notifications) // undefined
  ```
* 존재하지 않는 key 값에 접근한다면 어떻게 될까?
  ```javascript
  const settings = {
    notifications : {
      alerts : true,
      unfollow : false,
    },
    color : {
      theme : "dark"
    }
  };

  const { notifications : { follow }} = settings;

  console.log(follow); // undefined
  ```
* 존재하지 않는 key값을 생성해 default 값을 넣어줄 수 있을까?
  ```javascript
  const { existKey : { createKey = defaultValue }} = variableName;
  const { createKey1 : { createKey2 = defaultValue } = {} } = variableName;
  ```
  ```javascript
  const settings = {
    notifications : {
      alerts : true,
      unfollow : false,
    },
    color : {
      theme : "dark"
    }
  };

  // settings 안의 notification에 들어가서 follow가 있는지 찾아본 다음 follow 가 없다면 follow = false 라고 선언
  const { notifications : { follow = false }} = settings;

  console.log(follow); // false
  ```
* 존재하지 않는 key값을 생성해 default 값을 넣어줄 수 있을까?
  ```javascript
  const settings = {
    color : {
      theme : "dark"
    }
  };

  // settings 안을 보고 noti- 에 들어가서 follow를 찾아
  // follow가 없으면 follow = false
  // noti- 가 없으면 noti- 는 빈 Object
  const { notifications : { follow = false } = {} } = settings;

  console.log(follow); // false
  ```


<br/>
<br/>
<hr/>

## #5-1 Array Destructuring

* array destructuring은 가져온 정보를 조작하지 않을 때 쓰기 좋음 (ex. 수정 할수 없는 외부 API)
* Array의 위치요소를 반환받아서 array 각 요소들의 value를 변수에 저장
* 일단 really xucked up array(NOT SEXY)가 있다고 가정해보면, 
* 구버전에서의 코드
  ```javascript
  const days = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]

  // 이 중에서 앞의 세개만 가져오려면?
  const mon = days[0];
  const tue = days[1];
  const wed = days[2];

  console.log(mon, tue, wed);
  // Jinjja Not Sexy Bullshit Lines
  // array가 끝도 없었으면 어쩔려고 그래?
  // 그러니까 우리는 destructuring을 해야해
  ```
* ES6 코드 (1)
  ```javascript
  const days = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]

  // 이 중에서 앞의 세개만 가져오려면?
  const [ mon, tue, wed ] = days;
  // array에서는 중괄호 {} 대신에 [] 이거를 씀
  // 왜? 쟤들은 key값이 없잖아. array에는 포지션 값만 있다고
  // Object destructure 에서는 key 값이 있었고
  // 얘는 그런게 없다고 그니까 object 처럼 route 설정 못해

  console.log(mon, tue, wed); // Mon Tue Wed
  ```
* ES6 코드 (2)
  ```javascript
  const days = ()  => [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]

  // 이 중에서 앞의 세개만 가져오려면?
  const [ mon, tue, wed ] = days();

  console.log(mon, tue, wed); // Mon Tue Wed
  ```



  ```javascript
  const days = [ "Mon", "Tue", "Wed" ]

  // 없는 값을 default 값으로 넣어주려면?
  const [ mon, tue, wed, thu = "Thu" ] = days;

  console.log(mon, tue, wed, thu); // Mon Tue Wed Thu
  ```

  ```javascript
  cont days = () => [ "Mon", "Tue", "Wed" ]
  const [ mon, tue, wed, thu = "Thu" ] = days();
  console.log(mon, tue, wed, thu); // Mon Tue Wed Thu
  ```


## #5-2 Renaming
### Renaming : Obj Destructuring 그대로 유지하고 변수명을 변경하는 방법

### choesen_color 변수명을 chosenColor로 바꿔주기
  * 바꿔줘야할 코드
    ```javascript
    const settings = {
      color : {
        chosen_color : "dark"
      }
    };

    const {
      color : { chosen_color = "light" }
    } = settings;

    console.log(chosen_color);

    // 어딘가서에 API를 받아왔고, chosen_color 같은 xucked up name이 있어
    // 이제 저 xucked up name을 바꿔보자, rename!
    ```
* 예전 방식
  ```javascript
  const settings = {
    color : {
      chosen_color : "dark"
    }
  };

  const {
    color : { chosen_color = "light" }
  } = settings;

  // 물론 이렇게 만들어줄 수는 있는데,
  // 문장 봐 줜나 별로지?
  const chosenColor = settings.color.chosen_color || "light";

  console.log(chosenColor);
  ```
* ES6 CODE
  ```javascript
  const settings = {
    color : {
      chosen_color : "dark"
    }
  };

  // 그래서 우리는 이렇게 할거야
  // 바꾸고 싶은 key 뒤에 : 를 붙이고 원하는 이름을 넣어
  // 이제 아래 코드의 의미를 해석하면
  // setting에 들어가서 color에 접근해 chosen_color를 chosenColor로 바꿔주고
  // chosenColor에 값이 없는 상태라면 "light"를 넣어줘
  // value 값이 바뀌어버리는건 아님
  const {
    color : { chosen_color : chosenColor = "light" }
  } = settings;
  // let을 써줘도 작동함

  console.log(chosenColor); // dark
  // light 가 안나오는 이유는 default 값으로만 설정해줬기 때문!
  ```
* 만약 여기서 let 변수로 chosenColor를 만들게 되면?
    * let으로 변수를 선언하고, const 선언을 지운 후 ()로 감싸줌
    * let 변수에 chosenColor 업데이트 하기
    ```javascript
    const settings = {
      color : {
        chosen_color : "dark"
      }
    };

    // let 변수를 업데이트하고 싶다면 ? 

    let chosenColor = "blue";
    console.log(chosenColor); // blue
    ({
      color : { chosen_color : chosenColor = "light" }
    } = settings)
    // 괄호를 써서 let으로 선언되어있는 변수를 업데이트할 수도 있음

    console.log(chosenColor); // dark
    ```
</br>
</br>
<hr/>
</br>

## #5-3 Function Destructuring

### 기존 함수의 argument 작성
* 넘겨주는 인수의 순서가 틀려 문제가 발생할 수 있음
* 대부분의 매개변수에 기본값이 설정되어 있어 굳이 인수를 넘겨주지 않아도 되는 경우에 문제가 발생
 ```javascript
 function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}
```
* 아래 코드를 봤을 때, 지저분한게 보이죠? 매개변수가 많아질수록, 가독성은 더 떨어짐
</br> => 이럴 때 구조 분해를 사용!

```javascript
// 기본값을 사용해도 괜찮은 경우 아래와 같이 undefined를 여러 개 넘겨줘야 합니다.
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
```
* 구조분해를 사용한 함수에서의 구조분해 사용 예시
```javascript
// 함수에 전달할 객체
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// 똑똑한 함수는 전달받은 객체를 분해해 변수에 즉시 할당함
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – 객체 options에서 가져옴
  // width, height – 기본값
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu(options);
```

### 진보형 추가 예시
* 변수들의 가독성을 확보하고, 각 변수의 기본값 설정하고 싶다면 obj destructuring 사용

  ```javascript
  function saveSettings({follow, alert, color = "blue" }) {
    console.log(color);  // blue
    console.log(follow, alert); // true, true
    console.log(yes); // ReferenceError: yes is not defined
    } 


  saveSettings({
    follow : true,
    alert : true,
    mkt : true
  })
  ```

  ```javascript
  function saveSettings({notifications, color : {theme} }) {
    console.log(theme); // yellow
    } 

  saveSettings({
    notifications : {
      follow : true,
      alert : true,
      mkt : true
    },
    color : {
      theme : "yellow"
    }
  });
  ```

## #5-4 Value Shorthands 
### 변수명 단축
* 변수 이름을 똑같이 하고 싶다면 shorthand property (단축속성명)을 사용할 수 있음
  ```javascript
  // 선언부에서 변수 a, b, c, 에 각각 "foo", 42, {} 를 할당
  var name = "Dobby";
  var age = 20;
  var script = { dobby : "is_free" };

  // 기존 방법
  /* 변수 houseElfDobby 에 객체를 할당
   => 해당 객체의 key 'name' 는 변수 name의 값("Dobby")을 value 값으로,
                  key 'age' 는 변수 b의 값(20)을 value값으로,
                  key 'script'는 변수 script의 값({ "dobby", "is", "free" })을 value값으로 할당
  */
  var houseElfDobby = {
    name : name,
    age : age,
    script : script
  };
  ```

  ```javascript
  // key와 변수가 같다면, 
  // If we use property shorthand,
  var name = "Dobby";
  var age = 20;
  var script = script = { dobby : "is_free" };

  var houseElfDobby = { name, age, script }; // 단축 속성명 (ES6)

  console.log(houseElfDobby); // {name: 'Dobby, age:20, script: {dobby: 'is_free'}}
  ```

  ```javascript
  var name = "Dobby";
  var age = 20;
  var script = { dobby : "is_free" };

  var houseElfDobby = {
    name,
    age,
    // key와 변수가 다르다면 
    isScript : script };

  console.log(houseElfDobby); // { name: 'Dobby', age: 20, isScript: { dobby: 'is_free' } }

  ```

* 그러니까 결론은 객체의 속성값 일부가 이미 변수로 존재하면 간단하게 변수이름만 적어주면 된다는 뜻!
  ```javascript
  // 단축 속성명을 이용한 객체 생성
  const name = 'mike';
  const age = 21;
  const obj = {
      age : 21,
      name,    // 단축속성명
      getName() {return this.name}
  }

  // 콘솔 로그 출력 시 단축속성명 활용
  console.log({name,age}) // {name : 'mike', age:21}
  ```

## #5-5 Swapping and Skipping

### Swapping
* 원하는 변수의 값을 서로 바꿔주는 것
```javascript
 [ 바꿔줄 이름 ] = [ 바꾸고 싶은 변수]
 ```
 


  ```javascript
  let mon = "Sat";
  let sat = "Mon";

  // 누가 데이터로 장난쳐놨네.. 돌려놓자
  [ sat, mon ] = [ mon, sat ]
  // 바꾸고 싶은 변수들을 우측에 배열을 만들고
  // 바꿔야할 이름을 좌측 배열에 넣자
  alert( `${mon} ${sat}`); // mon sat
  ```

### Skipping
* 빈 칸을 [콤마] 로 채우기
  ```javascript
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const [ , , , thu, fri] = days;

  console.log(thu, fri); // thu, fri
  ```

  ```javascript
  const number = ["1", "2", "3", "4", "5", "6", "7"];
  const [ one, two, , , five, six ] = number

  console.log(one); // 1
  console.log(three); // undefined
  console.log(one, seven); // seven is not defined
  console.log(one, five); // 1 5
  ```

