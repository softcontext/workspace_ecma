class Car {
  constructor(color){
    this.color = color;
  }
  start(){
    console.log('Car is running.');
  }
}

var c = new Car('white', 3);
console.log(c);
c.start();

class Bus extends Car {
  /*
  ReferenceError:
  Must call super constructor
  in derived class
  before accessing 'this'
  or returning from derived constructor
  */
  constructor(color, doors=4){
    // 생성자 함수에서 this를 사용하기전에
    // 부모 생성자를 명시적으로 호출해야 한다.
    super(color);
    this.doors = doors;
  }
}

var b = new Bus('black', 2);
console.log(b);
b.start();
