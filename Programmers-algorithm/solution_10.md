# Programmes algorithm #10

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 행렬의 덧셈

https://programmers.co.kr/learn/courses/30/lessons/12954

### 문제 설명

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.




### 제한 조건

- 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

### 입출력 예

- arr1 = [[1,2],[2,3]] ;
- arr2 = [[3,4],[5,6]] ;
- return = [[4,6],[7,9]] ;

### 풀이 과정

- 문제 풀이

```javascript
function solution(arr1, arr2) {
    var answer = [[]];
    for (var i=0; i<arr1.length; i++){
        answer[i] =[];
        for(var j=0; j<arr1[i].length; j++){
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}
```

 ```javascript
function solution(arr1, arr2){
    return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}
  ```



### 공부 내용
