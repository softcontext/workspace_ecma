var obj = {
  a:10,
  b:20,
  add:function (a, b) {
    return a+b;
  }
};

// var a = obj.a;
// var b = obj.b;
// var add = obj.add;

var {a, b, add} = obj;

console.log(add(a, b));
