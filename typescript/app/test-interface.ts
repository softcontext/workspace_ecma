interface IGreeter {
  greet(): string;
}

class Greeter implements IGreeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return 'Hello, ' + this.greeting;
  }
}

var greeter = new Greeter('Everybody');
var result = greeter.greet();
console.log(result);
