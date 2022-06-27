import sockJS from "sockjs";
import stompJS from "stompjs";

const StompPracFile = () => {
  // [1] client 생성
  // step#1 : sockJS 의 인자로 연결할 protocol 의 URI를 입력해주고 임의의 변수에 할당
  const socket = new sockJS("uri");
  // step#2 : stomp의 protocol 위에 sockJS가 돌아가도록 stomp.over() 의 인자로 socket 넣기
  // => 앞으로는 stompClient 라는 변수에 서버 연결, 메세지 전송, 구독 값 등을 추가 할당할 것
  const stompClient = stomp.over(socket);

  // [2] server connection
  // 아래 코드로 서버에 connect frame 전송
  // stompClient.connect({header obj}, callback function)
  // => 소켓 연결이 완료되면 콜백함수가 실행되며, 이곳에 서버 연결 후 취할 다양한 액션을 넣음
  stompClient.connect({}, function () {});

  // [3] subscribe
  // stompClient.subscribe( 구독할 uri, callback function, header)
  // callback function 의 parameter를 통해 data 조회 가능
  stompClient.subscribe(`/api/join/room/${roomNumber}`, function (data) {}, {});

  // [4] unsubscribe
  // unsubscribe? 서버와의 disconnect 개념이 아닌 특정 msg의 send 프레임 수신하지 않는 것
  // 아래 코드는 ${roomNumber} 을 구독을 끊는다는 의미
  stompClient
    .subscribe(`/api/join/room/${roomNumber}`, function (data) {}, {})
    .unsubscribe();

  // [5] send message
  // stompClient( 전송에 필요한 uri, header, body(data 전송, JSON 형태))
  const message = {
    key: value,
  };
  stompClient.send("/message", {}, JSON.stringify(message));

  // [6] unsubscribe
  // 웹소켓 연결 끊기 => Stomp.over()를 할당한 변수에 disconnect() 로 체이닝
  stompClient.disconnect();

  // [7] 프레임 개발자 도구에서 숨기기 => 어디서 쓰는지는 아직 모름
  stompClient.debug = null;
  return <></>;
};

export default StompPracFile;
