global.count = 100;

var obj = {
  count:0,
  plus:function () {
    this.count++;
    console.log('1.count = '+this.count);

    (function () {
      this.count++;
      console.log('2.count = '+this.count);
    })();
  }
};

obj.plus();
obj.plus();
