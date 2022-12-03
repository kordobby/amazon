# MVVM
- MVVM 패턴
- `Model + View + ViewModel` 을 합친 용어


## 구조
- `Model` : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분
- `View` : 사용자에서 보여지는 UI
- `View Model`
  - `View` 를 표현하기 위해 만든 `View` 를 위한 `Model` 
  - `View` 를 나타내주기 위한 `Model` 이자 `View` 를 나타내기 위한 데이터 처리를 하는 부분

## 동작
  1. 사용자의 `Action` 들이 `View` 를 통해 들어옴
  2. `View` 에 `Action` 이 들어오면 `Command` 패턴으로 `View Model`에 `Action` 전달
  3. `View Model`은 `Model` 에 데이터를 요청함
  4. `Model` 은 `View Model` 에게 요청받은 데이터를 응답
  5. `View Model` 은 응답 받은 데이터를 가공해 저장
  6. `View` 는 `View Model`과 데이터 바인딩을 해 화면을 나타냄

## 특징
  - `MVVM 패턴`은 `Command` 패턴과 `DataBinding` 두 가지 패턴을 사용해 구현됨
  - Command 패턴과 DataBinding 을 이용해 `View` 와 `View Model` 사이의 의존성을 없앰

## 장점
  - MVVM 패턴은 View 와 Model 사이의 의존성이 없음
  - Command 패턴과 데이터 바인딩을 사용해 뷰와 뷰모델 사이의 의존성 또한 없앤 디자인 패턴
  - 각각의 부분은 독립적이어서 모듈화해 개발할 수 있음

## 단점
  - MVVM 패턴의 단점은 뷰모델의 설계가 쉽지 않다는 점
