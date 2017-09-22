// global.count = 100;

var obj = {
  count:0,
  plus:function () {
    this.count++;
    console.log('1.count = '+this.count);

    var self = this;

    (function () {
      self.count++;
      console.log('2.count = '+self.count);
    })();
  }
};

obj.plus();
obj.plus();
