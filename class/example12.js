var car = {
  stop(){
    console.log('Car has stopped.');
  }
}

var cleaner = {
  clean(){
    console.log('Car has cleaned.');
  }
}

class Bus {
  constructor(color='white', doors=4){
    this.color = color;
    this.doors = doors;
  }
  start(){
    console.log('Bus is running.');
  }
}

// Bus.prototype.__proto__ = car;
Object.setPrototypeOf(Bus.prototype, car);

Bus.prototype.cleaner = cleaner;

var b = new Bus();
console.log(b);
b.start();
b.stop();
// JS 단일상속 랭귀지입니다.
// First Class 특징을 활용하여 부모의 프로토타입객체에 동적으로
// 다른 객체를 참조하는 프로퍼티를 추가해서 자식 객체가 사용하도록 할 수 있다.
b.cleaner.clean();
