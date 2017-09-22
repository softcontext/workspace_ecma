console.log(this === global);
console.log(this === exports);
console.log('--------------');

function foo() {
  console.log(this === global);
  console.log(this === foo);
  console.log('--------------');

  setTimeout(function() {
    console.log(this === foo);
    console.log(this);
    console.log('--------------');

    console.log(this.a); // undefined
  }, 100);
}

foo.a = 'func';

// foo();
foo.call(foo);
