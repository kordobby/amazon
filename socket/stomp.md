# Stomp

- Simple Text Oriented Messaging Protocol
- text 기반의 프로토콜
- method
  - connect
  - subscribe
  - send
  - disconnect
  - unsubscribe
- connect -> subscribe 이후 별오의 요청 없이 서버로부터 데이터를 받을 수 있는 상태가 되며, 이 때 send method로 데이터 전송 가능
- 연결을 해제할 때, disconnect, unsubscribe

## 적용 코드

```javascript
const ChattingRoom = (props) => {
  // socket communication obj
  const socket = new SockJS("/maybe uri?");
  const stompClient = Stomp.over(socket);

  // Get room number
  const { roomName, category } = useSelector((state) => state.chat.currentChat);
  const roomId = useSelector((state) => state.chat.currentChat.roomId);

  // token
  const token = getCookie("accessToken");
  const dispatch = useDispatch();

  // 보낼 메세지 텍스트
  const messageText = useSelector((state) => state.chat.messageText);
  // sender info
  let sender = useSelector((state) => state.use.userInfo?username);
  if (!sender) {
    sender = getCookie('username');
  };

  // rendering 마다 연결, 구독
  // 다른 방으로 옮길 때 연결, 구독 해제
  React.useEffect(() => {
    wsConnectSubscribe();
    return () => {
      wsDisconnectUnsubscribe();
    };
  }, [roomId]);

  // 웹소켓 연결, 구독
  function weConnectSubscribe() {
    try {
      ws.connect(
        {
          token: token
        },
        () => {
          ws.subscribe(
            `/sub/api/chat/rooms/${roomId}`,
            (data) => {
              const newMessage = JSON.parse(data.body);
              dispatch(chatActions.getMessages(newMessage));
            }, {
              token: token
            }
          );
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  return <></>;
};

function wsDisconnectUnsubscribe() {
  try {
    ws.disconnect(
      () => {
        ws.unsubscribe('sub-0');
      },
      {token: token}
    );
  } catch (error) {
    console.log(error);
  }
}

function waitForConnection(ws, callback) {
  setTimeout(
    function() {
      if (ws.ws.readyState === 1) {
        callback();
        // 연결이 안되었으면 재호출
      } else {
        waitForConnection(ws, callback);
      }
    },
    1 // 밀리초 간격으로 실행
  );
}

function sendMessage() {
  try {
    // token이 없으면 로그인 페이지로 이동
    if(!token) {
      alert('토큰이 없습니다. 다시 로그인 해주세요!');
      navigate('/');
    }
    // send 할 data
    const data = {
      type : 'TALK',
      roomId : roomId,
      sender: sender,
      message: messageText
    };
    // 빈문자열이면 return
    if (messageText === '') {
      return;
    }
    // Loading..
    dispatch(chatActions.isLoading());
    waitForConnection(ws, function() {
      ws.send(
        '/api/chat/message',
        {token, token},
        JSON.stringify(data)
      );
      console.log(ws.ws.readyState);
      dispatch(chatActions.writeMessage(''));
    });
  } catch (error) {
    console.log(error);
    console.log(ws.ws.readyState);
  }
}
```

## 내가 공부해서 써본 코드

```javascript
const ChattingRoom = (props) => {
  // socket communication obj
  // SockJS 객체를 선언해 내부 매개변수로 uri 넣어줌
  // STOMP 초기화를 위해 over()를 이용, SockJS 정보를 기반으로 설정
  const socket = new SockJS("/maybe uri?");
  const stompClient = Stomp.over(socket);

  // token
  const token = getCookie("accessToken");
  const loginPlayer = getCookie("username");

  // 웹소켓 연결, 구독
  function connectSubscribe() {
    try {
      // 1st arg : token
      // 2nd arg : function to subscribe?
      stompClient.connect(
        {
          token: token,
        },
        () => {
          stompClient.subscribe(
            `/sub/api/chat/rooms/${roomId}`,
            (data) => {
              const newMessage = JSON.parse(data.body);
              dispatch(chatActions.getMessages(newMessage));
            },
            {
              token: token,
            }
          );
          // 다중 구독일 경우에는 여기서부터 subscribe function을 더 써주면 되려나? (실험 필요)
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  return <></>;
};

function disconnectUnsubscribe() {
  try {
    ws.disconnect(
      () => {
        stompClient.unsubscribe("sub-0");
      },
      { token: token }
    );
  } catch (error) {
    console.log(error);
  }
}

function waitForConnection(ws, callback) {
  setTimeout(
    function () {
      if (ws.ws.readyState === 1) {
        callback();
        // 연결이 안되었으면 재호출
      } else {
        waitForConnection(ws, callback);
      }
    },
    1 // 밀리초 간격으로 실행
  );
}

function sendMessage() {
  try {
    // token이 없으면 로그인 페이지로 이동
    if (!token) {
      alert("토큰이 없습니다. 다시 로그인 해주세요!");
      navigate("/");
    }
    // send 할 data
    const data = {
      type: "TALK",
      roomId: roomId,
      sender: sender,
      message: messageText,
    };
    // 빈문자열이면 return
    if (messageText === "") {
      return;
    }
    // Loading..
    dispatch(chatActions.isLoading());
    waitForConnection(ws, function () {
      ws.send("/api/chat/message", { token, token }, JSON.stringify(data));
      console.log(ws.ws.readyState);
      dispatch(chatActions.writeMessage(""));
    });
  } catch (error) {
    console.log(error);
    console.log(ws.ws.readyState);
  }
}
```
