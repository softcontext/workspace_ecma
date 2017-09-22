class Car {
  constructor(color, doors=4){
    this.color = color;
    this.doors = doors;
  }
  start(){
    console.log('Car is running.');
  }
}

var c = new Car('white', 3);
console.log(c);
c.start();

class Bus extends Car {
  // constructor는 생략할 수 있다.
}

console.log(Bus.prototype.__proto__ === Car.prototype);

var b = new Bus('black', 2);
console.log(b);
b.start();
