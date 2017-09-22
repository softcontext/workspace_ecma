// 엄격모드를 적용한다고 신청한다.
"use strict";

x = 10;
var y = 20;

console.log(global.x);
console.log(global.y);

// var obj2 = {
//   get x() {
//     return 17;
//   }
// };
// obj2.x = 5;
