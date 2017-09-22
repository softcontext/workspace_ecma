class Car {
  constructor(color){
    this.color = color;
  }
  start(){
    console.log('Car is running.');
  }
}

class Bus extends Car {
  constructor(color, doors=4){
    super(color);
    this.doors = doors;
  }
  // 자바의 @Override
  start(){
    super.start();
    console.log('Bus is running.');
  }
}

var b = new Bus('black', 2);
console.log(b);
b.start(); // Bus is running.
