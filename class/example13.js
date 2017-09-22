class Bus {
  constructor(color='white', doors=4){
    this.color = color;
    this.doors = doors;
  }
}

var b = new Bus();
console.log(b);

// TypeError: Class constructor Bus cannot be invoked without 'new'
// 클래스문법으로 만든 함수는 메소드서비스를 제공하지 않는다.
// new 키워드와 같이 새 객체를 만드는 생성자 용도로만 사용해야 한다.
console.log(Bus());
