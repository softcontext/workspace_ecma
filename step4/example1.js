var x = 100;
var obj = {
  y:200,
  x,
  add() {
    return this.x + this.y;
  }
};

console.log(obj);
console.log(obj.add());
