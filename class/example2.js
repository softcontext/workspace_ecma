function car() {
  this.color = 'white';
}

car.prototype.start = function () {
  console.log('car is running.');
};

car.info = function (obj) {
  console.log('Object Info : '+ JSON.stringify(obj));
};

console.log(car()); // 1. 메소드로 사용
var c = new car(); // 2. 생성자로 사용
console.log(c.color); // 객체가 직접 갖고 있는 자원을 사용
c.start(); // 객체의 부모 자원을 사용
car.info(c); // 함수가 static하게 제공하는 자원을 사용
