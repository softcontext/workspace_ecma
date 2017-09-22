// 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// 0 1 2
for (var i = 0; i < 3; i++) {
  (function () {
      var j = i;
      setTimeout(function () {
        console.log(j);
      }, 1000);
  })();
}

for (let k = 0; k < 3; k++) {
  setTimeout(function () {
    console.log(k);
  }, 1000);
}
