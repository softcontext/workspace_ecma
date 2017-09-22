// Hoisting
// 컴파일러는 코드를 한줄씩 컴파일하기 전에
// 글로벌 스코프에 있는 자원을 최 상단으로 끌어올린다.

/*
var x;
var y;
function z() {
  console.log('z() called.');
}
*/

console.log(x);
console.log(typeof y);
z();

console.log('------------------');

var x = 10;
var y = function () {
  console.log('y() called.');
};
function z() {
  console.log('z() called.');
}

console.log('------------------');

console.log(x);
y();
z();
