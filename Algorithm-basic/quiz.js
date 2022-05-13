const a = 5;
const b = 3;

let star = "";

// 열 반복문
for(let i = 0; i < b; ++i){
  // 행 반복문
  for(let k = 0; k < a; ++k) {
    star += "*";
  }
  star += "\n";
}

console.log(star);


function solution(num) {
  var answer = '';
  // if 문 활용
  if (num%2 === 0 ) {
      answer = "Even"
  } else {
      answer = "Odd"
  }
  return answer;
}

let s = "abcde"

function solution(s) {
  var answer = '';
  
if (s.length % 2 === 1) {
  answer = s[((s.length) - 1) / 2];
} else {
  answer = s[s.length/2 -1] + s[s.length/2];
}
  
  return answer;
}


function solution(a, b) {
  var answer = 0;
  
  if (a <= b){
      for(let i = a; i <= b; i++){
          answer += i;}
  } else if (b < a) {
      for(let i = b; i <= a; i++){
          answer += i;}
      } 
  return answer;
}