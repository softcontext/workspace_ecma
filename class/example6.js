class Car {
  constructor(){
    this.color = 'white';
  }
  start(){
    console.log('Car is running.');
  }
  static info(obj){
    console.log('Object Info : '+ JSON.stringify(obj));
  }
}

// Car.info = function (obj) {
//   console.log('Object Info : '+ JSON.stringify(obj));
// };

var c = new Car();
// 1.객체가 직접 갖고 있는 자원을 사용
console.log(c.color);
// 2.객체의 부모가 갖고 있는 자원을 사용
c.start();
// 3.함수가 직접 갖고 있으면서 static하게 제공하는 자원을 사용
Car.info(c);
