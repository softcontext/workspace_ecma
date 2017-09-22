function sum() {
  return arguments[0]+arguments[1];
}
console.log(sum(2,3));

var s = new sum();
console.log(s);

var add = (a, b) => a+b;
console.log(add(2,3));

// var a = new add(); 
// TypeError: add is not a constructor
