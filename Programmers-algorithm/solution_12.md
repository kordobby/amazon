# Programmes algorithm #11

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## x만큼 간격이 있는 n개의 숫자

https://programmers.co.kr/learn/courses/30/lessons/12954

### 문제 설명

새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.

### 제한 조건

놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

### 입출력 예

- x = 2. n = 5, answer = [2, 4, 6, 8, 10]

### 풀이 과정

- 문제 풀이

```javascript
function solution(price, money, count) {
    var answer = 0;
    var totPrice = 0;
    
    for (i = 0; i<=count; i++) {
        totPrice += i*price;
        let change = money - totPrice;
        if ( change > 0 ) {
            answer = 0;
        } else {
            answer = -change;
        }
    }
    return answer;
}
```
### 다른 풀이 방법
```javascript
function solution(price, money, count) {
    let answer = 0;

    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }

    return answer > money ? answer - money : 0;
}
```


### 공부 내용
