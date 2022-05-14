# Programmes algorithm #8

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 평균 구하기

https://programmers.co.kr/learn/courses/30/lessons/12944

### 문제 설명

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

### 제한 조건

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

### 입출력 예

- arr = [1,2,3,4], return = 2.5

### 풀이 과정

- 풀이 계획

  - 접근

    1. for 문을 돌려서 array의 각 요소를 확인
       ```javascript
        for(let i = 0; i <arr.length; ++i)
       ```
    2. 평균값을 구하기 위한 분자와 분모를 설정하자

       - 분모 : array의 합
       - 분자 : array의 길이

       ```javascript
       /* array의 합 */
       var sum = 0;
       sum += arr[i];

       /* array의 길이 */
       let leng = arr.length;
       ```

    3. 평균값 구하는 식 작성
       ```javascript
       answer = sum / leng;
       ```
    4. 계획한 것들 조합하기
       ```javascript
       var sum = 0;
       var asnwer = 0;

       for (let i = 0; i < arr.length; ++i) {
         sum += arr[i];
         let leng = arr.length;

         answer = sum / leng;
       }
       ```

- 문제 답안

```javascript
function solution(arr) {
  var sum = 0;
  var asnwer = 0;

  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    let leng = arr.length;

    answer = sum / leng;
  }
  return answer;
}
```

### 공부 내용
