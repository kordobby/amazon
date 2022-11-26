# axios

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-0080B9?style=flat&logo=React&logoColor=white"/>

## fetch 함수?
* Ajax 통신을 하는 함수

## axios
* 외부 패키지를 사용해서 Ajax 통신하는 것

```javascript
axios
  .get('url')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  ```

  * 위 코드에 대한 설명
     * axios 패키지에서 제공하는 axios 객체를 사용해 GET 리퀘스트를 보내고 그 리스폰스를 받는 코드
     * 사용법은 `axios.get` 이라고 쓰여있는 부분만 `fetch`로 바꾸면 fetch 함수와 사용법이 비슷
  
### axios
* axios 객체에서 리퀘스트를 보내는 많은 메서드들이 fetch 함수처럼 Promise 객체를 리턴
* fetch 함수와 매우 비슷한 사용법을 가짐

### axios만의 fetch 함수와는 차별화되는 몇가지 기능 및 장점
* 모든 리퀘스트, 리스폰스에 대한 공통 설정 및 공통된 전처리 함수 삽입 가능
* serialization, deserialization을 자동으로 수행
* 특정 리퀘스트에 대해 얼마나 오랫동안 리스폰스가 오지 않으면 리퀘스트를 취소할지 설정 가능(request timeout)
* 업로드 시 진행 상태 정보를 얻을 수 있음
* 리퀘스트 취소 기능 지원


### axios 의 단점
* 별도의 다운로드가 필요한 패키지라는 것

### 결론
* axios에서 제공하는 추가 기능이 필요한 경우에는 axios를 쓰고, 그런 기능이 필요하지 않고 별도의 패키지 다운로드를 원하지 않는 경우 getch 함수 사용
* 실무에서는 fetch 이외에 axios도 많이 씀
* axios 또한 리퀘스트를 보내는 주요 메서드들이 Promise 객체를 리턴