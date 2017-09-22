class Car {
  constructor(color, doors=4, width=10, height=30){
    this.color = color;
    this.doors = doors;
    this.width = width;
    this.height = height;
  }
  start(){
    console.log('Car is running.');
  }
  static info(obj){
    console.log('Object Info : '+ JSON.stringify(obj));
  }
  // 객체의 멤버 프로퍼티의 접근을 제어하는 용도가 아니다.
  // 갖고 있는 프로퍼티를 그냥 주는 것이 아니라
  // 무언가 조작을 행한 후 리턴하고 싶을 때 사용한다.
  get area(){
    return this.width*this.height;
  }
  set area(area){
    this.width = area/30;
    this.height = area/20;
  }
}

var c = new Car('white', 3);
console.log(c.color);
c.start();
Car.info(c);
console.log('----------------');
console.log('area = '+c.area);
c.area = 600;
console.log(c);
console.log('area = '+c.area);
