// var 로 만드는 변수는 함수스코프에 영향을 받는다.
// 그러나, 조건문에 스코프에 영향을 받지 않는다.
if (true) {
  var a = 1;
  console.log(a);
}

console.log(a);

function add() {
  var b = 2;
}

console.log(b);
