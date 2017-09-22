class Car {
  // doors: number;
  color: string;

  constructor(private doors: number){
    // this.doors = doors;
    this.color = 'white';
  }
}

var c = new Car(3);
console.log(c);
