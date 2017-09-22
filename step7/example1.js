global.count = 100;
console.log(this === global);
console.log(this === exports);

var obj = {
  count:0,
  plus:function (...args) {
    console.log(args);
    this.count++;
    return this;
  },
  show:function () {
    console.log('count = '+this.count);
  }
};

// this
// 함수의 소유자, 사용자, 호출자, 작업대상. 즉, Context라고 부른다.
// 함수를 호출할 때 this가 결정된다.
console.log(obj);
obj.plus().show();

var increment = obj.plus;
increment('A', 'B', 'C');
obj.show();
console.log(global.count);

// call(this, 1, 2, 3), apply(this, [1,2,3]), bind()

increment.call(obj, 'A', 'B', 'C');
increment.apply(obj, ['A', 'B', 'C']);
obj.show();

var increase = increment.bind(obj);
increase('A', 'B', 'C');
obj.show();
