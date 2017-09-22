function foo(a, b, c) {
  console.log(a, b, c);
  console.log(arguments); // { '0': 1, '1': 2, '2': 3 }

  return (x, y) => {
    console.log(x, y);
    console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
  }
}
foo(1, 2, 3)(4, 5);
